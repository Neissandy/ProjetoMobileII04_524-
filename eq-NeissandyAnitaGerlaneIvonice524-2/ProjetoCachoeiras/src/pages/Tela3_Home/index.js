import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela3_Home/styles.js';

function TelaHome({ navigation }) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <ScrollView>
            <View style={css.container}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
            <View style={css.ContainerText}>
                    <View style={css.ContainerTitle}>
                        <Text style={css.title}> Cachoeiras de Alagoas </Text>
                    </View>
                    
                    <Text style={css.text}> Confira a lista de cachoeiras mais famosas do estado de Alagoas</Text>
                </View>

                <View style={css.containerButton}>
                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Cachoeira do Anel')}>
                        <ImageBackground style={css.imageBackground}  source={require('../../assets/Imagens/imgAnel2.jpg')}>
                            <Text style={css.buttonText}>Cachoeira do Anel</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Cachoeira do Tiririca')}>
                        <ImageBackground style={css.imageBackground}  source={require('../../assets/Imagens/imgTiririca4.jpg')}>
                            <Text style={css.buttonText}>Cachoeira da Tiririca</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Cachoeira Do Vai E Vem')}>
                        <ImageBackground style={css.imageBackground}  source={require('../../assets/Imagens/imgVaiVem3.png')}>
                            <Text style={css.buttonText}>Cachoeira Do Vai E Vem </Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Cachoeira do Tombador')}>
                        <ImageBackground style={css.imageBackground} source={require('../../assets/Imagens/imgTombador4.jpg')}>
                            <Text style={css.buttonText}>Cachoeira do Tombador</Text>
                        </ImageBackground>
                    </TouchableOpacity>
            
                </View>  
            </View>         
            
        </ScrollView>
    );
    }
}

export default TelaHome;