import React from 'react';

import {View} from 'react-native';
import styles from "../styles/ui.styles";

function Row(props) {
    return(
        <View style={[styles.row, props.style]}>
            {props.children}
        </View>
    )
}
export default Row
