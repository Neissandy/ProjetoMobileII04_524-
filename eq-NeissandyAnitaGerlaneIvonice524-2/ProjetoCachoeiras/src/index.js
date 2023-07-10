import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import TelaInicial from '../src/pages/Tela1_Inicial/index';
import TelaSobre from '../src/pages/Tela2_Sobre/index';
import TelaHome from '../src/pages/Tela3_Home/index';
import Cachoeira1 from '../src/pages/Tela4_Cachoeiras/index1';
import Cachoeira2 from '../src/pages/Tela4_Cachoeiras/index2';
import Cachoeira4 from '../src/pages/Tela4_Cachoeiras/index4';
import Cachoeira5 from '../src/pages/Tela4_Cachoeiras/index5';

import Mapa1 from '../src/pages/Tela5_Mapa/index1';
import Mapa2 from '../src/pages/Tela5_Mapa/index2';
import Mapa4 from '../src/pages/Tela5_Mapa/index4';
import Mapa5 from '../src/pages/Tela5_Mapa/index5';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={TelaInicial} />
        <Stack.Screen name="Sobre" component={TelaSobre} />
        <Stack.Screen name="Home" component={TelaHome} />

        <Stack.Screen name="Cachoeira do Anel" component={Cachoeira1} />
        <Stack.Screen name="Cachoeira do Tiririca" component={Cachoeira2} />
        <Stack.Screen name="Cachoeira Do Vai E Vem" component={Cachoeira4} />
        <Stack.Screen name="Cachoeira do Tombador" component={Cachoeira5} />

        <Stack.Screen name="Mapa1" component={Mapa1} />
        <Stack.Screen name="Mapa2" component={Mapa2} />
        <Stack.Screen name="Mapa4" component={Mapa4} />
        <Stack.Screen name="Mapa5" component={Mapa5} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

