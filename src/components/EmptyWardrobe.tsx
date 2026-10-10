import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';

export function EmptyWardrobe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu armario está vacío</Text>
      <Text style={styles.description}>
        Sube una imagen, elige una categoría y guarda tu primera prenda.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    padding: theme.spacing.lg,
    width: '100%',
  },
  description: {
    color: theme.colors.textMuted,
    lineHeight: 20,
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
