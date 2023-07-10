import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela4_Cachoeiras/styles.js';

import GridImageView from 'react-native-grid-image-viewer';

function Cachoeira4({ navigation }) {
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
                <Image style={css.imagem} source={require('../../assets/Imagens/imgVaiVem5.png')}/>
                
                <View style={css.ContainerTitle}>
                    <Text style={css.title}> Cachoeira Do Vai E Vem </Text>
                </View>

                <Text style={css.subtitle}> Informações: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Marcada por belas paisagens e águas límpidas, a cachoeira do Vai e Vem não tem um volume de água tão alto. Isso 
                        proporciona banhos tranquilos àqueles que a visitam. Está localizada em Água Branca, a cerca de 310 km de Maceió. 
                        lém disso, o local é característico por possuir uma trilha com alguns percalços que exigem certo esforço físico. 
                        Contudo, as águas frias da queda d’água são uma recompensa pelo caminho percorrido. Por possuir um volume de água 
                        baixo, é recomendado a visita durante o inverno, onde há um bom volume de água para banhos.
                    </Text >
                </View>


                <Text style={css.subtitle}> Como chegar? </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        O acesso se dá por meio de uma estrada de terra que vai de encontro com a AL-145 em Água Branca.
                    </Text>
                </View>

                <Text style={css.subtitle}> Preços: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Existem poucas informações sobre essa cachoeira. Acredita-se que o acesso a esse lugar seja livre e sem custos. 
                        Por ser um pouco mais distante, recomendamos passar a noite em Santana do Ipanema. Lá, a hospedagem pode ser no 
                        Hotel Privillege, recém-inaugurado e de estrutura única no sertão alagoano.
                    </Text>
                </View>

                <View style={css.containerButton}>
                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Mapa4')}>
                        <Text style={css.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>

                <Text style={css.subtitle}> Fotos:</Text>
                
                <Image style={css.gridImage} source={require('../../assets/Imagens/imgVaiVem1.png')}/>
                <Image style={css.gridImage} source={require('../../assets/Imagens/imgVaiVem2.jpg')}/>
                <Image style={css.gridImage} source={require('../../assets/Imagens/imgVaiVem3.png')}/>

            </View>
          
        </ScrollView>

    );
    }
}
export default Cachoeira4;