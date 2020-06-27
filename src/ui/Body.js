import React from 'react';

import {View} from 'react-native';

import styles from "../styles/ui.styles";

function Body(props) {
    return (
        <View style={[props.style, styles.body]}>
            {props.children}
        </View>
    )
}

export default Body;
