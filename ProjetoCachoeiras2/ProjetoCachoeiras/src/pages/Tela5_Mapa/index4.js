import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import MapView, { Marker } from "react-native-maps";



function Mapa4({ navigation }) {
    const [region, setRegion] = useState({
        latitude: -9.254488804599315,
        longitude: -37.915344884658566,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
      });
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#B0E0E6'  }}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
                <MapView
                    style={{ width: Dimensions.get('window').width, height: '75%'}}
                    region={region}
                    onRegionChangeComplete={region => setRegion(region)}
                    >
                    <Marker coordinate={{ latitude: -9.254488804599315, longitude: -37.915344884658566 }} />
                </MapView>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Voltar para Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
    },
    roundedButton: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        top: 20,
        width: 200,
        marginTop: 13,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        
    }
})

export default Mapa4;