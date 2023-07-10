import {StyleSheet} from "react-native";

const css =  StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    imageBackgroundTela: {
        flex: 1, 
        resizeMode: "cover", 
        justifyContent: "center" 
    },
    containerButton: {
        alignItems: 'center',
    },
    roundedButton: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: 200,
        marginTop: 13,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2} ,
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
        marginTop: 11,
       
    }, 
    imagem: {
        width: 310, 
        height: 170, 
        alignSelf: 'center',
         borderRadius: 30, 
         borderColor: 'white', 
         borderWidth: 2
    },
    title: {
        fontSize: 28,
        fontFamily: 'Galada_400Regular',
        color: '#000',
        textAlign: 'center'
    },
    ContainerTitle: {
        marginBottom: 12,
        alignItems: 'center',
    },
    text: {
        color: '#000', 
        fontSize: 14, 
        textAlign: 'center', 
        fontFamily: 'Baloo2_500Medium' 
    },
})


export { css };