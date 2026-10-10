export type ClothingCategory = 'Playera' | 'Pantalón' | 'Calzado' | 'Accesorio';

export type ClothingCategoryFilter = 'Todas' | ClothingCategory;

export type ClothingItemDraft = {
  category: ClothingCategory | null;
  imageUri: string | null;
};

export type ClothingItem = {
  id: string;
  category: ClothingCategory;
  imageUri: string;
  createdAt: string;
};
