import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {colors, end, locations, start} from "./GradientConfig";
import {StyleSheet} from "react-native";

function Gradient(props) {
    return (
        <LinearGradient locations={locations} start={start} end={end} colors={colors}
                        style={[GradientStyles.container, props.style]}>
            {props.children}
        </LinearGradient>
    )
}

const GradientStyles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Gradient;
