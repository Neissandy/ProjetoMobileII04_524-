import {StyleSheet, Dimensions} from "react-native";

const css =  StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DCDCDC'
    },
    containerButton: {
        alignItems: 'center',
    },
    imagem: {
        width: Dimensions.get('window').width, 
        height: 170, 
        alignSelf: 'center'
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
    },
    gridImage:{
        height: 300,
        width: 300,
        marginBottom: 15,
        marginTop: 5,
    }
})
export { css };