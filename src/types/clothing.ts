export type ClothingCategory = 'Playera' | 'Pantalón' | 'Calzado' | 'Accesorio';

export type ClothingItemDraft = {
  category: ClothingCategory | null;
  imageUri: string | null;
};
