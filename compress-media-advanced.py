#!/usr/bin/env python3
"""
GLOVER MEDIA COMPRESSOR ADVANCED - Versión Mejorada
Compresión agresiva para archivos pesados y videos
Objetivo: Máxima reducción de tamaño manteniendo calidad
"""

import os
import sys
import shutil
import subprocess
import json
from pathlib import Path
import io
import time
from datetime import datetime
import math

# Try to import PIL, install if not available
try:
    from PIL import Image, ImageOps
except ImportError:
    print("Instalando PIL...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageOps

class Colors:
    RED = '\033[0;31m'
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    BLUE = '\033[0;34m'
    PURPLE = '\033[0;35m'
    CYAN = '\033[0;36m'
    NC = '\033[0m'  # No Color

class AdvancedMediaCompressor:
    def __init__(self):
        self.backup_dir = Path("./backup_original_media")
        self.log_file = Path("./compression_advanced_log.txt")
        self.temp_dir = Path("./temp_compression_advanced")
        
        # More flexible compression ratios
        self.min_compression_ratio_large = 0.70    # 70% for files > 50MB
        self.min_compression_ratio_medium = 0.50   # 50% for files 10-50MB
        self.min_compression_ratio_small = 0.30    # 30% for files < 10MB
        
        # File size thresholds
        self.large_file_threshold = 50 * 1024 * 1024   # 50MB
        self.medium_file_threshold = 10 * 1024 * 1024  # 10MB
        
        # Statistics
        self.total_files = 0
        self.compressed_files = 0
        self.total_original_size = 0
        self.total_compressed_size = 0
        self.skipped_files = 0
        self.error_files = 0
        
        self.create_directories()
    
    def create_directories(self):
        """Create necessary directories"""
        print(f"{Colors.CYAN}📁 Creando directorios necesarios...{Colors.NC}")
        self.backup_dir.mkdir(exist_ok=True)
        self.temp_dir.mkdir(exist_ok=True)
        
        with open(self.log_file, 'w') as f:
            f.write(f"{datetime.now()}: Starting ADVANCED compression process\n")
    
    def bytes_to_human(self, bytes_size):
        """Convert bytes to human readable format"""
        if bytes_size < 1024:
            return f"{bytes_size}B"
        elif bytes_size < 1048576:
            return f"{bytes_size // 1024}KB"
        elif bytes_size < 1073741824:
            return f"{bytes_size // 1048576}MB"
        else:
            return f"{bytes_size // 1073741824:.1f}GB"
    
    def get_min_compression_ratio(self, file_size):
        """Get minimum compression ratio based on file size"""
        if file_size >= self.large_file_threshold:
            return self.min_compression_ratio_large
        elif file_size >= self.medium_file_threshold:
            return self.min_compression_ratio_medium
        else:
            return self.min_compression_ratio_small
    
    def check_dependencies(self):
        """Check available tools"""
        print(f"{Colors.CYAN}🔧 Verificando herramientas disponibles...{Colors.NC}")
        
        # Check for video tools
        video_tools = ['ffmpeg', 'avconv']
        self.video_tool = None
        for tool in video_tools:
            if shutil.which(tool):
                self.video_tool = tool
                print(f"{Colors.GREEN}✅ {tool} disponible para videos{Colors.NC}")
                break
        
        if not self.video_tool:
            print(f"{Colors.YELLOW}⚠️  Sin herramientas de video - se intentará usar alternativas{Colors.NC}")
        
        # Check PIL
        try:
            from PIL import Image
            print(f"{Colors.GREEN}✅ PIL disponible para imágenes{Colors.NC}")
            return True
        except ImportError:
            print(f"{Colors.RED}❌ Error con PIL{Colors.NC}")
            return False
    
    def compress_png_aggressive(self, input_path):
        """Aggressive PNG compression for large files"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        min_ratio = self.get_min_compression_ratio(original_size)
        
        size_mb = original_size / (1024 * 1024)
        print(f"{Colors.BLUE}🖼️  Comprimiendo PNG ({size_mb:.1f}MB): {input_path.name}{Colors.NC}")
        
        try:
            with Image.open(input_path) as img:
                original_format = img.format
                original_mode = img.mode
                
                # For very large files, reduce dimensions if necessary
                width, height = img.size
                max_dimension = 4000 if original_size > self.large_file_threshold else 8000
                
                if width > max_dimension or height > max_dimension:
                    ratio = min(max_dimension / width, max_dimension / height)
                    new_width = int(width * ratio)
                    new_height = int(height * ratio)
                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                    print(f"{Colors.YELLOW}📐 Redimensionado: {width}x{height} → {new_width}x{new_height}{Colors.NC}")
                
                # Convert to optimal format
                if img.mode in ('RGBA', 'LA'):
                    # For transparent images, try to optimize
                    if original_size > self.large_file_threshold:
                        # Convert to RGB with white background for very large files
                        background = Image.new('RGB', img.size, (255, 255, 255))
                        if img.mode == 'RGBA':
                            background.paste(img, mask=img.split()[-1])
                        else:
                            background.paste(img)
                        img = background
                elif img.mode not in ('RGB', 'L'):
                    img = img.convert('RGB')
                
                # Try multiple compression strategies
                best_file = None
                best_size = original_size
                
                strategies = [
                    # Strategy 1: PNG with maximum compression
                    {'format': 'PNG', 'optimize': True, 'compress_level': 9},
                    # Strategy 2: High quality JPEG (for photos)
                    {'format': 'JPEG', 'quality': 85, 'optimize': True, 'progressive': True},
                    # Strategy 3: Lower quality JPEG (for very large files)
                    {'format': 'JPEG', 'quality': 75, 'optimize': True, 'progressive': True},
                ]
                
                # Add more aggressive strategy for very large files
                if original_size > self.large_file_threshold:
                    strategies.append({
                        'format': 'JPEG', 'quality': 65, 'optimize': True, 'progressive': True
                    })
                
                for i, strategy in enumerate(strategies):
                    temp_file = self.temp_dir / f"temp_{i}_{input_path.stem}.{strategy['format'].lower()}"
                    
                    try:
                        img_copy = img.copy()
                        if strategy['format'] == 'JPEG' and img_copy.mode != 'RGB':
                            img_copy = img_copy.convert('RGB')
                        
                        img_copy.save(temp_file, **strategy)
                        
                        if temp_file.exists():
                            temp_size = temp_file.stat().st_size
                            if temp_size < best_size:
                                if best_file and best_file.exists():
                                    best_file.unlink()
                                best_file = temp_file
                                best_size = temp_size
                            else:
                                temp_file.unlink()
                    except Exception as e:
                        print(f"{Colors.YELLOW}⚠️  Estrategia {i+1} falló: {e}{Colors.NC}")
                        if temp_file.exists():
                            temp_file.unlink()
                
                if best_file and best_size < original_size:
                    compression_ratio = (original_size - best_size) / original_size
                    
                    if compression_ratio >= min_ratio:
                        # Create backup
                        shutil.copy2(input_path, self.backup_dir / input_path.name)
                        
                        # Replace original with best compressed version
                        final_path = input_path.parent / f"{input_path.stem}{best_file.suffix}"
                        shutil.move(best_file, final_path)
                        
                        # If format changed, remove original
                        if final_path != input_path:
                            input_path.unlink()
                        
                        print(f"{Colors.GREEN}✅ PNG comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(best_size)} ({compression_ratio:.1%}) [{best_file.suffix.upper()}]{Colors.NC}")
                        
                        with open(self.log_file, 'a') as f:
                            f.write(f"{datetime.now()}: PNG {input_path}: {original_size} → {best_size} bytes ({compression_ratio:.1%})\n")
                        
                        self.total_original_size += original_size
                        self.total_compressed_size += best_size
                        self.compressed_files += 1
                    else:
                        print(f"{Colors.YELLOW}⚠️  PNG no alcanzó {min_ratio:.0%} de compresión: {compression_ratio:.1%}{Colors.NC}")
                        if best_file:
                            best_file.unlink()
                        self.skipped_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  No se pudo comprimir PNG efectivamente{Colors.NC}")
                    self.skipped_files += 1
                    
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo PNG {input_path.name}: {e}{Colors.NC}")
            self.error_files += 1
    
    def compress_jpeg_aggressive(self, input_path):
        """Aggressive JPEG compression"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        min_ratio = self.get_min_compression_ratio(original_size)
        
        size_mb = original_size / (1024 * 1024)
        print(f"{Colors.BLUE}🖼️  Comprimiendo JPEG ({size_mb:.1f}MB): {input_path.name}{Colors.NC}")
        
        try:
            with Image.open(input_path) as img:
                # Resize if too large
                width, height = img.size
                max_dimension = 3000 if original_size > self.large_file_threshold else 6000
                
                if width > max_dimension or height > max_dimension:
                    ratio = min(max_dimension / width, max_dimension / height)
                    new_width = int(width * ratio)
                    new_height = int(height * ratio)
                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                    print(f"{Colors.YELLOW}📐 Redimensionado: {width}x{height} → {new_width}x{new_height}{Colors.NC}")
                
                # Convert to RGB if necessary
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Try different quality levels
                qualities = [85, 75, 65, 55] if original_size > self.large_file_threshold else [85, 75]
                best_file = None
                best_size = original_size
                
                for i, quality in enumerate(qualities):
                    temp_file = self.temp_dir / f"temp_jpeg_{i}_{input_path.name}"
                    
                    try:
                        img.save(temp_file, 'JPEG', quality=quality, optimize=True, progressive=True)
                        
                        if temp_file.exists():
                            temp_size = temp_file.stat().st_size
                            compression_ratio = (original_size - temp_size) / original_size
                            
                            if compression_ratio >= min_ratio:
                                if best_file and best_file.exists():
                                    best_file.unlink()
                                best_file = temp_file
                                best_size = temp_size
                                break  # Found acceptable compression
                            elif temp_size < best_size:
                                if best_file and best_file.exists():
                                    best_file.unlink()
                                best_file = temp_file
                                best_size = temp_size
                            else:
                                temp_file.unlink()
                    except Exception as e:
                        print(f"{Colors.YELLOW}⚠️  Calidad {quality} falló: {e}{Colors.NC}")
                        if temp_file.exists():
                            temp_file.unlink()
                
                if best_file and best_size < original_size:
                    compression_ratio = (original_size - best_size) / original_size
                    
                    if compression_ratio >= min_ratio:
                        # Create backup and replace
                        shutil.copy2(input_path, self.backup_dir / input_path.name)
                        shutil.move(best_file, input_path)
                        
                        print(f"{Colors.GREEN}✅ JPEG comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(best_size)} ({compression_ratio:.1%}){Colors.NC}")
                        
                        with open(self.log_file, 'a') as f:
                            f.write(f"{datetime.now()}: JPEG {input_path}: {original_size} → {best_size} bytes ({compression_ratio:.1%})\n")
                        
                        self.total_original_size += original_size
                        self.total_compressed_size += best_size
                        self.compressed_files += 1
                    else:
                        print(f"{Colors.YELLOW}⚠️  JPEG no alcanzó {min_ratio:.0%} de compresión: {compression_ratio:.1%}{Colors.NC}")
                        if best_file:
                            best_file.unlink()
                        self.skipped_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  No se pudo comprimir JPEG efectivamente{Colors.NC}")
                    self.skipped_files += 1
                    
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo JPEG {input_path.name}: {e}{Colors.NC}")
            self.error_files += 1
    
    def compress_video_advanced(self, input_path):
        """Advanced video compression with multiple strategies"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        min_ratio = self.get_min_compression_ratio(original_size)
        
        size_mb = original_size / (1024 * 1024)
        print(f"{Colors.PURPLE}🎥 Comprimiendo video ({size_mb:.1f}MB): {input_path.name}{Colors.NC}")
        
        if not self.video_tool:
            # Try alternative approach for video compression
            print(f"{Colors.YELLOW}⚠️  Sin herramientas de video, intentando compresión alternativa...{Colors.NC}")
            self.compress_video_alternative(input_path)
            return
        
        try:
            # Get video info
            cmd_info = [
                self.video_tool, '-i', str(input_path),
                '-f', 'null', '-'
            ]
            
            result = subprocess.run(cmd_info, capture_output=True, text=True, stderr=subprocess.STDOUT)
            info_output = result.stdout + result.stderr
            
            # Determine optimal settings based on file size and content
            strategies = []
            
            if original_size > self.large_file_threshold:
                # Very aggressive for large files
                strategies = [
                    {
                        'crf': '28', 'preset': 'medium', 'scale': None,
                        'audio_bitrate': '96k', 'name': 'Agresivo'
                    },
                    {
                        'crf': '32', 'preset': 'fast', 'scale': '1280:-2',
                        'audio_bitrate': '64k', 'name': 'Muy Agresivo + Escala'
                    }
                ]
            else:
                # Moderate compression for smaller files
                strategies = [
                    {
                        'crf': '24', 'preset': 'medium', 'scale': None,
                        'audio_bitrate': '128k', 'name': 'Moderado'
                    },
                    {
                        'crf': '28', 'preset': 'fast', 'scale': None,
                        'audio_bitrate': '96k', 'name': 'Agresivo'
                    }
                ]
            
            best_file = None
            best_size = original_size
            
            for i, strategy in enumerate(strategies):
                temp_file = self.temp_dir / f"temp_video_{i}_{input_path.name}"
                
                print(f"{Colors.CYAN}  Probando estrategia: {strategy['name']}...{Colors.NC}")
                
                cmd = [
                    self.video_tool, '-i', str(input_path),
                    '-c:v', 'libx264',
                    '-crf', strategy['crf'],
                    '-preset', strategy['preset'],
                    '-c:a', 'aac',
                    '-b:a', strategy['audio_bitrate'],
                    '-movflags', '+faststart',
                    '-y'
                ]
                
                if strategy['scale']:
                    cmd.extend(['-vf', f"scale={strategy['scale']}"])
                
                cmd.append(str(temp_file))
                
                try:
                    result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
                    
                    if result.returncode == 0 and temp_file.exists():
                        temp_size = temp_file.stat().st_size
                        compression_ratio = (original_size - temp_size) / original_size
                        
                        print(f"{Colors.CYAN}    Resultado: {self.bytes_to_human(temp_size)} ({compression_ratio:.1%} reducción){Colors.NC}")
                        
                        if compression_ratio >= min_ratio:
                            if best_file and best_file.exists():
                                best_file.unlink()
                            best_file = temp_file
                            best_size = temp_size
                            break  # Found acceptable compression
                        elif temp_size < best_size:
                            if best_file and best_file.exists():
                                best_file.unlink()
                            best_file = temp_file
                            best_size = temp_size
                        else:
                            temp_file.unlink()
                    else:
                        print(f"{Colors.YELLOW}    ⚠️  Estrategia falló{Colors.NC}")
                        if temp_file.exists():
                            temp_file.unlink()
                            
                except subprocess.TimeoutExpired:
                    print(f"{Colors.YELLOW}    ⚠️  Timeout en estrategia{Colors.NC}")
                    if temp_file.exists():
                        temp_file.unlink()
                except Exception as e:
                    print(f"{Colors.YELLOW}    ⚠️  Error en estrategia: {e}{Colors.NC}")
                    if temp_file.exists():
                        temp_file.unlink()
            
            if best_file and best_size < original_size:
                compression_ratio = (original_size - best_size) / original_size
                
                if compression_ratio >= min_ratio:
                    # Create backup and replace
                    shutil.copy2(input_path, self.backup_dir / input_path.name)
                    shutil.move(best_file, input_path)
                    
                    print(f"{Colors.GREEN}✅ Video comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(best_size)} ({compression_ratio:.1%}){Colors.NC}")
                    
                    with open(self.log_file, 'a') as f:
                        f.write(f"{datetime.now()}: VIDEO {input_path}: {original_size} → {best_size} bytes ({compression_ratio:.1%})\n")
                    
                    self.total_original_size += original_size
                    self.total_compressed_size += best_size
                    self.compressed_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  Video no alcanzó {min_ratio:.0%} de compresión: {compression_ratio:.1%}{Colors.NC}")
                    if best_file:
                        best_file.unlink()
                    self.skipped_files += 1
            else:
                print(f"{Colors.YELLOW}⚠️  No se pudo comprimir video efectivamente{Colors.NC}")
                self.skipped_files += 1
                
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo video {input_path.name}: {e}{Colors.NC}")
            self.error_files += 1
    
    def compress_video_alternative(self, input_path):
        """Alternative video compression when ffmpeg is not available"""
        print(f"{Colors.YELLOW}⚠️  Video {input_path.name} omitido - sin herramientas de compresión{Colors.NC}")
        self.skipped_files += 1
    
    def process_directory(self, directory):
        """Process all media files in directory recursively"""
        directory = Path(directory)
        
        print(f"{Colors.CYAN}📂 Procesando directorio: {directory}{Colors.NC}")
        
        # Extensions
        image_extensions = {'.png', '.jpg', '.jpeg'}
        video_extensions = {'.mp4', '.mov', '.avi', '.mkv'}
        
        # Collect all files first and sort by size (largest first)
        all_files = []
        for file_path in directory.rglob('*'):
            if file_path.is_file():
                extension = file_path.suffix.lower()
                
                # Skip backup directory and temporary files
                if (str(self.backup_dir) in str(file_path) or 
                    str(self.temp_dir) in str(file_path) or
                    file_path.name.startswith('temp_')):
                    continue
                
                if extension in image_extensions or extension in video_extensions:
                    file_size = file_path.stat().st_size
                    all_files.append((file_path, file_size, extension))
        
        # Sort by size (largest first) to handle big files first
        all_files.sort(key=lambda x: x[1], reverse=True)
        
        print(f"{Colors.CYAN}📊 Encontrados {len(all_files)} archivos multimedia{Colors.NC}")
        
        for i, (file_path, file_size, extension) in enumerate(all_files, 1):
            self.total_files += 1
            size_mb = file_size / (1024 * 1024)
            
            print(f"\n{Colors.CYAN}[{i}/{len(all_files)}] Procesando ({size_mb:.1f}MB): {file_path.name}{Colors.NC}")
            
            if extension in image_extensions:
                if extension == '.png':
                    self.compress_png_aggressive(file_path)
                elif extension in {'.jpg', '.jpeg'}:
                    self.compress_jpeg_aggressive(file_path)
            
            elif extension in video_extensions:
                self.compress_video_advanced(file_path)
    
    def show_statistics(self):
        """Show final compression statistics"""
        print(f"\n{Colors.GREEN}{'='*50}{Colors.NC}")
        print(f"{Colors.GREEN}📊 RESUMEN FINAL DE COMPRESIÓN{Colors.NC}")
        print(f"{Colors.GREEN}{'='*50}{Colors.NC}")
        print(f"Archivos procesados: {Colors.CYAN}{self.total_files}{Colors.NC}")
        print(f"Archivos comprimidos: {Colors.GREEN}{self.compressed_files}{Colors.NC}")
        print(f"Archivos omitidos: {Colors.YELLOW}{self.skipped_files}{Colors.NC}")
        print(f"Archivos con error: {Colors.RED}{self.error_files}{Colors.NC}")
        print()
        print(f"Tamaño original total: {Colors.RED}{self.bytes_to_human(self.total_original_size)}{Colors.NC}")
        print(f"Tamaño comprimido total: {Colors.GREEN}{self.bytes_to_human(self.total_compressed_size)}{Colors.NC}")
        
        if self.total_original_size > 0:
            total_reduction = (self.total_original_size - self.total_compressed_size) / self.total_original_size
            space_saved = self.total_original_size - self.total_compressed_size
            print(f"Reducción total: {Colors.GREEN}{total_reduction:.1%}{Colors.NC}")
            print(f"Espacio ahorrado: {Colors.GREEN}{self.bytes_to_human(space_saved)}{Colors.NC}")
        
        print()
        print(f"📁 Respaldos en: {Colors.BLUE}{self.backup_dir}{Colors.NC}")
        print(f"📄 Log en: {Colors.BLUE}{self.log_file}{Colors.NC}")
    
    def cleanup(self):
        """Cleanup temporary files"""
        if self.temp_dir.exists():
            shutil.rmtree(self.temp_dir)
    
    def run(self, target_dir="./src/assets"):
        """Main execution function"""
        print(f"{Colors.PURPLE}🚀 GLOVER ADVANCED MEDIA COMPRESSOR{Colors.NC}")
        print(f"{Colors.PURPLE}===================================={Colors.NC}")
        print(f"{Colors.PURPLE}Compresión inteligente por tamaño de archivo{Colors.NC}")
        print()
        
        target_path = Path(target_dir)
        
        if not target_path.exists():
            print(f"{Colors.RED}❌ Directorio no encontrado: {target_dir}{Colors.NC}")
            return False
        
        if not self.check_dependencies():
            return False
        
        print(f"{Colors.CYAN}🎯 Umbrales de compresión:{Colors.NC}")
        print(f"  • Archivos >50MB: {self.min_compression_ratio_large:.0%} mínimo")
        print(f"  • Archivos 10-50MB: {self.min_compression_ratio_medium:.0%} mínimo") 
        print(f"  • Archivos <10MB: {self.min_compression_ratio_small:.0%} mínimo")
        print(f"{Colors.CYAN}📁 Directorio: {target_path}{Colors.NC}")
        print()
        
        try:
            self.process_directory(target_path)
            self.cleanup()
            self.show_statistics()
            
            print()
            print(f"{Colors.GREEN}✅ ¡Compresión avanzada completada!{Colors.NC}")
            return True
            
        except KeyboardInterrupt:
            print(f"\n{Colors.YELLOW}⚠️  Proceso interrumpido{Colors.NC}")
            self.cleanup()
            return False
        except Exception as e:
            print(f"\n{Colors.RED}❌ Error: {e}{Colors.NC}")
            self.cleanup()
            return False

def main():
    compressor = AdvancedMediaCompressor()
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "./src/assets"
    compressor.run(target_dir)

if __name__ == "__main__":
    main()