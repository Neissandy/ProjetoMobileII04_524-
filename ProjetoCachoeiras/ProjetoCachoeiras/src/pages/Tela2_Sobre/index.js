import React from 'react';
import { View, Text, Button } from 'react-native';


function TelaSobre({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Sobre o nosso projeto </Text>
            <Text>Esse Aplicativo foi desenvolvido pelos alunos do 4° ano de Informática (Turma 524) do Instituto Federal de Alagoas, Campus Palmeira dos Índios - Ifal.</Text>
            <Text>Desenvolvedores:</Text>
            <Text>⬤ Neissandy</Text>
            <Text>⬤ Gerlane</Text>
            <Text>⬤ Ivonice</Text>
            <Text>⬤ Anita</Text>
            
        </View>
    );
}

export default TelaSobre;

//<Button title="Voltar para Inicial" onPress={() => navigation.navigate('Inicial')} />