import React from 'react';
import {Icon, Left, Right, Header} from "native-base";
import {TouchableOpacity} from "react-native";
import {BoldText} from "./index";
import LinearGradient from "react-native-linear-gradient";

function CustomHeader(props) {
    return (
        <Header style={{justifyContent: 'space-between'}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#194b9a', '#4b6cb7']}
                            style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, flexDirection: 'row'}}>

                <Right style={{paddingRight: 10, alignItems: 'center'}}>
                    <BoldText style={{fontSize: 17, color: '#FFFFFE'}}>{props.title}</BoldText>
                    {props.backBtn ? (
                            <TouchableOpacity style={{width: 40, alignItems: 'center', marginLeft: 10}}
                                              onPress={() => props.navigation.goBack()}>
                                <Icon name="ios-arrow-forward" type="Ionicons" style={{color: '#FFFFFE'}}/>
                            </TouchableOpacity>
                    ) : null}

                </Right>
            </LinearGradient>
        </Header>
    )
}

export default CustomHeader;
