import {StyleSheet} from 'react-native';

const mediumFont = 'IRANYekanMobileMedium'
const boldFont = 'IRANYekanMobileBold'
const lightFont = 'IRANYekanMobileLight'

const styles = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: '#EEEFF9'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryButtonBackgroundColor: {
        backgroundColor: '#354561',
    },
    secondaryButtonBackgroundColor: {
        backgroundColor: '#ADCAE0',
    },
    primaryButtonFontColor: {
        color: '#ADCAE0',
    },
    secondaryButtonFontColor: {
        color: '#354561',
    },
    buttonContainer: {
        backgroundColor: '#354561',
        height: 50,
        width: 160,
        borderRadius: 50,
        elevation: 2,
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
