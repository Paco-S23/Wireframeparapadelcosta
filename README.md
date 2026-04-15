# Padel Costa - Sistema de Reservas de Canchas de Pádel

Aplicación web moderna para el club de pádel "Padel Costa" que funciona como landing page y sistema completo de reservas de canchas.

## 🎯 Características Principales

### Landing Page Atractiva
- **Hero Section** con imagen de fondo de alta calidad
- **Beneficios claros** del sistema de reservas
- **Vista previa** del sistema de reservas
- **Testimonios** de usuarios
- **Call-to-actions** estratégicos

### Sistema de Reservas (3 Pasos)
1. **Selección de Fecha y Hora**
   - Calendario interactivo
   - Grid de horarios disponibles
   - Indicadores visuales de disponibilidad

2. **Selección de Cancha**
   - Vista de todas las canchas disponibles
   - Información de tipo de cancha (cubierta/descubierta)
   - Estado en tiempo real

3. **Confirmación**
   - Resumen completo de la reserva
   - Formulario de datos del usuario
   - Código de confirmación generado

### Dashboard de Usuario
- **Próximas Reservas**
  - Opciones para modificar o cancelar
  - Información detallada de cada reserva
  
- **Historial de Reservas**
  - Registro completo de reservas pasadas
  - Opción de reservar nuevamente

- **Perfil de Usuario**
  - Gestión de información personal
  - Estadísticas de uso

### Información del Club
- Historia y filosofía
- Instalaciones y servicios
- Galería de fotos
- Ubicación con mapa

### Precios Transparentes
- Tarifas por horario (normal, premium, fin de semana)
- Bonos y membresías
- Servicios adicionales
- Política de cancelación

## 🎨 Diseño

### Estilo Visual
- **Colores**: Verde, azul, negro y blanco (temática deportiva de pádel)
- **Tipografía**: Moderna y legible
- **Layout**: Mobile-first y completamente responsive
- **Componentes**: UI components de shadcn/ui para consistencia

### UX/UI
- Navegación intuitiva entre secciones
- Feedback visual inmediato
- Proceso de reserva sin fricciones
- Diseño accesible para usuarios no técnicos

## 🛠️ Tecnologías

- **React** - Framework principal
- **TypeScript** - Tipado estático
- **React Router** - Navegación entre páginas
- **Tailwind CSS v4** - Estilos
- **Lucide React** - Iconos
- **date-fns** - Manejo de fechas
- **shadcn/ui** - Componentes de UI

## 📁 Estructura del Proyecto

```
src/app/
├── components/
│   ├── Root.tsx              # Layout principal
│   ├── Navigation.tsx        # Barra de navegación
│   ├── Footer.tsx           # Pie de página
│   └── ui/                  # Componentes de UI reutilizables
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── Reservas.tsx         # Sistema de reservas
│   ├── Dashboard.tsx        # Panel de usuario
│   ├── ElClub.tsx           # Información del club
│   └── Precios.tsx          # Planes y precios
├── data/
│   └── mockData.ts          # Datos de ejemplo
├── routes.tsx               # Configuración de rutas
└── App.tsx                  # Punto de entrada
```

## 🚀 Características Implementadas

✅ Landing page completa con hero, beneficios y testimonios
✅ Sistema de reservas en 3 pasos
✅ Calendario interactivo para selección de fechas
✅ Grid de horarios con disponibilidad en tiempo real
✅ Selección de canchas con estados visuales
✅ Dashboard de usuario con gestión de reservas
✅ Página de información del club
✅ Página de precios con diferentes planes
✅ Navegación responsive con menú mobile
✅ Footer completo con información de contacto
✅ Diseño mobile-first
✅ Feedback visual en todas las interacciones

## 📱 Responsive Design

La aplicación está optimizada para:
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)

## 🔄 Datos Mock

Actualmente la aplicación usa datos de ejemplo (`mockData.ts`) para demostrar la funcionalidad. En producción, estos datos se conectarían a una base de datos (Supabase recomendado).

## 💡 Próximos Pasos Sugeridos

1. **Integración con Backend**
   - Conectar con Supabase para persistencia de datos
   - Autenticación de usuarios
   - Gestión real de reservas

2. **Funcionalidades Adicionales**
   - Sistema de notificaciones (email/SMS)
   - Pasarela de pagos integrada
   - Sistema de valoraciones y reseñas
   - Gestión de torneos
   - Chat en vivo o soporte

3. **Optimizaciones**
   - SEO optimization
   - Performance improvements
   - PWA capabilities
   - Analytics integration

## 📄 Licencia

Este es un proyecto de demostración para Padel Costa.
