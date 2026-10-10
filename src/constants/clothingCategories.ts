import type { ClothingCategory, ClothingCategoryFilter } from '../types/clothing';

export const CLOTHING_CATEGORIES: readonly ClothingCategory[] = [
  'Playera',
  'Pantalón',
  'Calzado',
  'Accesorio',
];

export const CLOTHING_CATEGORY_FILTERS: readonly ClothingCategoryFilter[] = [
  'Todas',
  ...CLOTHING_CATEGORIES,
];
