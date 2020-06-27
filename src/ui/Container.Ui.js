import React from 'react';

import {View} from 'react-native';

import styles from './../styles/ui.styles'

function Container(props) {
    return(
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

export default Container;
