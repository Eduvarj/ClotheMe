# ClotheMe

ClotheMe es una aplicación móvil creada con React Native, Expo y TypeScript para organizar prendas y empezar a construir un armario digital de forma sencilla.

## Descripción

El proyecto permite seleccionar una imagen desde la galería, elegir la categoría de la prenda, guardarla en una lista local y eliminar prendas guardadas. Es una base pequeña y clara para seguir creciendo con funcionalidades como persistencia de datos, autenticación o generación de outfits.

## Características principales

- Selección de imágenes desde la galería del dispositivo.
- Clasificación básica por categoría de prenda.
- Vista previa de la imagen seleccionada.
- Lista local de prendas guardadas.
- Contador de prendas.
- Estado vacío cuando todavía no hay prendas.
- Eliminación de prendas guardadas.
- Estructura simple separada por pantallas, componentes, hooks, constantes, estilos y tipos.
- Código TypeScript con configuración estricta.

## Tecnologías utilizadas

- React Native
- Expo SDK 57
- TypeScript
- Expo Image Picker

## Capturas de pantalla

Las capturas del proyecto se pueden agregar en:

```text
docs/screenshots/
```

## Estructura del proyecto

```text
ClotheMe/
  assets/
  docs/
    screenshots/
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

Proyecto en etapa inicial de portafolio. La app ya tiene una primera experiencia funcional para cargar, clasificar, listar y eliminar prendas en memoria local. Todavía no guarda datos de forma persistente.

## Próximas mejoras

- Guardar prendas en almacenamiento local o backend.
- Crear filtros por categoría.
- Agregar edición de prendas.
- Incorporar capturas reales en `docs/screenshots/`.

## Autor

Jesus Eduardo Vezquez Rodriguez
-- JEVR
