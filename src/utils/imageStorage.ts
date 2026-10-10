import * as FileSystem from 'expo-file-system/legacy';

const WARDROBE_IMAGES_FOLDER = 'wardrobe-images';

function getWardrobeImagesDirectory() {
  if (!FileSystem.documentDirectory) {
    return null;
  }

  return `${FileSystem.documentDirectory}${WARDROBE_IMAGES_FOLDER}/`;
}

function getFileExtension(uri: string) {
  const cleanUri = uri.split('?')[0] ?? uri;
  const fileName = cleanUri.split('/').pop();
  const extension = fileName?.split('.').pop();

  if (!extension || extension === fileName) {
    return 'jpg';
  }

  return extension;
}

async function ensureWardrobeImagesDirectory() {
  const directory = getWardrobeImagesDirectory();

  if (!directory) {
    return null;
  }

  const directoryInfo = await FileSystem.getInfoAsync(directory);

  if (!directoryInfo.exists) {
    await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
  }

  return directory;
}

export async function persistWardrobeImage(sourceUri: string) {
  const directory = await ensureWardrobeImagesDirectory();

  if (!directory || sourceUri.startsWith(directory)) {
    return sourceUri;
  }

  const extension = getFileExtension(sourceUri);
  const destinationUri = `${directory}${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${extension}`;

  await FileSystem.copyAsync({
    from: sourceUri,
    to: destinationUri,
  });

  return destinationUri;
}

export async function removeWardrobeImage(imageUri: string) {
  const directory = getWardrobeImagesDirectory();

  if (!directory || !imageUri.startsWith(directory)) {
    return;
  }

  await FileSystem.deleteAsync(imageUri, { idempotent: true });
}
