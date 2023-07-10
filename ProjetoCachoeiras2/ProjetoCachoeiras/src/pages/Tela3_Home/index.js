import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { useFonts, Gotu_400Regular } from '@expo-google-fonts/gotu';
import { Galada_400Regular } from '@expo-google-fonts/galada';
import { Baloo2_500Medium } from '@expo-google-fonts/baloo-2';

function TelaHome({ navigation }) {
    let [fontsLoaded] = useFonts({
        Gotu_400Regular,
        Galada_400Regular,
        Baloo2_500Medium,
      });
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
            <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="white"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
           <ImageBackground source={require("../../assets/Imagens/img2.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
                <View style={styles.ContainerText}>
                    <View style={styles.ContainerTitle}>
                        <Text style={styles.title}> Cachoeiras de Alagoas </Text>
                    </View>
                    
                    <Text style={{ color: '#000', fontSize: 15, fontFamily: 'Baloo2_500Medium', textAlign: 'center'}}> Confira a lista de cachoeiras mais famosas do estado de Alagoas</Text>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Cachoeira do Anel')}>
                        <ImageBackground style={{ width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }}  source={require('../../assets/Imagens/imgAnel2.jpg')}>
                            <Text style={styles.buttonText}>Cachoeira do Anel</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Cachoeira do Tiririca')}>
                        <ImageBackground style={{ width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }}  source={require('../../assets/Imagens/imgTiririca4.jpg')}>
                            <Text style={styles.buttonText}>Cachoeira do Tiririca</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Cachoeira Do Vai E Vem')}>
                        <ImageBackground style={{ width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }}  source={require('../../assets/Imagens/imgVaiVem3.png')}>
                            <Text style={styles.buttonText}>Cachoeira Do Vai E Vem </Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Cachoeira do Tombador')}>
                        <ImageBackground style={{ width: Dimensions.get('window').width, height: 170, alignSelf: 'center' }}  source={require('../../assets/Imagens/imgTombador4.jpg')}>
                            <Text style={styles.buttonText}>Cachoeira do Tombador</Text>
                        </ImageBackground>
                    </TouchableOpacity>
            
                </View>
                </ImageBackground>  
            </View>         
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
    },
    absoluteView: {
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    roundedButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,


    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        padding: 10,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        fontFamily: 'Baloo2_500Medium'
    },
    ContainerText: {
        alignItems: 'center', 
        marginLeft: 11,
        marginRight: 11, 
    }, 
    title: {
        fontSize: 28,
        fontFamily: 'Galada_400Regular'
    },
    ContainerTitle: {
        marginBottom: 12,
        marginTop: 12,
    }
})

export default TelaHome;