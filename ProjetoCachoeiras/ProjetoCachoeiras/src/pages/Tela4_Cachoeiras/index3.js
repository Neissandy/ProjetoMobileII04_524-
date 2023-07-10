import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';


function Cachoeira3({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Cachoeira da Geladeira </Text>
                <Text> Informações:</Text>
                <Text> Como chegar?</Text>
                <Text> Fotos:</Text>
                <Button title="VER LOCALIZAÇÃO" onPress={() => navigation.navigate('Mapa3')} />
            </View>
        </ScrollView>

    );
}

export default Cachoeira3;