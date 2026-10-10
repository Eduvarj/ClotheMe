import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';
import type { ClothingCategory } from '../types/clothing';

type CategorySelectorProps = {
  categories: readonly ClothingCategory[];
  selectedCategory: ClothingCategory | null;
  onSelectCategory: (category: ClothingCategory) => void;
};

export function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) {
  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
            key={category}
            onPress={() => onSelectCategory(category)}
            style={[styles.button, isSelected && styles.buttonActive]}
          >
            <Text style={[styles.buttonText, isSelected && styles.buttonTextActive]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  button: {
    backgroundColor: theme.colors.surfaceMuted,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.pill,
    borderWidth: 1,
    margin: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  buttonActive: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.textMuted,
    fontWeight: '700',
  },
  buttonTextActive: {
    color: theme.colors.textInverted,
  },
});
