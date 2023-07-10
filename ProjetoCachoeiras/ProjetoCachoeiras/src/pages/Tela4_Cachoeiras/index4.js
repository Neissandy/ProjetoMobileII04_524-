import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';


function Cachoeira4({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Cachoeira Do Vai E Vem </Text>
                <Text> Informações:</Text>
                <Text> Como chegar?</Text>
                <Text> Fotos:</Text>
                <Button title="VER LOCALIZAÇÃO" onPress={() => navigation.navigate('Mapa4')} /> 
            </View>
        </ScrollView>

    );
}

export default Cachoeira4;