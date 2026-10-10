# QA manual de ClotheMe

Usa esta checklist antes de publicar o hacer merge de una versión estable.

## Preparación

- [ ] Instalar dependencias con `npm install`.
- [ ] Ejecutar `npm run type-check`.
- [ ] Ejecutar `npx expo export --platform web`.
- [ ] Iniciar la app con `npx expo start -c`.

## Funcionalidad principal

- [ ] Abrir la app sin prendas guardadas y confirmar que se muestra el estado vacío.
- [ ] Guardar una prenda con imagen y categoría.
- [ ] Guardar varias prendas de categorías diferentes.
- [ ] Confirmar que el contador se actualiza correctamente.
- [ ] Filtrar por `Todas`, `Playera`, `Pantalón`, `Calzado` y `Accesorio`.
- [ ] Filtrar una categoría vacía y confirmar que aparece el mensaje correspondiente.
- [ ] Editar la categoría de una prenda y confirmar que cambia en la lista.
- [ ] Eliminar una prenda y confirmar que aparece el diálogo de confirmación.
- [ ] Cancelar una eliminación y confirmar que la prenda permanece.
- [ ] Confirmar una eliminación y revisar que la prenda desaparece.

## Persistencia

- [ ] En web, guardar una prenda y refrescar el navegador.
- [ ] Confirmar que la prenda sigue visible después del refresh.
- [ ] Confirmar que la imagen sigue visible después del refresh.
- [ ] Editar una categoría, refrescar y confirmar que el cambio persiste.
- [ ] Eliminar una prenda, refrescar y confirmar que no vuelve a aparecer.
- [ ] Probar que una imagen rota o antigua muestra `Imagen no disponible` sin romper la app.

## Plataformas

- [ ] Probar en web.
- [ ] Probar en Expo Go.
- [ ] Verificar que no haya errores visibles en consola.
- [ ] Verificar que los botones principales sigan siendo claros en una pantalla pequeña.

## Capturas

- [ ] Agregar capturas reales en `docs/screenshots/` cuando estén disponibles.
- [ ] Actualizar el README si se agregan rutas concretas de capturas.
