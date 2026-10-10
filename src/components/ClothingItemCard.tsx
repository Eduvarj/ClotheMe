import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { EditCategoryForm } from './EditCategoryForm';
import { theme } from '../styles/theme';
import type { ClothingCategory, ClothingItem } from '../types/clothing';

type ClothingItemCardProps = {
  editingCategory: ClothingCategory;
  isEditing: boolean;
  item: ClothingItem;
  onCancelEdit: () => void;
  onChangeEditingCategory: (category: ClothingCategory) => void;
  onDelete: (itemId: string) => void;
  onEdit: (item: ClothingItem) => void;
  onSaveEdit: (itemId: string) => void;
};

export function ClothingItemCard({
  editingCategory,
  isEditing,
  item,
  onCancelEdit,
  onChangeEditingCategory,
  onDelete,
  onEdit,
  onSaveEdit,
}: ClothingItemCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />

      {isEditing ? (
        <EditCategoryForm
          onCancel={onCancelEdit}
          onChangeCategory={onChangeEditingCategory}
          onSave={() => onSaveEdit(item.id)}
          selectedCategory={editingCategory}
        />
      ) : (
        <>
          <View style={styles.content}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.date}>Guardada recientemente</Text>
          </View>

          <View style={styles.actions}>
            <Pressable
              accessibilityRole="button"
              onPress={() => onEdit(item)}
              style={styles.editButton}
            >
              <Text style={styles.editText}>Editar</Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => onDelete(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>Eliminar</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
    width: '100%',
  },
  actions: {
    alignItems: 'flex-end',
  },
  category: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    marginHorizontal: theme.spacing.md,
  },
  date: {
    color: theme.colors.textMuted,
    fontSize: 12,
    marginTop: theme.spacing.xs,
  },
  deleteButton: {
    borderColor: theme.colors.danger,
    borderRadius: theme.borderRadius.pill,
    borderWidth: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  deleteText: {
    color: theme.colors.danger,
    fontWeight: '700',
  },
  editButton: {
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.pill,
    borderWidth: 1,
    marginBottom: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  editText: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  image: {
    borderRadius: theme.borderRadius.lg,
    height: 64,
    width: 64,
  },
});
