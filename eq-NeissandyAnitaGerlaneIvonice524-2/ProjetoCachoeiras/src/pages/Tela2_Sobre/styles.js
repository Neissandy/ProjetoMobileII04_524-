import {StyleSheet, ImageBackground} from "react-native";

const css =  StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DCDCDC'
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
    },

})
export { css };