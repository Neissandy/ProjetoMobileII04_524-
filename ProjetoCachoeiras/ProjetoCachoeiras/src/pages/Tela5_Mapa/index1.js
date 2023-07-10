import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import MapView from 'react-native-maps';



function Mapa1({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MapView
                    style={{ width: Dimensions.get('window').width,
                    height: '85%'}}
                    loadingEnabled={true}
                    region={{
                    latitude: -9.3156360,
                    longitude: -36.2935358,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>
                </MapView>

            <View style={{ height: '15%'}}>
                <Button title="VOLTAR PARA HOME" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
}

export default Mapa1;