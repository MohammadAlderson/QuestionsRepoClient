import React from 'react';

import {Text} from 'react-native';

import styles from "../styles/ui.styles";

function BoldText(props) {
    return(
        <Text style={[styles.boldText, props.style]}>
            {props.children}
        </Text>
    )
}

function NormalText(props) {
    return(
        <Text style={[styles.normalText, props.style]}>
            {props.children}
        </Text>
    )
}

function LightText(props) {
    return(
        <Text style={[styles.lightText, props.style]}>
            {props.children}
        </Text>
    )
}

export {BoldText, NormalText, LightText}
