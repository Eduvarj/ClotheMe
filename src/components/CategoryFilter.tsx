import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';
import type { ClothingCategoryFilter } from '../types/clothing';

type CategoryFilterProps = {
  filters: readonly ClothingCategoryFilter[];
  selectedFilter: ClothingCategoryFilter;
  onSelectFilter: (filter: ClothingCategoryFilter) => void;
};

export function CategoryFilter({
  filters,
  selectedFilter,
  onSelectFilter,
}: CategoryFilterProps) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter;

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
            key={filter}
            onPress={() => onSelectFilter(filter)}
            style={[styles.button, isSelected && styles.buttonActive]}
          >
            <Text style={[styles.buttonText, isSelected && styles.buttonTextActive]}>
              {filter}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: theme.borderRadius.pill,
    margin: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  buttonActive: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.text,
    fontWeight: '500',
  },
  buttonTextActive: {
    color: theme.colors.textInverted,
  },
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
});
