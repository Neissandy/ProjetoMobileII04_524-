import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';



function TelaSobre( ) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
          <View style={styles.ContainerTitle}>
            <Text style={styles.title}> Sobre o nosso projeto </Text>  
          </View>

          <View style={styles.ContainerText}>
             <Text style={styles.text}>Esse Aplicativo foi desenvolvido pelos alunos do 4° ano de Informática (Turma 524) do Instituto Federal de Alagoas, Campus Palmeira dos Índios - Ifal.</Text>
          </View>
            <Text style={styles.subtitle}>Desenvolvedores:</Text>
            <Text style={styles.text}>⬤ Neissandy Silva</Text>
            <Text style={styles.text}>⬤ Gerlane Santos</Text>
            <Text style={styles.text}>⬤ Ivonice Oliveira</Text>
            <Text style={styles.text}>⬤ Anita Silva</Text>
            
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
        marginBottom: 40,
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
        
    },
    
    ContainerText: {
        alignItems: 'center', 
        marginLeft: 25,
        marginRight: 25, 
        marginTop: 15,
        marginBottom:7,
    }, 
    title: {
        fontSize: 28,
        fontFamily: 'Galada_400Regular'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Galada_400Regular'
    },
    ContainerTitle: {
        marginBottom: 12,
        marginTop: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 14, 
        fontFamily: 'Baloo2_500Medium',
        textAlign: 'center'
    }
})

export default TelaSobre;

//<Button title="Voltar para Inicial" onPress={() => navigation.navigate('Inicial')} />