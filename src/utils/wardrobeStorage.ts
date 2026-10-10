import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ClothingCategory, ClothingItem } from '../types/clothing';

const WARDROBE_STORAGE_KEY = '@clotheme/wardrobe-items';
const VALID_CATEGORIES: ClothingCategory[] = ['Playera', 'Pantalón', 'Calzado', 'Accesorio'];

function isClothingItem(value: unknown): value is ClothingItem {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const item = value as Partial<ClothingItem>;

  return (
    typeof item.id === 'string' &&
    typeof item.imageUri === 'string' &&
    typeof item.createdAt === 'string' &&
    Boolean(item.category && VALID_CATEGORIES.includes(item.category))
  );
}

export async function loadWardrobeItems(): Promise<ClothingItem[]> {
  const storedItems = await AsyncStorage.getItem(WARDROBE_STORAGE_KEY);

  if (!storedItems) {
    return [];
  }

  const parsedItems: unknown = JSON.parse(storedItems);

  if (!Array.isArray(parsedItems)) {
    return [];
  }

  return parsedItems.filter(isClothingItem);
}

export async function saveWardrobeItems(items: ClothingItem[]) {
  await AsyncStorage.setItem(WARDROBE_STORAGE_KEY, JSON.stringify(items));
}
