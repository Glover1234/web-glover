#!/bin/bash

# =====================================================
# GLOVER MEDIA COMPRESSOR - Algoritmo Avanzado
# Compresión sin pérdida de calidad perceptible
# Objetivo: Reducir tamaños en mínimo 85%
# =====================================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
BACKUP_DIR="./backup_original_media"
LOG_FILE="./compression_log.txt"
TEMP_DIR="./temp_compression"
MIN_COMPRESSION_RATIO=0.85  # 85% minimum compression

# Statistics
TOTAL_FILES=0
COMPRESSED_FILES=0
TOTAL_ORIGINAL_SIZE=0
TOTAL_COMPRESSED_SIZE=0
SKIPPED_FILES=0

# Create necessary directories
create_directories() {
    echo -e "${BLUE}📁 Creando directorios necesarios...${NC}"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$TEMP_DIR"
    echo "$(date): Starting compression process" > "$LOG_FILE"
}

# Get file size in bytes
get_file_size() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f%z "$1" 2>/dev/null || echo 0
    else
        stat -c%s "$1" 2>/dev/null || echo 0
    fi
}

# Convert bytes to human readable format
bytes_to_human() {
    local bytes=$1
    if (( bytes < 1024 )); then
        echo "${bytes}B"
    elif (( bytes < 1048576 )); then
        echo "$(( bytes / 1024 ))KB"
    elif (( bytes < 1073741824 )); then
        echo "$(( bytes / 1048576 ))MB"
    else
        echo "$(( bytes / 1073741824 ))GB"
    fi
}

# Check if tools are installed
check_dependencies() {
    echo -e "${BLUE}🔧 Verificando dependencias...${NC}"
    
    local missing_tools=()
    
    # Check for image optimization tools
    if ! command -v convert &> /dev/null; then
        missing_tools+=("imagemagick")
    fi
    
    if ! command -v cwebp &> /dev/null; then
        missing_tools+=("webp")
    fi
    
    # Check for video compression tools
    if ! command -v ffmpeg &> /dev/null; then
        missing_tools+=("ffmpeg")
    fi
    
    # Check for advanced compression tools
    if ! command -v oxipng &> /dev/null && ! command -v pngcrush &> /dev/null; then
        echo -e "${YELLOW}⚠️  Herramientas PNG avanzadas no encontradas (oxipng/pngcrush)${NC}"
    fi
    
    if ! command -v jpegoptim &> /dev/null && ! command -v mozjpeg &> /dev/null; then
        echo -e "${YELLOW}⚠️  Herramientas JPEG avanzadas no encontradas (jpegoptim/mozjpeg)${NC}"
    fi
    
    if [ ${#missing_tools[@]} -gt 0 ]; then
        echo -e "${RED}❌ Herramientas faltantes: ${missing_tools[*]}${NC}"
        echo -e "${YELLOW}Instala con:${NC}"
        if [[ "$OSTYPE" == "darwin"* ]]; then
            echo "brew install imagemagick webp ffmpeg oxipng jpegoptim"
        else
            echo "sudo apt-get install imagemagick webp ffmpeg oxipng jpegoptim"
        fi
        exit 1
    fi
    
    echo -e "${GREEN}✅ Todas las dependencias están instaladas${NC}"
}

# Advanced PNG compression
compress_png() {
    local input_file="$1"
    local temp_file="$TEMP_DIR/$(basename "$input_file")"
    local original_size=$(get_file_size "$input_file")
    
    echo -e "${BLUE}🖼️  Comprimiendo PNG: $(basename "$input_file")${NC}"
    
    # Step 1: Optimize with multiple tools and choose best result
    local best_file="$input_file"
    local best_size=$original_size
    
    # Try oxipng (best PNG compressor)
    if command -v oxipng &> /dev/null; then
        cp "$input_file" "${temp_file}_oxipng.png"
        oxipng -o 6 --strip all --alpha "${temp_file}_oxipng.png" 2>/dev/null || true
        local oxipng_size=$(get_file_size "${temp_file}_oxipng.png")
        if (( oxipng_size < best_size )); then
            best_file="${temp_file}_oxipng.png"
            best_size=$oxipng_size
        fi
    fi
    
    # Try pngcrush
    if command -v pngcrush &> /dev/null; then
        pngcrush -reduce -brute -rem alla -rem text "$input_file" "${temp_file}_crush.png" 2>/dev/null || true
        if [ -f "${temp_file}_crush.png" ]; then
            local crush_size=$(get_file_size "${temp_file}_crush.png")
            if (( crush_size < best_size )); then
                best_file="${temp_file}_crush.png"
                best_size=$crush_size
            fi
        fi
    fi
    
    # Try ImageMagick with advanced settings
    convert "$input_file" -strip -interlace Plane -define png:compression-filter=5 -define png:compression-level=9 -quality 95 "${temp_file}_magick.png" 2>/dev/null || true
    if [ -f "${temp_file}_magick.png" ]; then
        local magick_size=$(get_file_size "${temp_file}_magick.png")
        if (( magick_size < best_size )); then
            best_file="${temp_file}_magick.png"
            best_size=$magick_size
        fi
    fi
    
    # Check compression ratio
    local compression_ratio=$(echo "scale=2; ($original_size - $best_size) / $original_size" | bc -l)
    
    if (( $(echo "$compression_ratio >= $MIN_COMPRESSION_RATIO" | bc -l) )); then
        # Create backup
        cp "$input_file" "$BACKUP_DIR/"
        # Replace original
        cp "$best_file" "$input_file"
        
        echo -e "${GREEN}✅ PNG comprimido: $(bytes_to_human $original_size) → $(bytes_to_human $best_size) (${compression_ratio%.*}% reducción)${NC}"
        echo "$(date): PNG $input_file: $original_size → $best_size bytes (${compression_ratio%.*}% reduction)" >> "$LOG_FILE"
        
        TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + original_size))
        TOTAL_COMPRESSED_SIZE=$((TOTAL_COMPRESSED_SIZE + best_size))
        COMPRESSED_FILES=$((COMPRESSED_FILES + 1))
    else
        echo -e "${YELLOW}⚠️  PNG no alcanzó el 85% de compresión: ${compression_ratio%.*}%${NC}"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
    fi
    
    # Cleanup temp files
    rm -f "${temp_file}"_*.png
}

