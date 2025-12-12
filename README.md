# 🌟 Glover - Corporate Website

Una moderna página web corporativa desarrollada con React, TypeScript y Tailwind CSS para Glover, una empresa especializada en maderas, puertas, muebles, estructuras y complementos.

## 📋 Información General

**Tipo de Proyecto:** Single Page Application (SPA)  
**Versión Actual:** 0.1.0  
**Framework Principal:** React 18.3.1  
**Lenguaje:** TypeScript 5.5.3  
**Estado:** En desarrollo activo  

## ✨ Características Principales

### Funcionalidades Core
- 🎨 **Diseño Moderno y Profesional**: Interfaz limpia desarrollada con Tailwind CSS 3.4
- 📱 **Diseño Responsive**: Totalmente adaptado para dispositivos móviles, tablets y desktop con breakpoints optimizados
- ⚡ **Alta Performance**: Optimizado con Vite 6.3 para carga rápida y hot module replacement
- 🔧 **TypeScript Estricto**: Código completamente tipado para mejor mantenimiento y prevención de errores
- 🎯 **SEO Optimizado**: Meta tags, structured data y estructura semántica HTML5
- 🌐 **Multi-sección**: Páginas dedicadas para cada línea de negocio con navegación fluida
- 📊 **Analytics Integrado**: Google Analytics 4 con tracking personalizado de eventos
- 🎬 **Animaciones Fluidas**: Transiciones y animaciones con Framer Motion
- 📦 **Optimización de Medios**: Sistema de compresión y lazy loading de imágenes/videos

### Capacidades Técnicas
- ✅ Lazy loading de componentes y rutas
- ✅ Prefetching de recursos críticos
- ✅ Code splitting automático
- ✅ Gestión eficiente del estado con Context API
- ✅ Custom hooks para lógica reutilizable
- ✅ Sistema de enrutamiento con React Router v6
- ✅ Carruseles y sliders interactivos (Swiper.js)
- ✅ Formularios de contacto validados
- ✅ Integración con mapas

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
src/
├── components/           # Componentes reutilizables (50+ componentes)
│   ├── Header/          # Sistema de navegación principal con menú móvil
│   ├── Footer.tsx       # Pie de página con links y redes sociales
│   ├── home/           # 10+ componentes específicos del home
│   │   ├── Banner/     # Hero banner principal
│   │   ├── BusinessLines/ # Presentación de líneas de negocio
│   │   ├── Certifications/ # Certificaciones
│   │   └── ...         # Más componentes modulares
│   ├── about/          # Componentes de página "Nosotros"
│   │   ├── Hero/       # Banner de página
│   │   ├── Team/       # Sección de equipo
│   │   └── Stats/      # Estadísticas de empresa
│   ├── business/       # Componentes por línea de negocio
│   │   ├── doors/      # Componentes específicos de puertas
│   │   ├── wood/       # Componentes específicos de maderas
│   │   ├── furniture/  # Componentes específicos de muebles
│   │   └── ...         # Más líneas de negocio
│   └── contact/        # Componentes de contacto
│       ├── ContactForm/ # Formulario de contacto
│       ├── ContactInfo/ # Información de contacto
│       └── Map/        # Mapa de ubicación
├── pages/              # Páginas principales (10+ páginas)
│   ├── Home.tsx        # Página de inicio
│   ├── AboutUs.tsx     # Página institucional
│   ├── Contact.tsx     # Página de contacto
│   ├── BusinessLines.tsx # Hub de líneas de negocio
│   ├── SalesRoom.tsx   # Sala de ventas
│   └── business/       # Páginas detalladas por línea
│       ├── Doors.tsx
│       ├── Wood.tsx
│       ├── Furniture.tsx
│       ├── Structures.tsx
│       └── Complements.tsx
├── layouts/            # Layouts compartidos
│   └── MainLayout.tsx  # Layout principal con Header y Footer
├── routes/             # Configuración de enrutamiento
│   └── index.tsx       # Definición de todas las rutas
├── hooks/              # Custom hooks reutilizables
│   ├── useGoogleAnalytics.ts    # Hook para tracking de eventos
│   ├── useImageOptimization.ts  # Hook para optimización de imágenes
│   └── useRoutePreloading.ts    # Hook para prefetch de rutas
├── contexts/           # Context API para estado global
│   └── MediaOptimizationContext.tsx # Contexto de optimización
├── config/             # Configuraciones del proyecto
│   └── criticalResources.ts # Recursos críticos para precarga
├── utils/              # Funciones auxiliares
│   ├── analytics.ts    # Utilidades de Google Analytics
│   ├── ga4-validator.ts # Validación de configuración GA4
│   └── mediaOptimization.ts # Optimización de medios
├── assets/             # Recursos estáticos (imágenes, videos)
│   ├── general/        # Recursos generales
│   ├── home_banner/    # Imágenes de banners
│   ├── doors/          # Media de puertas
│   ├── wood/           # Media de maderas
│   ├── furniture/      # Media de muebles
│   └── ...             # Más recursos organizados
├── styles/             # Estilos globales
│   └── globals.css     # CSS global y variables
└── types/              # Definiciones de tipos TypeScript
    └── index.ts        # Interfaces y tipos compartidos
