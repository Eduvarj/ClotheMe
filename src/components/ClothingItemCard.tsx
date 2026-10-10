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
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    padding: theme.spacing.md,
    width: '100%',
    ...theme.shadow,
  },
  actions: {
    alignItems: 'flex-end',
    marginLeft: theme.spacing.sm,
  },
  category: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: '800',
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
    backgroundColor: '#fff4ed',
    borderColor: '#fed7aa',
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
    backgroundColor: theme.colors.primarySoft,
    borderColor: '#c8ddd1',
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
    height: 72,
    width: 72,
  },
});