# Advanced JPEG compression
compress_jpeg() {
    local input_file="$1"
    local temp_file="$TEMP_DIR/$(basename "$input_file")"
    local original_size=$(get_file_size "$input_file")
    
    echo -e "${BLUE}🖼️  Comprimiendo JPEG: $(basename "$input_file")${NC}"
    
    local best_file="$input_file"
    local best_size=$original_size
    
    # Try mozjpeg (best JPEG compressor)
    if command -v cjpeg &> /dev/null; then
        djpeg "$input_file" | cjpeg -quality 85 -optimize -progressive -outfile "${temp_file}_mozjpeg.jpg" 2>/dev/null || true
        if [ -f "${temp_file}_mozjpeg.jpg" ]; then
            local mozjpeg_size=$(get_file_size "${temp_file}_mozjpeg.jpg")
            if (( mozjpeg_size < best_size )); then
                best_file="${temp_file}_mozjpeg.jpg"
                best_size=$mozjpeg_size
            fi
        fi
    fi
    
    # Try jpegoptim
    if command -v jpegoptim &> /dev/null; then
        cp "$input_file" "${temp_file}_optim.jpg"
        jpegoptim --max=85 --strip-all --all-progressive "${temp_file}_optim.jpg" 2>/dev/null || true
        local optim_size=$(get_file_size "${temp_file}_optim.jpg")
        if (( optim_size < best_size )); then
            best_file="${temp_file}_optim.jpg"
            best_size=$optim_size
        fi
    fi
    
    # Try ImageMagick
    convert "$input_file" -strip -interlace Plane -quality 85 "${temp_file}_magick.jpg" 2>/dev/null || true
    if [ -f "${temp_file}_magick.jpg" ]; then
        local magick_size=$(get_file_size "${temp_file}_magick.jpg")
        if (( magick_size < best_size )); then
            best_file="${temp_file}_magick.jpg"
            best_size=$magick_size
        fi
    fi
    
    local compression_ratio=$(echo "scale=2; ($original_size - $best_size) / $original_size" | bc -l)
    
    if (( $(echo "$compression_ratio >= $MIN_COMPRESSION_RATIO" | bc -l) )); then
        cp "$input_file" "$BACKUP_DIR/"
        cp "$best_file" "$input_file"
        
        echo -e "${GREEN}✅ JPEG comprimido: $(bytes_to_human $original_size) → $(bytes_to_human $best_size) (${compression_ratio%.*}% reducción)${NC}"
        echo "$(date): JPEG $input_file: $original_size → $best_size bytes (${compression_ratio%.*}% reduction)" >> "$LOG_FILE"
        
        TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + original_size))
        TOTAL_COMPRESSED_SIZE=$((TOTAL_COMPRESSED_SIZE + best_size))
        COMPRESSED_FILES=$((COMPRESSED_FILES + 1))
    else
        echo -e "${YELLOW}⚠️  JPEG no alcanzó el 85% de compresión: ${compression_ratio%.*}%${NC}"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
    fi
    
    rm -f "${temp_file}"_*.jpg
}

