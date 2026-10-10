import { Button, StyleSheet, Text, View } from 'react-native';

import { CategorySelector } from '../components/CategorySelector';
import { ClothingImagePreview } from '../components/ClothingImagePreview';
import { CLOTHING_CATEGORIES } from '../constants/clothingCategories';
import { useClothingForm } from '../hooks/useClothingForm';
import { theme } from '../styles/theme';

export function HomeScreen() {
  const {
    imageUri,
    pickImage,
    saveClothingItem,
    selectedCategory,
    setSelectedCategory,
  } = useClothingForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Armario</Text>

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
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    marginTop: theme.spacing.sm,
  },
  buttonSpacer: {
    width: theme.spacing.md,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.lg,
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
    marginBottom: theme.spacing.lg,
  },
});
