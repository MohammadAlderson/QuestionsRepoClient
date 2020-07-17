import {StyleSheet} from 'react-native';
import {mediumFont, boldFont, lightFont} from './fonts'

const AuthStyles = StyleSheet.create({
    textInputTitle: {fontSize: 15, color: '#4b6cb7', marginBottom: 10},
    textInput: {
        width: '100%', fontFamily: 'IRANYekanMobileMedium', borderWidth: 1,
        borderColor: '#194b9a', paddingHorizontal: 8, fontSize: 16, borderRadius: 4
    },
    pageTitle: {fontSize: 30},
    formContainer: {width: '100%', paddingVertical: 10, paddingHorizontal: 20, marginTop: 20},
    formRow: {width: '100%', marginVertical: 10},
    buttonRow: {width: '100%', justifyContent: 'center'},
})

export default AuthStyles