# Advanced video compression
compress_video() {
    local input_file="$1"
    local temp_file="$TEMP_DIR/$(basename "$input_file")"
    local original_size=$(get_file_size "$input_file")
    
    echo -e "${BLUE}🎥 Comprimiendo video: $(basename "$input_file")${NC}"
    
    # Get video info
    local duration=$(ffprobe -v quiet -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input_file" 2>/dev/null | cut -d. -f1)
    local width=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$input_file" 2>/dev/null)
    local height=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$input_file" 2>/dev/null)
    
    # Determine optimal bitrate based on resolution and duration
    local target_bitrate
    if (( width * height >= 1920 * 1080 )); then
        target_bitrate="2M"  # 1080p+
    elif (( width * height >= 1280 * 720 )); then
        target_bitrate="1.5M"  # 720p
    else
        target_bitrate="1M"   # Lower resolution
    fi
    
    # Advanced H.264 compression with multiple passes
    echo -e "${BLUE}  Pass 1/2: Analyzing video...${NC}"
    ffmpeg -y -i "$input_file" \
        -c:v libx264 \
        -preset slow \
        -profile:v high \
        -level 4.1 \
        -b:v "$target_bitrate" \
        -maxrate "$target_bitrate" \
        -bufsize "$(echo "$target_bitrate" | sed 's/M/*2M/g' | bc)" \
        -pass 1 \
        -an \
        -f null /dev/null 2>/dev/null || true
    
    echo -e "${BLUE}  Pass 2/2: Comprimiendo video...${NC}"
    ffmpeg -y -i "$input_file" \
        -c:v libx264 \
        -preset slow \
        -profile:v high \
        -level 4.1 \
        -b:v "$target_bitrate" \
        -maxrate "$target_bitrate" \
        -bufsize "$(echo "$target_bitrate" | sed 's/M/*2M/g' | bc)" \
        -pass 2 \
        -c:a aac \
        -b:a 128k \
        -ac 2 \
        -movflags +faststart \
        "$temp_file" 2>/dev/null || true
    
    # Clean up pass files
    rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree
    
    if [ -f "$temp_file" ]; then
        local compressed_size=$(get_file_size "$temp_file")
        local compression_ratio=$(echo "scale=2; ($original_size - $compressed_size) / $original_size" | bc -l)
        
        if (( $(echo "$compression_ratio >= $MIN_COMPRESSION_RATIO" | bc -l) )); then
            cp "$input_file" "$BACKUP_DIR/"
            mv "$temp_file" "$input_file"
            
            echo -e "${GREEN}✅ Video comprimido: $(bytes_to_human $original_size) → $(bytes_to_human $compressed_size) (${compression_ratio%.*}% reducción)${NC}"
            echo "$(date): VIDEO $input_file: $original_size → $compressed_size bytes (${compression_ratio%.*}% reduction)" >> "$LOG_FILE"
            
            TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + original_size))
            TOTAL_COMPRESSED_SIZE=$((TOTAL_COMPRESSED_SIZE + compressed_size))
            COMPRESSED_FILES=$((COMPRESSED_FILES + 1))
        else
            echo -e "${YELLOW}⚠️  Video no alcanzó el 85% de compresión: ${compression_ratio%.*}%${NC}"
            rm -f "$temp_file"
            SKIPPED_FILES=$((SKIPPED_FILES + 1))
        fi
    else
        echo -e "${RED}❌ Error comprimiendo video${NC}"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
    fi
}

