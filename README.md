# INTEGRANTES
-Juan Diego Delgado España

# ☕ Listado Simple de Café

Un sitio web simple para ver y filtrar diferentes tipos de café.

## ¿Qué hace esta aplicación?

Muestra una lista de cafés que puedes:
- Ver todos los cafés disponibles
- Filtrar solo los que están disponibles para comprar
- Ordenar por popularidad o calificación

## Cómo ejecutar el proyecto

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Iniciar el servidor de desarrollo
```bash
npm run dev
```

Luego abre tu navegador en: **http://localhost:5173**

## Nota sobre los datos

Los datos de los cafés se cargan automáticamente desde GitHub, así que necesitas conexión a internet.

## Tecnologías usadas

- React (para la interfaz)
- Vite (para compilar)
- CSS puro (para los estilos)

## Estructura del proyecto

```
src/
├── App.jsx              (Componente principal)
├── components/          (Componentes reutilizables)
│   ├── FilterBar.jsx    (Filtros y ordenamiento)
│   ├── CoffeeList.jsx   (Lista de cafés)
│   ├── CoffeeCard.jsx   (Tarjeta de un café)
│   └── SkeletonCard.jsx (Efecto de carga)
└── [archivos CSS]
```

---

Hecho por: un estudiante de Frontend 🎓
