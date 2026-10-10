import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

type AppButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
};

export function AppButton({
  disabled = false,
  onPress,
  title,
  variant = 'primary',
}: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: theme.borderRadius.pill,
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 118,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  danger: {
    backgroundColor: theme.colors.danger,
  },
  disabled: {
    opacity: 0.55,
  },
  pressed: {
    opacity: 0.82,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
  },
  secondaryText: {
    color: theme.colors.text,
  },
  success: {
    backgroundColor: theme.colors.success,
  },
  text: {
    color: theme.colors.textInverted,
    fontSize: 14,
    fontWeight: '700',
  },
});
