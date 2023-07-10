import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela4_Cachoeiras/styles.js';

import GridImageView from 'react-native-grid-image-viewer';

function Cachoeira5({ navigation }) {
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
            <Image style={css.imagem} source={require('../../assets/Imagens/imgTombador3.jpg')}/>
               
            <View style={css.ContainerTitle}>             
                <Text style={css.title}> Cachoeira do Tombador </Text>
            </View>


                <Text style={css.subtitle}> Informações: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Considerada a cachoeira mais alta do estado de Alagoas, a cachoeira do tombador, também conhecida como véu de 
                        noiva, está localizada entre os municípios de Ibateguara e Colônia Leopoldina, mais precisamente na  Serra do 
                        Catita no município de Ibateguara, interior de Alagoas. Leva aproximadamente 2 horas da capital Alagoana, Maceió. 
                        A cachoeira impressiona com sua grandeza e exuberância, local muito querido por visitantes. A Cachoeira do 
                        Tombador é banhada pelo rio Jacuípe e é ideal para banhos. Para chegar a cachoeira é necessário fazer uma trilha.
                    </Text>
                </View>

                <Text style={css.subtitle}> Como chegar? </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Após o município, siga a rodovia até que  vire uma estrada de barro. É necessário fazer uma trilha em mata 
                        fechada que se dá após a Ponte Mosteiro Discípulo Amado. Durante o trajeto da trilha, o terreno é um pouco 
                        complicado com muitas pedras.
                    </Text>
                </View>

                <Text style={css.subtitle}> Preços: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Não tem muitas informações sobre preços, mas o local é aberto 24 horas e pode haver o auxílio de guias para 
                        chegar até a cachoeira. Os possíveis custos serão o de transporte até o local e alguma taxa para os guias.
                    </Text>
                </View>

                <View style={css.containerButton}>
                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Mapa5')}>
                        <Text style={css.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>

                <Text style={css.subtitle}> Fotos:</Text>

            </View>
            <GridImageView data={[{ image: 'http://4.bp.blogspot.com/-4VKRNpfuck4/VeXq6UZJfLI/AAAAAAAAGFg/_7CFUwRnLp8/s1600/100_7821.JPG'}, 
                        { image: 'https://www.ferias.tur.br/imgs/23/aguabranca/g_cachoeira-do-vai-vem-18-mts.de-altura-em-agua-branca-fotoduda-rodrigues.jpg' },
                        { image: 'https://s0.wklcdn.com/image_154/4636135/32785607/21955851.jpg' }, 
                        { image: 'https://fuja.com.br/wp-content/uploads/2019/12/Screenshot_6-116.jpg' },
                        { image: 'http://2.bp.blogspot.com/-rQPgAp04IsI/VeXupnvrouI/AAAAAAAAGIY/C3nUVaqzyYE/s1600/100_7811.JPG' }]} />
        </ScrollView>

    );
    }
}
export default Cachoeira5;