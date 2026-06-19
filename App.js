import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';
import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=5';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(CAT_API_URL);
      const newPhotos = response.data.map((item) => ({
        id: item.id,
        url: item.url,
      }));
      setPhotos((prev) => [...newPhotos, ...prev]);
    } catch (err) {
      setError('Não foi possível carregar as fotos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>🐱 Fotos de Gatos</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={loadCats}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Carregar 5 fotos</Text>
          )}
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        {photos.length === 0 ? (
          <Text style={styles.emptyText}>
            Clique no botão acima para carregar fotos de gatos.
          </Text>
        ) : (
          photos.map((photo) => (
            <View key={photo.id} style={styles.card}>
              <Image source={{ uri: photo.url }} style={styles.image} />
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ff8a3d',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
    minWidth: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  error: {
    color: '#c0392b',
    marginTop: 8,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 40,
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
});
