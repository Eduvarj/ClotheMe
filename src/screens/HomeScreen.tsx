import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { CategorySelector } from '../components/CategorySelector';
import { ClothingImagePreview } from '../components/ClothingImagePreview';
import { ClothingItemCard } from '../components/ClothingItemCard';
import { EmptyWardrobe } from '../components/EmptyWardrobe';
import { CLOTHING_CATEGORIES } from '../constants/clothingCategories';
import { useClothingForm } from '../hooks/useClothingForm';
import { theme } from '../styles/theme';

export function HomeScreen() {
  const {
    cancelSelection,
    clothingItems,
    imageUri,
    pickImage,
    removeClothingItem,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
  } = useClothingForm();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mi Armario</Text>
      <Text style={styles.counter}>Prendas guardadas: {clothingItems.length}</Text>

      {!imageUri ? (
        <Button
          color={theme.colors.primary}
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

        {clothingItems.length === 0 ? (
          <EmptyWardrobe />
        ) : (
          clothingItems.map((item) => (
            <ClothingItemCard item={item} key={item.id} onDelete={removeClothingItem} />
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
