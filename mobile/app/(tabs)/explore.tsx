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
<<<<<<< HEAD
        <Image
          source={require('@/assets/images/emoji.png')}
          style={styles.reactLogo}
=======
        <IconSymbol
          size={310}
          color="#000000"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
>>>>>>> 1899c869d33a9e72bc1d2416950e65a67e96b30f
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo a nossa loja!</ThemedText>
        <ThemedText>
          Mas oque seria esse site?
          Somos uma loja de motos.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Para qual fim é esse site?</ThemedText>
        <ThemedText>
          Apresentar alguns tipos de motos para venda e revenda.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText>
          Prazer, me chamo Lucas, estou no terceiro ano do ensino médio, e esse site é para um trabalho curricular.{' '}
      </ThemedText>
            </ThemedView>
          
          <ThemedText>
            Clique no botão Explore para ir ver as motos
          </ThemedText>
          
        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
