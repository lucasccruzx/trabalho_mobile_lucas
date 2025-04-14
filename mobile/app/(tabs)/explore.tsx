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
        <ThemedText type="title">Olá</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo a parte de cordas da nossa loja!</ThemedText>
        <ThemedText>
          Temos muitas variações de cordas
          <Image
          source={require('@/assets/images/nome-das-cordas-do-violão.png')}
          style={styles.reactLogo}
        />
          
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
