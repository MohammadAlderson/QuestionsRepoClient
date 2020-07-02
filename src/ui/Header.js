import React from 'react';
import {Icon, Left, Right, Header} from "native-base";
import {TouchableOpacity, View, StatusBar} from "react-native";
import {BoldText, Gradient} from "./index";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "./GradientConfig";

function CustomHeader(props) {
    return (
        <>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors} style={{height: StatusBar.currentHeight}}/>
            </View>

            <Header style={{justifyContent: 'space-between'}} noShadow >
                <StatusBar translucent={true} backgroundColor="transparent"/>
                <Gradient style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: 'auto',
                    borderRadius: 0
                }}>
                    <Right style={{paddingRight: 10, alignItems: 'center'}}>
                        <BoldText style={{fontSize: 17, color: '#FFFFFE'}}>{props.title}</BoldText>
                        {props.backBtn ? (
                            <TouchableOpacity style={{width: 40, alignItems: 'center', marginLeft: 10}}
                                              onPress={() => props.navigation.goBack()}>
                                <Icon name="ios-arrow-forward" type="Ionicons" style={{color: '#FFFFFE'}}/>
                            </TouchableOpacity>
                        ) : null}
                    </Right>
                </Gradient>
            </Header>
        </>
    )
}

export default CustomHeader;
