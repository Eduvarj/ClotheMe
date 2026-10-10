import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
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
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>ClotheMe</Text>
          <Text style={styles.title}>Mi Armario</Text>
          <Text style={styles.description}>
            Guarda tus prendas, ordénalas por categoría y encuentra rápido lo que tienes.
          </Text>
          <View style={styles.counterBadge}>
            <Text style={styles.counter}>
              {isLoadingWardrobe ? 'Cargando prendas...' : counterText}
            </Text>
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Nueva prenda</Text>

          {!imageUri ? (
            <View style={styles.uploadState}>
              <Text style={styles.uploadTitle}>Agrega una foto de tu prenda</Text>
              <Text style={styles.uploadText}>
                Usa una imagen clara para reconocerla fácilmente en tu armario.
              </Text>
              <AppButton
                disabled={isLoadingWardrobe}
                onPress={pickImage}
                title="Subir desde galería"
              />
            </View>
          ) : (
            <>
              <ClothingImagePreview imageUri={imageUri} />

              <Text style={styles.subtitle}>Selecciona una categoría</Text>

              <CategorySelector
                categories={CLOTHING_CATEGORIES}
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />

              <View style={styles.actionButtons}>
                <AppButton onPress={pickImage} title="Cambiar foto" variant="secondary" />
                <AppButton
                  disabled={isLoadingWardrobe}
                  onPress={saveClothingItem}
                  title="Guardar prenda"
                  variant="success"
                />
                <AppButton onPress={cancelSelection} title="Cancelar" variant="secondary" />
              </View>
            </>
          )}
        </View>

        <View style={styles.wardrobeSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Prendas guardadas</Text>
            <Text style={styles.sectionHint}>Filtra y edita tus categorías</Text>
          </View>

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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    justifyContent: 'center',
    marginTop: theme.spacing.md,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    padding: theme.spacing.lg,
  },
  content: {
    maxWidth: 560,
    width: '100%',
  },
  counter: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  counterBadge: {
    alignSelf: 'center',
    backgroundColor: theme.colors.primarySoft,
    borderRadius: theme.borderRadius.pill,
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  description: {
    color: theme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  eyebrow: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '800',
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
  },
  formSection: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    padding: theme.spacing.lg,
    ...theme.shadow,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  sectionHeader: {
    marginBottom: theme.spacing.md,
  },
  sectionHint: {
    color: theme.colors.textMuted,
    fontSize: 13,
    marginTop: theme.spacing.xs,
  },
  loadingText: {
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  uploadState: {
    alignItems: 'center',
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: theme.spacing.xl,
  },
  uploadText: {
    color: theme.colors.textMuted,
    lineHeight: 20,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  uploadTitle: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
  },
  wardrobeSection: {
    marginTop: theme.spacing.xxl,
    width: '100%',
  },
});
