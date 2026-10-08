import { useState } from 'react';
import { Button, Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CATEGORIAS = ['Playera', 'Pantalón', 'Calzado', 'Accesorio'];

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 4], 
      quality: 0.8,   
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setCategoriaSeleccionada(null); // Reiniciamos la categoría al cambiar de foto
    }
  };

  const guardarPrenda = () => {
    if (!categoriaSeleccionada) {
      alert('Por favor, selecciona una categoría primero. 👕');
      return;
    }
    // Por ahora solo mostraremos una alerta. ¡Pronto lo enviaremos a Supabase!
    alert(`¡Listo! Prenda guardada como: ${categoriaSeleccionada}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Armario 👕</Text>
      
      {!imageUri ? (
        <Button 
          title="Subir prenda de la galería" 
          onPress={pickImage} 
          color="#646cff" 
        />
      ) : (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          
          <Text style={styles.subtitle}>¿Qué tipo de prenda es?</Text>
          
          <View style={styles.categoriesContainer}>
            {CATEGORIAS.map((cat) => (
              <TouchableOpacity 
                key={cat} 
                style={[
                  styles.categoryButton, 
                  categoriaSeleccionada === cat && styles.categoryButtonActive
                ]}
                onPress={() => setCategoriaSeleccionada(cat)}
              >
                <Text style={[
                  styles.categoryText,
                  categoriaSeleccionada === cat && styles.categoryTextActive
                ]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.actionButtons}>
            <Button title="Cambiar foto" onPress={pickImage} color="#888" />
            <View style={{ width: 15 }} />
            <Button title="Guardar Prenda" onPress={guardarPrenda} color="#4caf50" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 25,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },
  categoryButtonActive: {
    backgroundColor: '#646cff', // Color azul cuando está seleccionado
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff', // Texto blanco cuando está seleccionado
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  }
});