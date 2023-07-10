import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';


function TelaInicial({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require("../../assets/Imagens/img.jpg")} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
                <Text style={{ color: '#000', fontSize: 19}}> Bem-vindo ao AppCachoeiras!' </Text>
                <Text style={{ color: '#000', fontSize: 19}}> Descubra as incríveis cachoeiras do estado de Alagoas em um só lugar. Você poderá planejar sua visita turistica
                    a partir das nossas recomendações. Confira a localização, preços e muito mais!
                </Text>
                <Text style={{ color: '#000', fontSize: 19}}>Click em 'Vamos Começar!' para iniciar. Para saber mais informações do nosso Aplicativo, como os desenvolvedores, click em 'Sobre o app'</Text>
                <Button title=" VAMOS COMEÇAR! " onPress={() => navigation.navigate('Home')} />
                <Button title=" SOBRE O APP " onPress={() => navigation.navigate('Sobre')} />
            </ImageBackground>
        </View>
    );
}

export default TelaInicial;

