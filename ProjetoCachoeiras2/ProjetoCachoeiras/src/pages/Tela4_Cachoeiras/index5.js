import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

function Cachoeira5({ navigation }) {
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
            <Image style={{  width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }} source={require('../../assets/Imagens/imgTombador3.jpg')}/>
               
            <View style={styles.ContainerTitle}>             
                <Text style={styles.title}> Cachoeira do Tombador </Text>
            </View>


                <Text style={styles.subtitle}> Informações: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Considerada a cachoeira mais alta do estado de Alagoas, a cachoeira do tombador, também conhecida como véu de 
                        noiva, está localizada entre os municípios de Ibateguara e Colônia Leopoldina, mais precisamente na  Serra do 
                        Catita no município de Ibateguara, interior de Alagoas. Leva aproximadamente 2 horas da capital Alagoana, Maceió. 
                        A cachoeira impressiona com sua grandeza e exuberância, local muito querido por visitantes. A Cachoeira do 
                        Tombador é banhada pelo rio Jacuípe e é ideal para banhos. Para chegar a cachoeira é necessário fazer uma trilha.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Como chegar? </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Após o município, siga a rodovia até que  vire uma estrada de barro. É necessário fazer uma trilha em mata 
                        fechada que se dá após a Ponte Mosteiro Discípulo Amado. Durante o trajeto da trilha, o terreno é um pouco 
                        complicado com muitas pedras.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Preços: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Não tem muitas informações sobre preços, mas o local é aberto 24 horas e pode haver o auxílio de guias para 
                        chegar até a cachoeira. Os possíveis custos serão o de transporte até o local e alguma taxa para os guias.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Fotos:</Text>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Mapa5')}>
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

export default Cachoeira5;