```

### Patrones de Arquitectura

- **Component-Based Architecture**: Componentes modulares y reutilizables
- **Container/Presentational Pattern**: Separación de lógica y presentación
- **Custom Hooks Pattern**: Lógica reutilizable encapsulada en hooks
- **Context API**: Gestión de estado global sin librerías externas
- **Lazy Loading**: Carga diferida de componentes no críticos
- **Code Splitting**: División automática de código por rutas

## 🚀 Líneas de Negocio

El sitio web presenta las siguientes líneas de negocio de Glover:

1. **🚪 Puertas** - Puertas de alta calidad y diseño
2. **🌳 Maderas** - Maderas premium y sostenibles
3. **🪑 Muebles** - Mobiliario elegante y funcional
4. **🏗️ Estructuras** - Estructuras sólidas y duraderas
5. **✨ Complementos** - Accesorios y elementos decorativos

## 🛠️ Stack Tecnológico

### Frontend Core
- **React 18.3.1** - Biblioteca de interfaz de usuario con Concurrent Features
- **TypeScript 5.5.3** - Tipado estático para JavaScript con strict mode
- **Vite 6.3.5** - Build tool y dev server de última generación
- **React Router DOM 6.22.0** - Sistema de enrutamiento SPA

### Estilos y UI
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **PostCSS 8.4.35** - Procesador de CSS
- **Autoprefixer 10.4.18** - Compatibilidad automática de CSS

### Animaciones y UX
- **Framer Motion 11.0.3** - Biblioteca de animaciones fluidas
- **Swiper 11.0.6** - Carruseles y sliders touch-friendly
- **React Simple Typewriter 5.0.1** - Efectos de escritura animada

### Iconografía
- **Lucide React 0.344.0** - Librería de iconos moderna y ligera

### Herramientas de Desarrollo
- **ESLint 9.9.1** - Linter con configuración moderna (flat config)
- **TypeScript ESLint 8.3.0** - Reglas de linting para TypeScript
- **ESLint Plugin React Hooks** - Validación de reglas de hooks
- **Vite Plugin React** - Plugin oficial de React para Vite

### Analytics y Tracking
- **Google Analytics 4** - Sistema de análisis y tracking de eventos personalizado

### Gestión de Medios
- Scripts de compresión avanzada de imágenes y videos (Python y Bash)
- Sistema de lazy loading y precarga selectiva
- Optimización automática de recursos

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

## 🔧 Scripts y Comandos

### Scripts NPM
- `npm run dev` - Inicia el servidor de desarrollo en puerto 5173 con HMR
- `npm run build` - Crea el build optimizado para producción (TypeScript + Vite)
- `npm run lint` - Ejecuta ESLint para revisar calidad del código
- `npm run preview` - Previsualiza el build de producción localmente

### Scripts de Optimización de Medios
- `./compress-media.sh` - Script bash para compresión básica de imágenes
- `python compress-media-python.py` - Script Python para compresión de imágenes
- `python compress-media-advanced.py` - Script avanzado con compresión inteligente

### Archivos de Configuración
- `vite.config.ts` - Configuración de Vite y plugins
- `tailwind.config.js` - Configuración personalizada de Tailwind
- `tsconfig.json` - Configuración base de TypeScript
- `tsconfig.app.json` - Configuración específica de la aplicación
- `tsconfig.node.json` - Configuración para scripts de Node.js
- `eslint.config.js` - Configuración moderna de ESLint (flat config)
- `postcss.config.js` - Configuración de PostCSS
- `compression.conf` - Configuración de compresión de medios

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

## 🔍 Aspectos Importantes para Mantenimiento

### Dependencias y Actualizaciones
- **Frecuencia de Actualización Recomendada:** Mensual para parches de seguridad, trimestral para versiones menores
- **Dependencias Críticas:** React, TypeScript, Vite (requieren testing exhaustivo antes de actualizar)
- **Monitoreo de Vulnerabilidades:** Revisar `npm audit` regularmente
- **Breaking Changes:** React Router y Framer Motion suelen tener breaking changes en versiones mayores

### Áreas de Mantenimiento Regular

#### 1. Contenido y Medios
- **Imágenes:** Requieren compresión y optimización periódica (scripts incluidos)
- **Videos:** Archivos grandes que pueden requerir re-encoding
- **Catálogos:** PDFs y recursos descargables que se actualizan frecuentemente

#### 2. SEO y Analytics
- **Meta Tags:** Revisar y actualizar según estrategia de marketing
- **Google Analytics:** Validar eventos personalizados y conversiones
- **Performance Metrics:** Monitorear Web Vitals (LCP, FID, CLS)

#### 3. Código y Calidad
- **Linting:** Ejecutar `npm run lint` antes de cada deploy
- **Type Checking:** TypeScript en modo estricto requiere tipos actualizados
- **Dead Code:** Revisar componentes no utilizados periódicamente
- **Bundle Size:** Monitorear tamaño del bundle (actualmente optimizado)

#### 4. Browser Compatibility
- **Testing:** Chrome, Firefox, Safari, Edge (versiones recientes)
- **Mobile Testing:** iOS Safari, Chrome Mobile
- **Polyfills:** Configurados en Vite para navegadores modernos

### Estructura de Datos y Tipos

El proyecto utiliza TypeScript con tipado estricto. Los tipos principales están en `src/types/index.ts` y deben mantenerse actualizados con cualquier cambio en la estructura de datos.

### Sistema de Rutas

Las rutas están centralizadas en `src/routes/index.tsx`. Cualquier nueva página debe:
1. Agregarse a la configuración de rutas
2. Implementar lazy loading si no es crítica
3. Incluir tracking de Google Analytics

### Performance Budget
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** < 500KB (actual: optimizado con code splitting)
- **Image Optimization:** Todas las imágenes deben estar comprimidas

## 🎨 Personalización y Extensibilidad

### Sistema de Diseño
Los tokens de diseño están centralizados en `tailwind.config.js`:

```javascript
// Colores de marca
colors: {
  primary: {...},    // Color principal de la marca
  secondary: {...},  // Color secundario
  accent: {...}      // Color de acentos
}

