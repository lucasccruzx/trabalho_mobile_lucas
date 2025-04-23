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
      contentContainerStyle={styles.contentContainer}
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    top: '50%', 
    left: '50%',
    transform: [{ translateX: -145 }, { translateY: -89 }],
  },
});