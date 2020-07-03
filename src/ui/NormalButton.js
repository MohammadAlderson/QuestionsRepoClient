import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import styles from "../styles/ui.styles";
import { NormalText} from "./index";


function NormalButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={[styles.buttonContainer, styles.normalButton, props.style]}>
                <NormalText style={[{color: '#874fcc'}, props.textStyle]}>{props.btnText}</NormalText>
        </TouchableOpacity>
    )
}

export default NormalButton;
