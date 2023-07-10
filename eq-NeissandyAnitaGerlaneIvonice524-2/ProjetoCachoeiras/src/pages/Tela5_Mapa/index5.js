import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, } from 'react-native';
import MapView, { Marker } from "react-native-maps";

import { css } from '.././Tela5_Mapa/styles.js';

function Mapa5({ navigation }) {
    const [region, setRegion] = useState({
        latitude: -8.9503197,
        longitude: -35.8174313,
        latitudeDelta: 0.05,
        longitudeDelta: 0.06
      });
    return (
        <View style={css.container}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
                <MapView
                    style={css.mapa}
                    region={region}
                    onRegionChangeComplete={region => setRegion(region)}
                    >
                    <Marker coordinate={{ latitude: -8.9503197, longitude: -35.8174313 }} />
                </MapView>

            <View style={css.containerButton}>
                <TouchableOpacity style={css.roundedButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={css.buttonText}>Voltar para Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Mapa5;