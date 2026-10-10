import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';
import type { ClothingItem } from '../types/clothing';

type ClothingItemCardProps = {
  item: ClothingItem;
  onDelete: (itemId: string) => void;
};

export function ClothingItemCard({ item, onDelete }: ClothingItemCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.date}>Guardada recientemente</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
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
  image: {
    borderRadius: theme.borderRadius.lg,
    height: 64,
    width: 64,
  },
});
