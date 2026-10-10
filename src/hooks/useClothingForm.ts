import { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import type { ClothingCategory } from '../types/clothing';

export function useClothingForm() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ClothingCategory | null>(null);

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

  const saveClothingItem = () => {
    if (!selectedCategory) {
      Alert.alert('Selecciona una categoría', 'Por favor, selecciona una categoría primero.');
      return;
    }

    Alert.alert('Prenda guardada', `Listo, prenda guardada como: ${selectedCategory}`);
  };

  return {
    imageUri,
    pickImage,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
  };
}
