# ClotheMe

Aplicación móvil desarrollada con React Native, Expo y TypeScript para organizar prendas en un armario digital con persistencia local.

## Descripción

ClotheMe permite subir una imagen desde la galería, asignarle una categoría, guardar la prenda localmente, filtrarla, editar su categoría y eliminarla con confirmación. Es un proyecto de portafolio enfocado en buenas prácticas básicas de React Native, Expo y TypeScript.

## Características principales

- Subida de imágenes desde la galería.
- Guardado local de prendas con Async Storage.
- Persistencia de imágenes en móvil con FileSystem y en web con data URI.
- Listado de prendas con contador y estado vacío.
- Filtros por categoría: `Todas`, `Playera`, `Pantalón`, `Calzado` y `Accesorio`.
- Edición básica de categoría.
- Eliminación con confirmación.
- Fallback para imágenes rotas o antiguas.
- UI pulida para presentación de portafolio.

## Tecnologías utilizadas

- React Native
- Expo SDK 57
- TypeScript
- Expo Image Picker
- Async Storage
- Expo FileSystem

## Capturas de pantalla

Las capturas reales deben guardarse en:

```text
docs/screenshots/
```

Nombres sugeridos:

```text
home-empty.png
item-list.png
edit-category.png
filtered-category.png
```

Actualmente no hay capturas reales versionadas. Cuando se agreguen, esta sección puede actualizarse con las imágenes.

## Instalación

```bash
git clone https://github.com/Eduvarj/ClotheMe.git
cd ClotheMe
npm install
```

## Ejecución

```bash
npx expo start
```

Para iniciar con caché limpio:

```bash
npx expo start -c
```

## Scripts disponibles

- `npm run start`: inicia Expo.
- `npm run android`: inicia Expo para Android.
- `npm run ios`: inicia Expo para iOS.
- `npm run web`: inicia Expo para web.
- `npm run type-check`: valida TypeScript sin generar archivos.

## Estructura del proyecto

```text
ClotheMe/
  assets/
  docs/
    screenshots/
    github.md
    release-v1.0.0.md
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

## QA manual

La checklist manual de pruebas está en:

```text
docs/testing.md
```

## Estado del proyecto

Primera versión estable de portafolio. La app permite cargar, clasificar, filtrar, editar, eliminar y conservar prendas de forma local.

## Próximas mejoras

- Agregar capturas reales al README.
- Permitir editar la imagen de una prenda.
- Agregar búsqueda por nombre o notas.
- Migrar persistencia a backend cuando exista autenticación.

## Autor

Jesus Eduardo Vazquez Rodriguez
