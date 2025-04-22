import { Image, StyleSheet, Platform, TouchableOpacity, Linking } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handlePressElixir = () => {
    Linking.openURL('https://www.elixirstrings.com.br/#');
  };

  const handlePressDAddario = () => {
    Linking.openURL('https://www.lojadaddario.com.br/d-addario/encordoamentos/violao-aco');
  };

  const handlePressGiannini = () => {
    Linking.openURL('https://www.giannini.com.br/produtos/categoria/encordoamentos/');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{}}
      headerImage={
        <Image
          source={{ uri: 'https://img.pikbest.com/wp/202346/acoustic-guitar-blank-canvas-a-3d-rendering-with-room-for-customization_9632312.jpg!bw700' }}
          style={styles.headerImage}
        />
      }
      contentContainerStyle={styles.container}
    >
      <ThemedView style={[styles.stepContainer, styles.centeredContent]}>
        <ThemedText type="subtitle">Bem vindo a parte de cordas da nossa loja!</ThemedText>
        <ThemedText style={styles.centeredText}>
          Temos muitas variações de cordas
        </ThemedText>
        <Image
          source={require('@/assets/images/nome-das-cordas-do-violão.png')}
          style={[styles.imageBelowText, styles.centeredImage]}
        />
        <ThemedText type="subtitle">A seguir, você verá algumas lojas parceiras da nossa loja</ThemedText>
        <ThemedText type="subtitle">Você pode visita-las clicando nos botões abaixo</ThemedText>
        
        {/* Botão Elixir */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePressElixir}
        >
          <ThemedText style={styles.buttonText}>Elixir Strings</ThemedText>
        </TouchableOpacity>
        
        {/* Botão D'Addario */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePressDAddario}
        >
          <ThemedText style={styles.buttonText}>D'Addario</ThemedText>
        </TouchableOpacity>

        {/* Novo Botão Giannini */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePressGiannini}
        >
          <ThemedText style={styles.buttonText}>Giannini</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    width: '90%',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    right: 0,
  },
  imageBelowText: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  centeredContent: {
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  centeredImage: {
    alignSelf: 'center',
  },
  exploreText: {
    marginTop: 20,
    marginBottom: 20,
  },
  // Estilos do botão
  button: {
    backgroundColor: '#8B0000', // Vermelho escuro
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});