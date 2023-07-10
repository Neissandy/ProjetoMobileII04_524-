import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

function Cachoeira2({ navigation }) {
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
            <Image style={{  width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }} source={require('../../assets/Imagens/imgTiririca1.jpg')}/>
                
            <View style={styles.ContainerTitle}>
                <Text style={styles.title}> Cachoeira do Tiririca </Text>
            </View>

                <Text style={styles.subtitle}> Informações: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Localizada na Zona da Mata Alagoana, Murici é uma pequena cidade distante 51 km de Maceió. A trilha atravessa 
                        2,5 km de mata, entre pés de banana, jaca, goiaba, manga e até seriguela. O som da queda d’água atrai os 
                        visitantes que têm o privilégio de ver a beleza da cachoeira. Para ter acesso a cachoeira, é necessário fazer 
                        uma trilha até o local. A cachoeira tem uma queda de cerca de 85 metros e é um local muito favorável para os 
                        praticantes do rapel, além é claro, de sua beleza e da rica biodiversidade.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Como chegar? </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Seu trajeto é sentido aeroporto, indo direto até chegar à cidade de Murici, é só passar a entrada principal da 
                        rotatória, passa pelo Posto BR (que fica na esquerda), e depois segue em frente por cerca de 1 km. Após um quebra
                        mola, fique atento no seu lado direito que vai ter uma placa falando sobre cachoeira, você entra nela para pegar
                        uma estrada totalmente de barro. Segue reto. Você percorrerá um caminho um tanto longo até o primeiro portal da
                        Fazenda Boa Sorte , logo depois mais uma curta estrada de barro até o segundo portal e depois a recepção. 
                        Aberta todos os dias. A trilha reserva trechos escorregadios e estreitos. Um apoio nas árvores e cipós 
                        encontrados pelo percurso é uma boa pedida. A caminhada dura em média mais de uma hora. 
                    </Text>
                </View>

                <Text style={styles.subtitle}> Preços: </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        O acesso pela fazenda tem o valor de 25 reais e mais 30 reais se quiser almoçar. Na recepção, você tem instruções 
                        cológicas sobre a fauna e flora da região. Ainda pode desfrutar do ambiente com piscinas e sala de jogos. A fazenda 
                        disponibiliza um guia para acompanhar na trilha e levar até a cachoeira.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Fotos:</Text>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Mapa2')}>
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

export default Cachoeira2;