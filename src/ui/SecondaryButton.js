import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';

import styles from './../styles/ui.styles'
import {colors, end, locations, start} from "./GradientConfig";
import LinearGradient from "react-native-linear-gradient";

function SecondaryButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={[styles.buttonContainer,styles.secondaryButtonContainer, props.style]}>
            <View style={styles.buttonInsideLayer}>
                <Text style={[styles.buttonText, styles.secondaryButtonFontColor]}>{props.btnText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SecondaryButton;
