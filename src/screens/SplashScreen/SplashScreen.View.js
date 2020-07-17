import React from 'react';
import {Body, Container} from "../../ui";
import {ActivityIndicator, StatusBar, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "../../ui/GradientConfig";

function SplashScreenView(props) {
    return (
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors} style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body>
                <ActivityIndicator size="large" />
            </Body>
        </Container>
    )
}

export default SplashScreenView;
