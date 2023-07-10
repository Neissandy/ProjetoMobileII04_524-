import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';


function Cachoeira5({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Cachoeira do Tombador </Text>
                <Text> Informações:</Text>
                <Text> Como chegar?</Text>
                <Text> Fotos:</Text>
                <Button title="VER LOCALIZAÇÃO" onPress={() => navigation.navigate('Mapa5')} />
            </View>
        </ScrollView>

    );
}

export default Cachoeira5;