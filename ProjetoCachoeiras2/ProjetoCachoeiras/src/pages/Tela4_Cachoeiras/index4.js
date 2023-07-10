import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

function Cachoeira4({ navigation }) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
                <Image style={{  width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }} source={require('../../assets/Imagens/imgVaiVem5.png')}/>
                
                <View style={styles.ContainerTitle}>
                    <Text style={styles.title}> Cachoeira Do Vai E Vem </Text>
                </View>

                <Text style={styles.subtitle}> Informações: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Marcada por belas paisagens e águas límpidas, a cachoeira do Vai e Vem não tem um volume de água tão alto. Isso 
                        proporciona banhos tranquilos àqueles que a visitam. Está localizada em Água Branca, a cerca de 310 km de Maceió. 
                        lém disso, o local é característico por possuir uma trilha com alguns percalços que exigem certo esforço físico. 
                        Contudo, as águas frias da queda d’água são uma recompensa pelo caminho percorrido. Por possuir um volume de água 
                        baixo, é recomendado a visita durante o inverno, onde há um bom volume de água para banhos.
                    </Text >
                </View>


                <Text style={styles.subtitle}> Como chegar? </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        O acesso se dá por meio de uma estrada de terra que vai de encontro com a AL-145 em Água Branca.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Preços: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Existem poucas informações sobre essa cachoeira. Acredita-se que o acesso a esse lugar seja livre e sem custos. 
                        Por ser um pouco mais distante, recomendamos passar a noite em Santana do Ipanema. Lá, a hospedagem pode ser no 
                        Hotel Privillege, recém-inaugurado e de estrutura única no sertão alagoano.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Fotos:</Text>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Mapa4')}>
                        <Text style={styles.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

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
        top: 20,
        width: 200,
        marginTop: 13,
        marginBottom: 40,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
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
        marginTop: 15,
        marginBottom:7,
    }, 
 
    title: {
        fontSize: 28,
        fontFamily: 'Galada_400Regular'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Galada_400Regular'
    },
    ContainerTitle: {
        marginBottom: 12,
        marginTop: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 14, 
        fontFamily: 'Baloo2_500Medium',
        textAlign: 'center'
    }
})

export default Cachoeira4;