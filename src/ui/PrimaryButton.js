import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './../styles/ui.styles'
import {Gradient} from "./index";

function PrimaryButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={[styles.buttonContainer, styles.primaryButtonBackgroundColor, props.style]}>
                <Text style={[styles.buttonText, styles.primaryButtonFontColor, props.textStyle, {color: '#fff'}]}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton;
