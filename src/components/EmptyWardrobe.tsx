import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';

type EmptyWardrobeProps = {
  description?: string;
  title?: string;
};

export function EmptyWardrobe({
  description = 'Sube una imagen, elige una categoría y guarda tu primera prenda.',
  title = 'Tu armario está vacío',
}: EmptyWardrobeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    padding: theme.spacing.xl,
    width: '100%',
    ...theme.shadow,
  },
  description: {
    color: theme.colors.textMuted,
    lineHeight: 20,
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
});
