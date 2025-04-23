import { Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone do Instagram e GitHub



export default function HomeScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/luc.cruz_');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/lucasccruzx');
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
        <ThemedText type="subtitle">Lucas Cerqueira da Cruz</ThemedText>
      </ThemedView>
      
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Me chamo Lucas, estou no 3° ano do ensino médio e esse é um site de um trabalho trimestral
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Redes Sociais</ThemedText>
        <TouchableOpacity style={styles.instagramButton} onPress={openInstagram}>
          <FontAwesome name="instagram" size={24} color="white" />
          <ThemedText style={styles.instagramText}>Instagram</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.githubButton} onPress={openGitHub}>
          <FontAwesome name="github" size={24} color="white" />
          <ThemedText style={styles.githubText}>GitHub</ThemedText>
        </TouchableOpacity>
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
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  githubText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});