# Process files recursively
process_directory() {
    local dir="$1"
    
    echo -e "${BLUE}📂 Procesando directorio: $dir${NC}"
    
    # Find and process images
    find "$dir" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
        TOTAL_FILES=$((TOTAL_FILES + 1))
        
        case "${file,,}" in
            *.png)
                compress_png "$file"
                ;;
            *.jpg|*.jpeg)
                compress_jpeg "$file"
                ;;
        esac
    done
    
    # Find and process videos
    find "$dir" -type f \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.avi" -o -iname "*.mkv" \) | while read -r file; do
        TOTAL_FILES=$((TOTAL_FILES + 1))
        compress_video "$file"
    done
}

# Show final statistics
show_statistics() {
    echo ""
    echo -e "${GREEN}📊 RESUMEN DE COMPRESIÓN${NC}"
    echo "=================================="
    echo -e "Archivos procesados: ${BLUE}$TOTAL_FILES${NC}"
    echo -e "Archivos comprimidos: ${GREEN}$COMPRESSED_FILES${NC}"
    echo -e "Archivos omitidos: ${YELLOW}$SKIPPED_FILES${NC}"
    echo ""
    echo -e "Tamaño original total: ${RED}$(bytes_to_human $TOTAL_ORIGINAL_SIZE)${NC}"
    echo -e "Tamaño comprimido total: ${GREEN}$(bytes_to_human $TOTAL_COMPRESSED_SIZE)${NC}"
    
    if (( TOTAL_ORIGINAL_SIZE > 0 )); then
        local total_reduction=$(echo "scale=1; ($TOTAL_ORIGINAL_SIZE - $TOTAL_COMPRESSED_SIZE) / $TOTAL_ORIGINAL_SIZE * 100" | bc -l)
        local space_saved=$((TOTAL_ORIGINAL_SIZE - TOTAL_COMPRESSED_SIZE))
        echo -e "Reducción total: ${GREEN}${total_reduction}%${NC}"
        echo -e "Espacio ahorrado: ${GREEN}$(bytes_to_human $space_saved)${NC}"
    fi
    
    echo ""
    echo -e "Los archivos originales están respaldados en: ${BLUE}$BACKUP_DIR${NC}"
    echo -e "Log detallado disponible en: ${BLUE}$LOG_FILE${NC}"
}

# Main execution
main() {
    echo -e "${GREEN}🚀 GLOVER MEDIA COMPRESSOR${NC}"
    echo -e "${GREEN}============================${NC}"
    echo ""
    
    # Check for target directory
    local target_dir="${1:-./src/assets}"
    
    if [ ! -d "$target_dir" ]; then
        echo -e "${RED}❌ Directorio no encontrado: $target_dir${NC}"
        echo "Uso: $0 [directorio]"
        echo "Ejemplo: $0 ./src/assets"
        exit 1
    fi
    
    check_dependencies
    create_directories
    
    echo -e "${BLUE}🎯 Objetivo: Reducir archivos multimedia en mínimo 85%${NC}"
    echo -e "${BLUE}📁 Directorio objetivo: $target_dir${NC}"
    echo ""
    
    process_directory "$target_dir"
    
    # Cleanup
    rm -rf "$TEMP_DIR"
    
    show_statistics
    
    echo ""
    echo -e "${GREEN}✅ Compresión completada exitosamente!${NC}"
}

# Execute main function
main "$@"