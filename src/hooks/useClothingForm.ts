import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import type { ClothingCategory, ClothingItem } from '../types/clothing';

export function useClothingForm() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ClothingCategory | null>(null);
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      setImageUri(result.assets[0].uri);
      setSelectedCategory(null);
    }
  };

  const cancelSelection = () => {
    setImageUri(null);
    setSelectedCategory(null);
  };

  const saveClothingItem = () => {
    if (!imageUri) {
      Alert.alert('Selecciona una imagen', 'Por favor, sube una foto de la prenda primero.');
      return;
    }

    if (!selectedCategory) {
      Alert.alert('Selecciona una categoría', 'Por favor, selecciona una categoría primero.');
      return;
    }

    const newItem: ClothingItem = {
      category: selectedCategory,
      createdAt: new Date().toISOString(),
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      imageUri,
    };

    setClothingItems((currentItems) => [newItem, ...currentItems]);
    cancelSelection();
  };

  const removeClothingItem = (itemId: string) => {
    setClothingItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  return {
    cancelSelection,
    clothingItems,
    imageUri,
    pickImage,
    removeClothingItem,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
  };
}
