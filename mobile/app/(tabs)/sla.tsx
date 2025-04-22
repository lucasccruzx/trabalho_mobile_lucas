import { Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone do Instagram

export default function HomeScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/luc.cruz_');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerImageContainer}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocK67zr7PxhnxuauYYHSM2cKPy4sultbWtD94jR6iJLTyV07jnA=s360-c-no' }}
            style={styles.profileImage}
          />
        </View>
      }
      contentContainerStyle={styles.contentContainer}
    >
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Bem vindo a Lucky's Music!</ThemedText>
      </ThemedView>
      
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Me chamo Lucas, estou no 3° ano do ensino médio e esse é um site de um trabalho trimestral
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Redes Socias</ThemedText>
        <TouchableOpacity style={styles.instagramButton} onPress={openInstagram}>
          <FontAwesome name="instagram" size={24} color="white" />
          <ThemedText style={styles.instagramText}>@luc.cruz_</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Quem somos?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Prazer, me chamo Lucas, sou dono e proprietário da loja
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  centeredContainer: {
    alignItems: 'center',
    width: '100%',
  },
  centeredText: {
    textAlign: 'center',
  },
  stepContainer: {
    gap: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  instagramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1306C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  instagramText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});