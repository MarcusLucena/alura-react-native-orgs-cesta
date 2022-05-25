import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import { Basket } from './src/views/Basket';

export default function App() {
  const loadingFonts = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
  })

  if(!loadingFonts) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}
