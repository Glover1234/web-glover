# 🌟 Glover - Corporate Website

Una moderna página web corporativa desarrollada con React, TypeScript y Tailwind CSS para Glover, una empresa especializada en maderas, puertas, muebles, estructuras y complementos.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- 📱 **Responsive**: Totalmente adaptado para dispositivos móviles y desktop
- ⚡ **Performance**: Optimizado con Vite para carga rápida
- 🔧 **TypeScript**: Código tipado para mejor mantenimiento
- 🎯 **SEO Friendly**: Estructura optimizada para motores de búsqueda
- 🌐 **Multi-sección**: Páginas dedicadas para cada línea de negocio

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Header/          # Navegación principal
│   ├── Footer.tsx       # Pie de página
│   ├── home/           # Componentes de la página principal
│   ├── about/          # Componentes de "Nosotros"
│   └── business/       # Componentes por línea de negocio
├── pages/              # Páginas principales
│   ├── Home.tsx        # Página de inicio
│   ├── AboutUs.tsx     # Página "Nosotros"
│   ├── Contact.tsx     # Página de contacto
│   └── business/       # Páginas por línea de negocio
├── layouts/            # Layouts de página
├── routes/             # Configuración de rutas
├── styles/             # Estilos globales
└── types/              # Definiciones de TypeScript
```

## 🚀 Líneas de Negocio

El sitio web presenta las siguientes líneas de negocio de Glover:

1. **🚪 Puertas** - Puertas de alta calidad y diseño
2. **🌳 Maderas** - Maderas premium y sostenibles
3. **🪑 Muebles** - Mobiliario elegante y funcional
4. **🏗️ Estructuras** - Estructuras sólidas y duraderas
5. **✨ Complementos** - Accesorios y elementos decorativos

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de desarrollo rápida
- **Tailwind CSS** - Framework de CSS utility-first
- **React Router** - Enrutamiento del lado del cliente
- **ESLint** - Linting de código

## 📦 Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>

# Navegar al directorio del proyecto
cd Glover-VSC

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para Producción

```bash
# Crear build de producción
npm run build

# Previsualizar el build
npm run preview
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run preview` - Previsualiza el build de producción

## 📱 Páginas Principales

### 🏠 Home
- Banner principal con call-to-action
- Presentación de líneas de negocio
- Productos destacados
- Información corporativa

### 👥 Nosotros
- Historia de la empresa
- Misión y visión
- Ventajas competitivas
- Equipo de trabajo
- Áreas de producción

### 💼 Líneas de Negocio
- Páginas dedicadas para cada línea
- Galerías de productos
- Especificaciones técnicas
- Videos promocionales

### 📞 Contacto
- Formulario de contacto
- Información de contacto
- Mapa de ubicación

### 🏢 Sala de Ventas
- Información sobre showroom
- Horarios de atención
- Servicios disponibles

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js` y pueden ser personalizados:

```javascript
colors: {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color',
  // ...más colores
}
```

### Componentes
Todos los componentes están modularizados y pueden ser fácilmente modificados en la carpeta `src/components/`.

## 📄 Licencia

Este proyecto es propiedad de Glover. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ para Glover
