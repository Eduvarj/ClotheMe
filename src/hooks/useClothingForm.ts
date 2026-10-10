import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import type { ClothingCategory, ClothingItem } from '../types/clothing';
import { persistWardrobeImage, removeWardrobeImage } from '../utils/imageStorage';
import { loadWardrobeItems, saveWardrobeItems } from '../utils/wardrobeStorage';

export function useClothingForm() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ClothingCategory | null>(null);
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [isLoadingWardrobe, setIsLoadingWardrobe] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadSavedItems() {
      try {
        const savedItems = await loadWardrobeItems();

        if (isMounted) {
          setClothingItems(savedItems);
        }
      } catch {
        Alert.alert('No se pudo cargar el armario', 'Intenta cerrar y abrir la app de nuevo.');
      } finally {
        if (isMounted) {
          setIsLoadingWardrobe(false);
        }
      }
    }

    loadSavedItems();

    return () => {
      isMounted = false;
    };
  }, []);

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

  const persistClothingItems = async (nextItems: ClothingItem[]) => {
    try {
      await saveWardrobeItems(nextItems);
      setClothingItems(nextItems);
      return true;
    } catch {
      Alert.alert('No se pudo guardar', 'La prenda se verá ahora, pero podría perderse al reiniciar.');
      return false;
    }
  };

  const saveClothingItem = async () => {
    if (!imageUri) {
      Alert.alert('Selecciona una imagen', 'Por favor, sube una foto de la prenda primero.');
      return;
    }

    if (!selectedCategory) {
      Alert.alert('Selecciona una categoría', 'Por favor, selecciona una categoría primero.');
      return;
    }

    let persistedImageUri: string;

    try {
      persistedImageUri = await persistWardrobeImage(imageUri);
    } catch {
      Alert.alert('No se pudo guardar la imagen', 'Intenta seleccionar la prenda nuevamente.');
      return;
    }

    const newItem: ClothingItem = {
      category: selectedCategory,
      createdAt: new Date().toISOString(),
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      imageUri: persistedImageUri,
    };

    const didSave = await persistClothingItems([newItem, ...clothingItems]);

    if (didSave) {
      cancelSelection();
    }
  };

  const removeClothingItem = async (itemId: string) => {
    const itemToRemove = clothingItems.find((item) => item.id === itemId);
    const nextItems = clothingItems.filter((item) => item.id !== itemId);
    const didSave = await persistClothingItems(nextItems);

    if (didSave && itemToRemove) {
      await removeWardrobeImage(itemToRemove.imageUri);
    }
  };

  return {
    cancelSelection,
    clothingItems,
    imageUri,
    isLoadingWardrobe,
    pickImage,
    removeClothingItem,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
  };
}
