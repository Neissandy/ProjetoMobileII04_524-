import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text} from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela2_Sobre/styles.js';

function TelaSobre( ) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={css.container}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
              <View style={css.ContainerTitle}>
                <Text style={css.title}> Sobre o nosso projeto </Text>  
              </View>

              <View style={css.ContainerText}>
                <Text style={css.text}>Esse aplicativo foi desenvolvido pelos alunos do 4° ano de Informática (Turma 524) do Instituto Federal de Alagoas, Campus Palmeira dos Índios - Ifal.</Text>
              </View>
                <Text style={css.subtitle}>Desenvolvedores:</Text>
                <Text style={css.text}>⬤ Neissandy Silva</Text>
                <Text style={css.text}>⬤ Gerlane Santos</Text>
                <Text style={css.text}>⬤ Ivonice Oliveira</Text>
                <Text style={css.text}>⬤ Anita Silva</Text>

        </View>
    );
  }
}
export default TelaSobre;