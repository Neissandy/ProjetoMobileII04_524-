import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import GridImageView from 'react-native-grid-image-viewer';

import { css } from '.././Tela4_Cachoeiras/styles.js';

function Cachoeira2({ navigation }) {
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
            <Image style={css.imagem} source={require('../../assets/Imagens/imgTiririca1.jpg')}/>
                
            <View style={css.ContainerTitle}>
                <Text style={css.title}> Cachoeira da Tiririca </Text>
            </View>

                <Text style={css.subtitle}> Informações: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Localizada na Zona da Mata Alagoana, Murici é uma pequena cidade distante 51 km de Maceió. A trilha atravessa 
                        2,5 km de mata, entre pés de banana, jaca, goiaba, manga e até seriguela. O som da queda d’água atrai os 
                        visitantes que têm o privilégio de ver a beleza da cachoeira. Para ter acesso a cachoeira, é necessário fazer 
                        uma trilha até o local. A cachoeira tem uma queda de cerca de 85 metros e é um local muito favorável para os 
                        praticantes do rapel, além é claro, de sua beleza e da rica biodiversidade.
                    </Text>
                </View>

                <Text style={css.subtitle}> Como chegar? </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Seu trajeto é sentido aeroporto, indo direto até chegar à cidade de Murici, é só passar a entrada principal da 
                        rotatória, passa pelo Posto BR (que fica na esquerda), e depois segue em frente por cerca de 1 km. Após um quebra
                        mola, fique atento no seu lado direito que vai ter uma placa falando sobre cachoeira, você entra nela para pegar
                        uma estrada totalmente de barro. Segue reto. Você percorrerá um caminho um tanto longo até o primeiro portal da
                        Fazenda Boa Sorte , logo depois mais uma curta estrada de barro até o segundo portal e depois a recepção. 
                        Aberta todos os dias. A trilha reserva trechos escorregadios e estreitos. Um apoio nas árvores e cipós 
                        encontrados pelo percurso é uma boa pedida. A caminhada dura em média mais de uma hora. 
                    </Text>
                </View>

                <Text style={css.subtitle}> Preços: </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        O acesso pela fazenda tem o valor de 25 reais e mais 30 reais se quiser almoçar. Na recepção, você tem instruções 
                        cológicas sobre a fauna e flora da região. Ainda pode desfrutar do ambiente com piscinas e sala de jogos. A fazenda 
                        disponibiliza um guia para acompanhar na trilha e levar até a cachoeira.
                    </Text>
                </View>

                <View style={css.containerButton}>
                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Mapa2')}>
                        <Text style={css.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>

                <Text style={css.subtitle}> Fotos:</Text>
            </View>
            <GridImageView data={[{ image: 'https://i0.wp.com/www.maceioalagoas.com/wp-content/uploads/2018/02/16606750162_7ad3a93d41_k.jpg?fit=1024%2C719&ssl=1'}, 
                        { image: 'http://admin.alagoasboreal.com.br/uploads/alagoas_boreal/image/5b5b4a6077b5b4529a6f8414/e5ff6ab4-0d98-4531-a118-8c5f251a5bc8.jpg' },
                        { image: 'https://i0.wp.com/4.bp.blogspot.com/-9Gmt-MAQY34/Wnox1l7QYsI/AAAAAAAAIgA/nDzH5IFSZAY5mJx5f6yacvaYtjH7RMwHACLcBGAs/s640/cachoeira-da-tiririca-foto-wesley-menegari.jpg?resize=640%2C374&ssl=1' }, 
                        { image: 'https://i0.wp.com/1.bp.blogspot.com/-whFUZm9Xmx4/WnorUK9nvgI/AAAAAAAAIe8/Vl3fGWg_LdAaYbf0ub5TDYlCbHsYoSiUgCLcBGAs/s640/2.jpg?resize=640%2C480&ssl=1' }]} />
        </ScrollView>

    );
      }
}
export default Cachoeira2;