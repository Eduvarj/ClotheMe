import { Image, StyleSheet } from 'react-native';

import { theme } from '../styles/theme';

type ClothingImagePreviewProps = {
  imageUri: string;
};

export function ClothingImagePreview({ imageUri }: ClothingImagePreviewProps) {
  return <Image source={{ uri: imageUri }} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: theme.borderRadius.lg,
    height: 250,
    marginBottom: theme.spacing.lg,
    width: 250,
  },
});
