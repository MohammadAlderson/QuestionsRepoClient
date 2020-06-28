import React from 'react';

import {View} from 'react-native';

import styles from "../styles/ui.styles";

function Body(props) {
    return (
        <View style={[styles.body, props.style]}>
            {props.children}
        </View>
    )
}

export default Body;
