# Release v1.0.0

Primera versión estable de ClotheMe como proyecto de portafolio.

## Funcionalidades incluidas

- Subir imágenes desde la galería.
- Crear prendas con categoría.
- Guardar prendas localmente.
- Persistir imágenes en móvil con FileSystem.
- Persistir imágenes en web como data URI.
- Ver listado de prendas guardadas.
- Filtrar por categoría.
- Editar la categoría de una prenda.
- Eliminar prendas con confirmación.
- Mostrar estado vacío.
- Mostrar fallback cuando una imagen no está disponible.
- Contar prendas guardadas.
- UI pulida para presentación de portafolio.

## Tecnologías

- React Native
- Expo SDK 57
- TypeScript
- Expo Image Picker
- Async Storage
- Expo FileSystem

## Limitaciones conocidas

- La persistencia es local al dispositivo o navegador.
- No hay autenticación ni sincronización en la nube.
- En web, guardar muchas imágenes grandes como data URI puede aumentar el uso de almacenamiento local.
- Las imágenes web guardadas antes del fix de data URI pueden mostrarse como no disponibles.
- No hay edición de imagen, solo edición de categoría.

## Próximas mejoras

- Agregar capturas reales al README.
- Permitir editar o reemplazar la imagen de una prenda.
- Agregar búsqueda o notas por prenda.
- Agregar pruebas automatizadas básicas.
- Migrar a backend cuando exista autenticación.
