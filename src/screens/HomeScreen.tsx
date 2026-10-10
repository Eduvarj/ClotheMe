import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { CategorySelector } from '../components/CategorySelector';
import { CategoryFilter } from '../components/CategoryFilter';
import { ClothingImagePreview } from '../components/ClothingImagePreview';
import { ClothingItemCard } from '../components/ClothingItemCard';
import { EmptyWardrobe } from '../components/EmptyWardrobe';
import { CLOTHING_CATEGORIES, CLOTHING_CATEGORY_FILTERS } from '../constants/clothingCategories';
import { useClothingForm } from '../hooks/useClothingForm';
import { theme } from '../styles/theme';
import type { ClothingCategory, ClothingCategoryFilter, ClothingItem } from '../types/clothing';

export function HomeScreen() {
  const {
    cancelSelection,
    clothingItems,
    imageUri,
    isLoadingWardrobe,
    pickImage,
    removeClothingItem,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
    updateClothingItemCategory,
  } = useClothingForm();
  const [selectedFilter, setSelectedFilter] = useState<ClothingCategoryFilter>('Todas');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<ClothingCategory>('Playera');

  const filteredItems =
    selectedFilter === 'Todas'
      ? clothingItems
      : clothingItems.filter((item) => item.category === selectedFilter);

  const counterText =
    selectedFilter === 'Todas'
      ? `Prendas guardadas: ${clothingItems.length}`
      : `Mostrando ${filteredItems.length} de ${clothingItems.length} prendas`;

  const startEditingItem = (item: ClothingItem) => {
    setEditingItemId(item.id);
    setEditingCategory(item.category);
  };

  const cancelEditingItem = () => {
    setEditingItemId(null);
  };

  const saveEditingItem = async (itemId: string) => {
    const didSave = await updateClothingItemCategory(itemId, editingCategory);

    if (didSave) {
      cancelEditingItem();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mi Armario</Text>
      <Text style={styles.counter}>
        {isLoadingWardrobe ? 'Cargando prendas...' : counterText}
      </Text>

      {!imageUri ? (
        <Button
          color={theme.colors.primary}
          disabled={isLoadingWardrobe}
          onPress={pickImage}
          title="Subir prenda de la galería"
        />
      ) : (
        <>
          <ClothingImagePreview imageUri={imageUri} />

          <Text style={styles.subtitle}>¿Qué tipo de prenda es?</Text>

          <CategorySelector
            categories={CLOTHING_CATEGORIES}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          <View style={styles.actionButtons}>
            <Button color={theme.colors.secondary} onPress={pickImage} title="Cambiar foto" />
            <View style={styles.buttonSpacer} />
            <Button
              color={theme.colors.success}
              disabled={isLoadingWardrobe}
              onPress={saveClothingItem}
              title="Guardar prenda"
            />
            <View style={styles.buttonSpacer} />
            <Button color={theme.colors.danger} onPress={cancelSelection} title="Cancelar" />
          </View>
        </>
      )}

      <View style={styles.wardrobeSection}>
        <Text style={styles.sectionTitle}>Prendas guardadas</Text>

        <CategoryFilter
          filters={CLOTHING_CATEGORY_FILTERS}
          onSelectFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />

        {isLoadingWardrobe ? (
          <Text style={styles.loadingText}>Cargando tu armario...</Text>
        ) : clothingItems.length === 0 ? (
          <EmptyWardrobe />
        ) : filteredItems.length === 0 ? (
          <EmptyWardrobe
            description="Cambia el filtro o guarda una prenda con esta categoría."
            title="No hay prendas en esta categoría"
          />
        ) : (
          filteredItems.map((item) => (
            <ClothingItemCard
              editingCategory={editingCategory}
              isEditing={editingItemId === item.id}
              item={item}
              key={item.id}
              onCancelEdit={cancelEditingItem}
              onChangeEditingCategory={setEditingCategory}
              onDelete={removeClothingItem}
              onEdit={startEditingItem}
              onSaveEdit={saveEditingItem}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing.sm,
  },
  buttonSpacer: {
    width: theme.spacing.md,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    padding: theme.spacing.lg,
  },
  counter: {
    color: theme.colors.textMuted,
    fontSize: 16,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: theme.spacing.md,
  },
  loadingText: {
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  wardrobeSection: {
    marginTop: theme.spacing.xxl,
    width: '100%',
  },
});
