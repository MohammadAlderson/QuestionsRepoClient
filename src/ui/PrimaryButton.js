import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';

import styles from './../styles/ui.styles'
import LinearGradient from "react-native-linear-gradient";

function PrimaryButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={[styles.buttonContainer, styles.primaryButtonBackgroundColor, props.style]}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#194b9a', '#4b6cb7']} style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[styles.buttonText, styles.primaryButtonFontColor, props.textStyle, {color: '#fff'}]}>{props.btnText}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PrimaryButton;
