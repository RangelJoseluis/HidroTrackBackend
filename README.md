# HidroTrackBackend

Backend para el proyecto HidroTrack.

## Descripción

Este repositorio contiene el backend para la aplicación HidroTrack. Utiliza Node.js y las dependencias necesarias están especificadas en `package.json`.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RangelJoseluis/HidroTrackBackend.git
   cd HidroTrackBackend/backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Inicia el servidor de desarrollo:
```bash
npm start
```

## ¿Funciona con Vite?

**No**. Este directorio (`backend/`) corresponde a un backend Node.js puro (no frontend). Vite es una herramienta para proyectos frontend (React, Vue, Svelte, etc). Aquí no se detectan archivos de configuración de Vite ni un `vite.config.js`.

Si tienes un frontend (quizás en otro directorio llamado `frontend/`), ahí sí podrías usar Vite.

## Estructura del proyecto

```
backend/
  node_modules/
  package.json
  ...
```

## Autores

- Rangel Joseluis