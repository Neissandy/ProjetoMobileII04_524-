import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';


function TelaHome({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>

                <Text> Confira a lista de cachoeiras mais famosas do estado de Alagoas</Text>
                <Button title="Cachoeira do Anel" onPress={() => navigation.navigate('Cachoeira1')} />
                <Button title="Cachoeira do Tiririca" onPress={() => navigation.navigate('Cachoeira2')} />
                <Button title="Cachoeira da Geladeira" onPress={() => navigation.navigate('Cachoeira3')} />
                <Button title="Cachoeira Do Vai E Vem" onPress={() => navigation.navigate('Cachoeira4')} />
                <Button title="Cachoeira do Tombador" onPress={() => navigation.navigate('Cachoeira5')} />

            </View>            
        </ScrollView>
    );
}

export default TelaHome;