#!/usr/bin/env python3
"""
GLOVER MEDIA COMPRESSOR - Versión Python
Compresión avanzada sin dependencias externas
Objetivo: Reducir tamaños en mínimo 85%
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

# Try to import PIL, install if not available
try:
    from PIL import Image
except ImportError:
    print("Instalando PIL...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

class Colors:
    RED = '\033[0;31m'
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    BLUE = '\033[0;34m'
    NC = '\033[0m'  # No Color

class GloverMediaCompressor:
    def __init__(self):
        self.backup_dir = Path("./backup_original_media")
        self.log_file = Path("./compression_log.txt")
        self.temp_dir = Path("./temp_compression")
        self.min_compression_ratio = 0.85
        
        # Statistics
        self.total_files = 0
        self.compressed_files = 0
        self.total_original_size = 0
        self.total_compressed_size = 0
        self.skipped_files = 0
        
        self.create_directories()
    
    def create_directories(self):
        """Create necessary directories"""
        print(f"{Colors.BLUE}📁 Creando directorios necesarios...{Colors.NC}")
        self.backup_dir.mkdir(exist_ok=True)
        self.temp_dir.mkdir(exist_ok=True)
        
        with open(self.log_file, 'w') as f:
            f.write(f"{datetime.now()}: Starting compression process\n")
    
    def bytes_to_human(self, bytes_size):
        """Convert bytes to human readable format"""
        if bytes_size < 1024:
            return f"{bytes_size}B"
        elif bytes_size < 1048576:
            return f"{bytes_size // 1024}KB"
        elif bytes_size < 1073741824:
            return f"{bytes_size // 1048576}MB"
        else:
            return f"{bytes_size // 1073741824}GB"
    
    def check_dependencies(self):
        """Check if Python PIL is available"""
        print(f"{Colors.BLUE}🔧 Verificando dependencias Python...{Colors.NC}")
        
        try:
            from PIL import Image
            print(f"{Colors.GREEN}✅ PIL (Pillow) disponible{Colors.NC}")
            return True
        except ImportError:
            print(f"{Colors.YELLOW}⚠️  PIL no encontrado, instalando...{Colors.NC}")
            try:
                subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
                print(f"{Colors.GREEN}✅ PIL instalado exitosamente{Colors.NC}")
                return True
            except subprocess.CalledProcessError:
                print(f"{Colors.RED}❌ Error instalando PIL{Colors.NC}")
                return False
    
    def compress_png_advanced(self, input_path):
        """Advanced PNG compression using PIL with multiple optimization techniques"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        
        print(f"{Colors.BLUE}🖼️  Comprimiendo PNG: {input_path.name}{Colors.NC}")
        
        try:
            # Load image
            with Image.open(input_path) as img:
                # Convert to RGB if necessary (removes alpha channel for some cases)
                if img.mode in ('RGBA', 'LA'):
                    # Create a white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'RGBA':
                        background.paste(img, mask=img.split()[-1])  # Use alpha as mask
                    else:
                        background.paste(img)
                    img = background
                elif img.mode not in ('RGB', 'L'):
                    img = img.convert('RGB')
                
                # Optimize image
                temp_file = self.temp_dir / f"temp_{input_path.name}"
                
                # Save with maximum optimization
                img.save(temp_file, 'PNG', optimize=True, compress_level=9)
                
                compressed_size = temp_file.stat().st_size
                compression_ratio = (original_size - compressed_size) / original_size
                
                if compression_ratio >= self.min_compression_ratio:
                    # Create backup
                    shutil.copy2(input_path, self.backup_dir / input_path.name)
                    # Replace original
                    shutil.move(temp_file, input_path)
                    
                    print(f"{Colors.GREEN}✅ PNG comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(compressed_size)} ({compression_ratio:.1%} reducción){Colors.NC}")
                    
                    with open(self.log_file, 'a') as f:
                        f.write(f"{datetime.now()}: PNG {input_path}: {original_size} → {compressed_size} bytes ({compression_ratio:.1%} reduction)\n")
                    
                    self.total_original_size += original_size
                    self.total_compressed_size += compressed_size
                    self.compressed_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  PNG no alcanzó el 85% de compresión: {compression_ratio:.1%}{Colors.NC}")
                    temp_file.unlink()  # Remove temp file
                    self.skipped_files += 1
                    
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo PNG {input_path.name}: {e}{Colors.NC}")
            self.skipped_files += 1
    
    def compress_jpeg_advanced(self, input_path):
        """Advanced JPEG compression using PIL"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        
        print(f"{Colors.BLUE}🖼️  Comprimiendo JPEG: {input_path.name}{Colors.NC}")
        
        try:
            with Image.open(input_path) as img:
                # Convert to RGB if necessary
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                temp_file = self.temp_dir / f"temp_{input_path.name}"
                
                # Save with progressive JPEG and high optimization
                img.save(temp_file, 'JPEG', quality=85, optimize=True, progressive=True)
                
                compressed_size = temp_file.stat().st_size
                compression_ratio = (original_size - compressed_size) / original_size
                
                if compression_ratio >= self.min_compression_ratio:
                    # Create backup
                    shutil.copy2(input_path, self.backup_dir / input_path.name)
                    # Replace original
                    shutil.move(temp_file, input_path)
                    
                    print(f"{Colors.GREEN}✅ JPEG comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(compressed_size)} ({compression_ratio:.1%} reducción){Colors.NC}")
                    
                    with open(self.log_file, 'a') as f:
                        f.write(f"{datetime.now()}: JPEG {input_path}: {original_size} → {compressed_size} bytes ({compression_ratio:.1%} reduction)\n")
                    
                    self.total_original_size += original_size
                    self.total_compressed_size += compressed_size
                    self.compressed_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  JPEG no alcanzó el 85% de compresión: {compression_ratio:.1%}{Colors.NC}")
                    temp_file.unlink()
                    self.skipped_files += 1
                    
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo JPEG {input_path.name}: {e}{Colors.NC}")
            self.skipped_files += 1
    
    def compress_video_native(self, input_path):
        """Video compression using native macOS tools"""
        input_path = Path(input_path)
        original_size = input_path.stat().st_size
        
        print(f"{Colors.BLUE}🎥 Comprimiendo video: {input_path.name}{Colors.NC}")
        
        # Check if we have any video tools available
        video_tools = ['ffmpeg', 'avconv']
        available_tool = None
        
        for tool in video_tools:
            if shutil.which(tool):
                available_tool = tool
                break
        
        if not available_tool:
            print(f"{Colors.YELLOW}⚠️  No hay herramientas de video disponibles, omitiendo {input_path.name}{Colors.NC}")
            self.skipped_files += 1
            return
        
        try:
            temp_file = self.temp_dir / f"temp_{input_path.name}"
            
            # Basic video compression command
            cmd = [
                available_tool, '-i', str(input_path),
                '-c:v', 'libx264', '-crf', '23',
                '-c:a', 'aac', '-b:a', '128k',
                '-movflags', '+faststart',
                '-y', str(temp_file)
            ]
            
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0 and temp_file.exists():
                compressed_size = temp_file.stat().st_size
                compression_ratio = (original_size - compressed_size) / original_size
                
                if compression_ratio >= self.min_compression_ratio:
                    # Create backup
                    shutil.copy2(input_path, self.backup_dir / input_path.name)
                    # Replace original
                    shutil.move(temp_file, input_path)
                    
                    print(f"{Colors.GREEN}✅ Video comprimido: {self.bytes_to_human(original_size)} → {self.bytes_to_human(compressed_size)} ({compression_ratio:.1%} reducción){Colors.NC}")
                    
                    with open(self.log_file, 'a') as f:
                        f.write(f"{datetime.now()}: VIDEO {input_path}: {original_size} → {compressed_size} bytes ({compression_ratio:.1%} reduction)\n")
                    
                    self.total_original_size += original_size
                    self.total_compressed_size += compressed_size
                    self.compressed_files += 1
                else:
                    print(f"{Colors.YELLOW}⚠️  Video no alcanzó el 85% de compresión: {compression_ratio:.1%}{Colors.NC}")
                    temp_file.unlink()
                    self.skipped_files += 1
            else:
                print(f"{Colors.RED}❌ Error comprimiendo video {input_path.name}{Colors.NC}")
                self.skipped_files += 1
                
        except Exception as e:
            print(f"{Colors.RED}❌ Error comprimiendo video {input_path.name}: {e}{Colors.NC}")
            self.skipped_files += 1
    
    def process_directory(self, directory):
        """Process all media files in directory recursively"""
        directory = Path(directory)
        
        print(f"{Colors.BLUE}📂 Procesando directorio: {directory}{Colors.NC}")
        
        # Image extensions
        image_extensions = {'.png', '.jpg', '.jpeg'}
        video_extensions = {'.mp4', '.mov', '.avi', '.mkv'}
        
        # Process all files recursively
        for file_path in directory.rglob('*'):
            if file_path.is_file():
                extension = file_path.suffix.lower()
                
                # Skip backup directory
                if str(self.backup_dir) in str(file_path):
                    continue
                
                self.total_files += 1
                
                if extension in image_extensions:
                    if extension == '.png':
                        self.compress_png_advanced(file_path)
                    elif extension in {'.jpg', '.jpeg'}:
                        self.compress_jpeg_advanced(file_path)
                
                elif extension in video_extensions:
                    self.compress_video_native(file_path)
    
    def show_statistics(self):
        """Show final compression statistics"""
        print()
        print(f"{Colors.GREEN}📊 RESUMEN DE COMPRESIÓN{Colors.NC}")
        print("==================================")
        print(f"Archivos procesados: {Colors.BLUE}{self.total_files}{Colors.NC}")
        print(f"Archivos comprimidos: {Colors.GREEN}{self.compressed_files}{Colors.NC}")
        print(f"Archivos omitidos: {Colors.YELLOW}{self.skipped_files}{Colors.NC}")
        print()
        print(f"Tamaño original total: {Colors.RED}{self.bytes_to_human(self.total_original_size)}{Colors.NC}")
        print(f"Tamaño comprimido total: {Colors.GREEN}{self.bytes_to_human(self.total_compressed_size)}{Colors.NC}")
        
        if self.total_original_size > 0:
            total_reduction = (self.total_original_size - self.total_compressed_size) / self.total_original_size
            space_saved = self.total_original_size - self.total_compressed_size
            print(f"Reducción total: {Colors.GREEN}{total_reduction:.1%}{Colors.NC}")
            print(f"Espacio ahorrado: {Colors.GREEN}{self.bytes_to_human(space_saved)}{Colors.NC}")
        
        print()
        print(f"Los archivos originales están respaldados en: {Colors.BLUE}{self.backup_dir}{Colors.NC}")
        print(f"Log detallado disponible en: {Colors.BLUE}{self.log_file}{Colors.NC}")
    
    def cleanup(self):
        """Cleanup temporary files"""
        if self.temp_dir.exists():
            shutil.rmtree(self.temp_dir)
    
    def run(self, target_dir="./src/assets"):
        """Main execution function"""
        print(f"{Colors.GREEN}🚀 GLOVER MEDIA COMPRESSOR - Python Version{Colors.NC}")
        print(f"{Colors.GREEN}==========================================={Colors.NC}")
        print()
        
        target_path = Path(target_dir)
        
        if not target_path.exists():
            print(f"{Colors.RED}❌ Directorio no encontrado: {target_dir}{Colors.NC}")
            print(f"Uso: python3 compress-media-python.py [directorio]")
            print(f"Ejemplo: python3 compress-media-python.py ./src/assets")
            return False
        
        if not self.check_dependencies():
            return False
        
        print(f"{Colors.BLUE}🎯 Objetivo: Reducir archivos multimedia en mínimo 85%{Colors.NC}")
        print(f"{Colors.BLUE}📁 Directorio objetivo: {target_path}{Colors.NC}")
        print()
        
        self.process_directory(target_path)
        self.cleanup()
        self.show_statistics()
        
        print()
        print(f"{Colors.GREEN}✅ Compresión completada exitosamente!{Colors.NC}")
        return True

def main():
    compressor = GloverMediaCompressor()
    
    # Get target directory from command line argument or use default
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "./src/assets"
    
    try:
        compressor.run(target_dir)
    except KeyboardInterrupt:
        print(f"\n{Colors.YELLOW}⚠️  Proceso interrumpido por el usuario{Colors.NC}")
        compressor.cleanup()
    except Exception as e:
        print(f"\n{Colors.RED}❌ Error inesperado: {e}{Colors.NC}")
        compressor.cleanup()

if __name__ == "__main__":
    main()