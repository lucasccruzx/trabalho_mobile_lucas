import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/emoji.png')}
          style={styles.reactLogo}
        />
      }
      contentContainerStyle={styles.contentContainer} // Adicionado para centralizar conteúdo
    >
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">Bem vindo a Lucky's Music!</ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, styles.centeredContainer]}>
        <ThemedText type="subtitle">O que somos?</ThemedText>
        <ThemedText style={styles.centeredText}>
          Uma loja de instrumentos musicais e acessórios.
        </ThemedText>
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
    alignItems: 'center', // Centraliza os itens horizontalmente
    paddingHorizontal: 16, // Adiciona um pouco de padding nas laterais
  },
  centeredContainer: {
    alignItems: 'center', // Centraliza os itens horizontalmente dentro de cada container
    width: '100%', // Garante que o container ocupe toda a largura disponível
  },
  centeredText: {
    textAlign: 'center', // Centraliza o texto
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20, // Adiciona espaço no topo
    marginBottom: 20, // Adiciona espaço na base
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20, // Aumentei o marginBottom para melhor espaçamento
    paddingHorizontal: 20, // Adiciona padding horizontal
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    alignSelf: 'center', // Centraliza a imagem
  },
});