import {StyleSheet, Dimensions} from "react-native";

const css =  StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#DCDCDC'
    },
    mapa: {
        width: Dimensions.get('window').width, 
        height: '75%'
    },
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
    },
})
export { css };