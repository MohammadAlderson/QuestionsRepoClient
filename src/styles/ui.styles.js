import {StyleSheet} from 'react-native';
import {mediumFont, boldFont, lightFont} from './fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: '#FFFFFE'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButtonBackgroundColor: {
        // backgroundColor: '#FFFFFE',
        // borderWidth: 1.5,
        // borderColor: '#874fcc'
    },
    secondaryButtonBackgroundColor: {
        backgroundColor: '#FFFFFE',
        borderWidth: 1.5,
        borderColor: '#874fcc',
    },
    primaryButtonFontColor: {
        color: '#FFFFFE',
    },
    secondaryButtonFontColor: {
        color: '#874fcc',
    },
    buttonContainer: {
        height: 50,
        width: 200,
        borderRadius: 4,
        marginVertical: 10
    },
    buttonInsideLayer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText : {
        fontFamily: mediumFont,
        color: '#fff',
        fontSize: 17
    },
    boldText: {
        fontFamily: boldFont,
        color: '#354561'
    },
    normalText: {
        fontFamily: mediumFont,
        color: '#354561'
    },
    lightText: {
        fontFamily: lightFont,
        color: '#354561'
    },
    fullyCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    profileButton: {
        borderRadius: 8, backgroundColor: '#ADCAE0', width: 100, height: 80, elevation: 2
    }
})

export default styles;
