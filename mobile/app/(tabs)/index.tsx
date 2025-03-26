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
          source={require('@/assets/images/emoji.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo a Lucky's Motors, a melhor loja de motos esportivas de Curitiba e região.</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que a loja vende?</ThemedText>
        <ThemedText>
          Desde motos normais até as esportivas
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Simule seu Financiamento</ThemedText>
        <ThemedText>
          
          Quer Financiar sua Moto? Simule o financiamento conosco.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem somos?</ThemedText>
        <ThemedText>
          Sou Lucas, proprietario, fundador e dono da Lucky's Motors, e com a ajuda da nossa equipe, você pode vir a loja e sair de moto nova!{' '}
          
        </ThemedText>
      </ThemedView>
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
