# ClotheMe

ClotheMe es una aplicación móvil creada con React Native, Expo y TypeScript para organizar prendas y empezar a construir un armario digital de forma sencilla.

## Descripción

El proyecto permite seleccionar una imagen desde la galería, elegir la categoría de la prenda, guardarla en una lista local persistente y eliminar prendas guardadas. Es una base pequeña y clara para seguir creciendo con funcionalidades como autenticación o generación de outfits.

## Características principales

- Selección de imágenes desde la galería del dispositivo.
- Clasificación básica por categoría de prenda.
- Vista previa de la imagen seleccionada.
- Lista local de prendas guardadas.
- Persistencia local con Async Storage.
- Filtros por categoría para revisar el armario.
- Edición básica de la categoría de una prenda.
- Interfaz pulida para presentación de portafolio.
- Contador de prendas.
- Estado vacío cuando todavía no hay prendas.
- Confirmación antes de eliminar prendas guardadas.
- Estructura simple separada por pantallas, componentes, hooks, constantes, estilos y tipos.
- Código TypeScript con configuración estricta.

## Tecnologías utilizadas

- React Native
- Expo SDK 57
- TypeScript
- Expo Image Picker
- Async Storage
- Expo FileSystem

## Capturas de pantalla

Las capturas reales del proyecto se pueden agregar en:

```text
docs/screenshots/
```

Cuando existan capturas finales, se recomienda incluir al menos una vista del armario vacío, una prenda guardada y el filtro por categoría.

## Estructura del proyecto

```text
ClotheMe/
  assets/
  docs/
    screenshots/
    testing.md
  src/
    components/
    constants/
    hooks/
    screens/
    styles/
    types/
    utils/
  App.tsx
  index.ts
  package.json
  tsconfig.json
```

## Instalación

```bash
git clone https://github.com/Eduvarj/ClotheMe.git
cd ClotheMe
npm install
```

## Ejecución en desarrollo

```bash
npx expo start
```

También puedes usar los scripts disponibles:

```bash
npm run start
npm run android
npm run ios
npm run web
npm run type-check
```

## Scripts disponibles

- `npm run start`: inicia Expo.
- `npm run android`: inicia Expo para Android.
- `npm run ios`: inicia Expo para iOS.
- `npm run web`: inicia Expo para web.
- `npm run type-check`: valida TypeScript sin generar archivos.

## Estado del proyecto

Primera versión estable de portafolio. La app permite cargar, clasificar, filtrar, editar, eliminar y conservar prendas de forma local.

## QA manual

La checklist de pruebas está disponible en:

```text
docs/testing.md
```

## Próximas mejoras

- Migrar la persistencia local a backend cuando exista autenticación.
- Permitir editar la imagen de una prenda.
- Incorporar capturas reales en `docs/screenshots/`.

## Autor

Jesus Eduardo Vezquez Rodriguez
-- JEVR
