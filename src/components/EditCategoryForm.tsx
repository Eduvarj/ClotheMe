import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CLOTHING_CATEGORIES } from '../constants/clothingCategories';
import { theme } from '../styles/theme';
import type { ClothingCategory } from '../types/clothing';

type EditCategoryFormProps = {
  selectedCategory: ClothingCategory;
  onCancel: () => void;
  onChangeCategory: (category: ClothingCategory) => void;
  onSave: () => void;
};

export function EditCategoryForm({
  selectedCategory,
  onCancel,
  onChangeCategory,
  onSave,
}: EditCategoryFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Editar categoría</Text>

      <View style={styles.options}>
        {CLOTHING_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              key={category}
              onPress={() => onChangeCategory(category)}
              style={[styles.categoryButton, isSelected && styles.categoryButtonActive]}
            >
              <Text style={[styles.categoryText, isSelected && styles.categoryTextActive]}>
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.actions}>
        <Pressable accessibilityRole="button" onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
        <Pressable accessibilityRole="button" onPress={onSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Guardar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.sm,
  },
  cancelButton: {
    borderColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.pill,
    borderWidth: 1,
    marginRight: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  cancelText: {
    color: theme.colors.secondary,
    fontWeight: '700',
  },
  categoryButton: {
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: theme.borderRadius.pill,
    marginBottom: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  categoryButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  categoryText: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: theme.colors.textInverted,
  },
  container: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  label: {
    color: theme.colors.text,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  saveButton: {
    backgroundColor: theme.colors.success,
    borderRadius: theme.borderRadius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  saveText: {
    color: theme.colors.textInverted,
    fontWeight: '700',
  },
});
