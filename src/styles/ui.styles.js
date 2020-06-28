import {StyleSheet} from 'react-native';

const mediumFont = 'IRANYekanMobileMedium'
const boldFont = 'IRANYekanMobileBold'
const lightFont = 'IRANYekanMobileLight'

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
        backgroundColor: '#FFFFFE',
        borderWidth: 1.5,
        borderColor: '#874fcc'
    },
    secondaryButtonBackgroundColor: {
        backgroundColor: '#874fcc',
        // borderWidth: 1.5,
        // borderColor: '#FFFFFE',
        elevation: 2
    },
    primaryButtonFontColor: {
        color: '#874fcc',
    },
    secondaryButtonFontColor: {
        color: '#FFFFFE',
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
