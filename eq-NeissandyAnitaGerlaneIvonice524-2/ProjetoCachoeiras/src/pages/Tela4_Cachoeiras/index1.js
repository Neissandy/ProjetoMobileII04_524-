import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

import { css } from '.././Tela4_Cachoeiras/styles.js';

function Cachoeira1({ navigation }) {
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
                <Image style={css.imagem} source={require('../../assets/Imagens/imgAnel1.jpg')}/>
                
                <View style={css.ContainerTitle}>
                    <Text style={css.title}> Cachoeira do Anel</Text>   
                </View>
                
                <Text style={css.subtitle}> Informações:</Text>
                <View style={css.ContainerText}>
                <Text style={css.text}>
                    Localizada no município de Viçosa, a Cachoeira do Anel é uma cachoeira do município de Viçosa e já foi considerada
                    uma das cachoeiras do o Alagoas mais lindas provando que curtir quedas d’águas, além de praias, pode ser uma 
                    ótima opção para aqueles que querem uma mudança na rotina de férias no Alagoas. Formada pelo Rio Caçamba, 
                    situada no povoado do Anel, na Fazenda Cachoeira Grande, a cachoeira fica a 14 km da zona urbana da cidade. 
                    O lugar não conta com nenhuma infra-estrutura para turismo e fica localizado em área particular. É necessário 
                    fazer uma boa caminhada até chegar a cachoeira, o caminho é uma descida íngreme de barro escorregadio e pedras
                    dentro da mata atlântica. Com alguns obstáculos como insetos, matos, pedras, trechos escorregadios, etc.
                </Text>
                </View>

                
                <Text style={css.subtitle}> Como chegar? </Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        Para quem pretende ir por conta própria só é possível chegar de carro. Siga a estrada para Paulo Jacinto desde 
                        Viçosa. Logo depois da entrada pra Chã Preta avista-se o povoado do Anel, vire à direita na estrada de terra ao 
                        lado do ponto de ônibus e siga até o final sem desviar. Para ir ao local e ter acesso às belezas naturais, o 
                        interessado precisa agendar a visita, previamente, com o dono da propriedade. O município de Viçosa fica no Vale 
                        do Paraíba, Zona da Mata alagoana, região serrana dos quilombos, distante 86 km de Maceió. Acesso pela rodovia 
                        AL-210.
                    </Text>
                </View>

                <Text style={css.subtitle}> Preços:</Text>
                <View style={css.ContainerText}>
                    <Text style={css.text}>
                        O local é de fácil acesso e só é cobrado uma pequena taxa de R $5,00 pelo local de estacionamento. A sugestão de
                        hospedagem para conhecer a Cachoeira do Anel em Viçosa é ficar hospedado em Maceió, fazendo uma viagem de 1 hora e 
                        meia para chegar até lá. Entre os hotéis de Maceió podemos destacar o Ritz Suites Home, de categoria 4 estrelas e com diárias a 
                        partir de R $260,00.
                    </Text>
                </View>

                <View style={css.containerButton}>
                    <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Mapa1')}>
                        <Text style={css.buttonText}>Ver localização</Text>
                    </TouchableOpacity>
                </View>

                <Text style={css.subtitle}> Fotos:</Text>

                </View>
                <GridImageView data={[{ image: 'https://s02.video.glbimg.com/x720/3191729.jpg'}, 
                        { image: 'https://imgs-akamai.mnstatic.com/b1/65/b1659fdc7aa94a999e39a827661fd329.jpg?quality=75&format=pjpg&fit=bounds&width=980&height=880' }, 
                        { image: 'https://lh3.googleusercontent.com/proxy/fS4U6rLgFWZ8B9jBeP23-MV3UbohQrG5swpaEFMJCkgf443pQpCbpXrspfTfZevwiLV61lrBkeojv7m10OVXZgVlzEcf8zbdLoW-aOUm2UyrUu4ioeA0OFsJ0q0' }, 
                        { image: 'https://blogdacostadoscorais.files.wordpress.com/2019/06/cachoeira-do-anel.jpg?w=900' }]} />
            </ScrollView>

        );
    }
}

export default Cachoeira1;