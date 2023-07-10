import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';



function TelaInicial({ navigation }) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="white"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <ImageBackground source={require("../../assets/Imagens/img2.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>

                    <View style={styles.ContainerTitle}>
                        <Text style={styles.title}> Bem-vindo ao CachoeirasApp! </Text>
                    </View>


                    <Image style={{ width: 310, height: 170, alignSelf: 'center', borderRadius: 30, borderColor: 'white', borderWidth: 2 }} source={require('../../assets/Imagens/imgTiririca2.jpg')} />

                    <View style={styles.ContainerText}>
                        <Text style={styles.text}> Descubra as incríveis cachoeiras do estado de Alagoas em um só lugar. Você poderá planejar sua visita turistica
                        a partir das nossas recomendações. Confira a localização, preços e muito mais!
                    </Text>
                    </View>

                    <View style={styles.ContainerText}>
                        <Text style={styles.text}>Click em 'Vamos Começar!' para iniciar. Para saber mais informações do nosso Aplicativo, como os
                    desenvolvedores, click em 'Sobre o app'</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Vamos começar!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Sobre')}>
                            <Text style={styles.buttonText}>Sobre</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        );
    }

const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
    },
    roundedButton: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: 200,
        marginTop: 13,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    },

    ContainerText: {
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 11,
       
    },        
    title: {
        fontSize: 28,
        fontFamily: 'Galada_400Regular',
        color: '#000',
        textAlign: 'center'
    },
    ContainerTitle: {
        marginBottom: 12,
        alignItems: 'center',
    },
    text: {
        color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'Baloo2_500Medium' 
    }
})

export default TelaInicial;

