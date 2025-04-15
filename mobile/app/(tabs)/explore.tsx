import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8B0000', dark: '#1D3D47' }}
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
      </ThemedView>
      <ThemedView style={[styles.stepContainer, styles.centeredContent]}>
        <ThemedText type="subtitle">Para qual fim é esse site?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Apresentar alguns tipos de motos para venda e revenda.
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, styles.centeredContent]}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Prazer, me chamo Lucas, estou no terceiro ano do ensino médio, e esse site é para um trabalho curricular.
        </ThemedText>
      </ThemedView>
      <ThemedText style={[styles.centeredText, styles.exploreText]}>
        Clique no botão Explore para ir ver as motos
      </ThemedText>
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
    height: 200,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'cover',
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
});