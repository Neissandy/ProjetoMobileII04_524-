import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela1_Inicial/styles.js';

function TelaInicial({ navigation }) {
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
                <ImageBackground source={require("../../assets/Imagens/img2.png")} style={css.imageBackgroundTela}>

                    <View style={css.ContainerTitle}>
                        <Text style={css.title}> Bem-vindo ao CachoeirasApp! </Text>
                    </View>


                    <Image source={require("../../assets/Imagens/imgTiririca2.jpg")} style={css.imagem} />

                    <View style={css.ContainerText}>
                        <Text style={css.text}> Descubra as incríveis cachoeiras do estado de Alagoas em um só lugar. Você poderá planejar sua visita turistica
                        a partir das nossas recomendações. Confira a localização, preços e muito mais!
                    </Text>
                    </View>

                    <View style={css.ContainerText}>
                        <Text style={css.text}>Click em 'Vamos Começar!' para iniciar.  Mais informações sobre o nosso aplicativo, click em 'Sobre'.</Text>
                    </View>

                    <View style={css.containerButton}>
                        <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={css.buttonText}>Vamos começar!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Sobre')}>
                            <Text style={css.buttonText}>Sobre</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

export default TelaInicial;