// Breakpoints responsive
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
}
```

### Agregar Nueva Línea de Negocio

Para agregar una nueva línea de negocio:

1. Crear componentes en `src/components/business/nueva-linea/`
2. Crear página en `src/pages/business/NuevaLinea.tsx`
3. Agregar ruta en `src/routes/index.tsx`
4. Agregar assets en `src/assets/nueva-linea/`
5. Actualizar tracking en hooks de analytics
6. Actualizar navegación en Header

### Componentes Reutilizables

Los componentes están diseñados para ser modulares y reutilizables. Patrones comunes:

- **Hero Sections:** Componente base reutilizable con props
- **Cards:** Sistema de cards flexible para productos/servicios
- **Forms:** Componentes de formulario validados
- **Galleries:** Sistema de galerías con lightbox integrado

## � Deployment y Producción

### Proceso de Build
```bash
npm run build
```

El comando genera:
- Carpeta `dist/` con archivos optimizados
- Assets con hash para cache-busting
- CSS minificado y concatenado
- JavaScript con tree-shaking aplicado
- Sourcemaps para debugging (opcional)

### Requerimientos de Hosting
- **Servidor:** Soporte para SPA (redirección a index.html)
- **Node.js:** No requerido en producción (build estático)
- **HTTPS:** Recomendado para Google Analytics y SEO
- **CDN:** Recomendado para assets estáticos
- **Compresión:** Gzip o Brotli en servidor web

### Variables de Entorno

Crear archivo `.env` con:
```bash
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX  # ID de Google Analytics 4
```

### Checklist Pre-Deploy
- [ ] Ejecutar `npm run lint` sin errores
- [ ] Ejecutar `npm run build` exitosamente
- [ ] Verificar tamaño del bundle (< 500KB)
- [ ] Testear en navegadores principales
- [ ] Validar variables de entorno configuradas
- [ ] Verificar funcionamiento de formularios
- [ ] Comprobar tracking de Google Analytics
- [ ] Revisar imágenes optimizadas

## 📊 Métricas y Monitoreo

### Google Analytics 4
- Configurado con tracking personalizado de eventos
- Documentación completa en `docs/ANALYTICS.md`
- Eventos personalizados por línea de negocio
- Tracking de conversiones en formularios

### Performance Monitoring
- Lighthouse CI recomendado para CI/CD
- Web Vitals monitoring automático con GA4
- Bundle analyzer disponible (`npm install --save-dev rollup-plugin-visualizer`)

## 🔧 Troubleshooting Común

### Problemas de Build
- **Error de TypeScript:** Verificar `tsconfig.json` y tipos instalados
- **Error de Importación:** Revisar rutas relativas y extensiones
- **Bundle muy grande:** Implementar lazy loading adicional

### Problemas de Desarrollo
- **HMR no funciona:** Reiniciar dev server
- **Cambios de CSS no se aplican:** Limpiar cache del navegador
- **Puerto ocupado:** Cambiar puerto en `vite.config.ts`

### Problemas de Producción
- **Rutas 404:** Configurar servidor para SPA routing
- **Assets no cargan:** Verificar configuración de base path
- **Analytics no registra:** Verificar MEASUREMENT_ID y conexión

## 📚 Documentación Adicional

- **[Google Analytics](docs/ANALYTICS.md)** - Guía completa de implementación GA4
- **Vite Config:** Ver comentarios en `vite.config.ts`
- **TypeScript:** Consultar `tsconfig.json` para configuraciones
- **Tailwind:** Referencias en `tailwind.config.js`

## 🔐 Seguridad

### Prácticas Implementadas
- ✅ Sanitización de inputs en formularios
- ✅ Variables de entorno para datos sensibles
- ✅ Dependencias actualizadas regularmente
- ✅ ESLint con reglas de seguridad
- ✅ HTTPS recomendado en producción

### Recomendaciones
- Ejecutar `npm audit` mensualmente
- Revisar dependencias obsoletas con `npm outdated`
- Implementar CSP (Content Security Policy) en servidor
- Configurar headers de seguridad HTTP

## 📄 Licencia y Propiedad

Este proyecto es propiedad exclusiva de **Glover**. Todos los derechos reservados.

### Uso y Modificación
- Código fuente y assets son propiedad de Glover
- Modificaciones requieren autorización
- No redistribuir sin permiso explícito

## 🤝 Workflow de Desarrollo

### Branches
- `main` / `master` - Código en producción
- `develop` - Código en desarrollo
- `feature/*` - Nuevas características
- `hotfix/*` - Correcciones urgentes

### Commits
Seguir convención de commits semánticos:
```bash
feat: agregar nueva sección de productos
fix: corregir error en formulario de contacto
docs: actualizar README
style: ajustar espaciado en header
refactor: optimizar componente de galería
perf: mejorar carga de imágenes
```
