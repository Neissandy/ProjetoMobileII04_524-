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
        text: {
            color: '#000', 
            fontSize: 15, 
            fontFamily: 'Baloo2_500Medium', 
            textAlign: 'center'
        },
        imageBackground: {
            width: Dimensions.get('window').width, 
            height: 170, 
            alignSelf: 'center'
        },
        imageBackgroundTela: {
            flex: 1, 
            resizeMode: "cover", 
            justifyContent: "center"
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
export { css };