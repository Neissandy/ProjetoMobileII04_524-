import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';



function Cachoeira1({ navigation }) {
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
                <Image style={{  width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }} source={require('../../assets/Imagens/imgAnel1.jpg')}/>
                
                <View style={styles.ContainerTitle}>
                    <Text style={styles.title}> Cachoeira do Anel </Text>   
                </View>
                
                <Text style={styles.subtitle}> Informações:</Text>
                <View style={styles.ContainerText}>
                <Text style={styles.text}>
                    Localizada no município de Viçosa, a Cachoeira do Anel é uma cachoeira do município de Viçosa e já foi considerada
                    uma das cachoeiras do o Alagoas mais lindas provando que curtir quedas d’águas, além de praias, pode ser uma 
                    ótima opção para aqueles que querem uma mudança na rotina de férias no Alagoas. Formada pelo Rio Caçamba, 
                    situada no povoado do Anel, na Fazenda Cachoeira Grande, a cachoeira fica a 14 km da zona urbana da cidade. 
                    O lugar não conta com nenhuma infra-estrutura para turismo e fica localizado em área particular. É necessário 
                    fazer uma boa caminhada até chegar a cachoeira, o caminho é uma descida íngreme de barro escorregadio e pedras
                    dentro da mata atlântica. Com alguns obstáculos como insetos, matos, pedras, trechos escorregadios, etc.
                </Text>
                </View>

                
                <Text style={styles.subtitle}> Como chegar? </Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        Para quem pretende ir por conta própria só é possível chegar de carro. Siga a estrada para Paulo Jacinto desde 
                        Viçosa. Logo depois da entrada pra Chã Preta avista-se o povoado do Anel, vire à direita na estrada de terra ao 
                        lado do ponto de ônibus e siga até o final sem desviar. Para ir ao local e ter acesso às belezas naturais, o 
                        interessado precisa agendar a visita, previamente, com o dono da propriedade. O município de Viçosa fica no Vale 
                        do Paraíba, Zona da Mata alagoana, região serrana dos quilombos, distante 86 km de Maceió. Acesso pela rodovia 
                        AL-210.
                    </Text>
                </View>

                <Text style={styles.subtitle}> Preços:</Text>
                <View style={styles.ContainerText}>
                    <Text style={styles.text}>
                        O local é de fácil acesso e só é cobrado uma pequena taxa de R $5,00 pelo local de estacionamento. A sugestão de
                        hospedagem para conhecer a Cachoeira do Anel em Viçosa é ficar hospedado em Maceió, fazendo uma viagem de 1 hora e 
                        meia para chegar até lá. Entre os hotéis de Maceió podemos destacar o Ritz Suites Home, de categoria 4 estrelas e com diárias a 
                        partir de R $260,00.
                    </Text>
                </View>


                <Text style={styles.subtitle}> Fotos:</Text>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Mapa1')}>
                        <Text style={styles.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>    
                </View>
        
                <GridImageView data={[{ image: 'https://i2.wp.com/vamosporai.com/wp-content/uploads/2019/09/cachoeira_namorados_.jpg?fit=960%2C720&ssl=1' }, 
                        { image: 'https://lh3.googleusercontent.com/proxy/W3qvxrtqYl_tctsM7_yscY8lnrs4e5jD31gHdU3mauG4LrAWB1_RQWfwZYIEgsOv0kPzfq2gxzFOUkyRe2JRRoD6IsmGv2epr3OD3Dy-YjitqDvUNge0Zidt9U0t' }, 
                        { image: 'https://i2.wp.com/vamosporai.com/wp-content/uploads/2019/09/cachoeira_namorados_.jpg?fit=960%2C720&ssl=1' }, 
                        { image: 'https://i2.wp.com/vamosporai.com/wp-content/uploads/2019/09/cachoeira_namorados_.jpg?fit=960%2C720&ssl=1' }]} />

                
            </ScrollView>

    );
}
const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
    },
    background: {
        flex: 1,
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

  

export default Cachoeira1;