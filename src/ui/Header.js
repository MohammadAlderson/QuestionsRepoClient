import React from 'react';
import {Icon, Left, Right, Header} from "native-base";
import {TouchableOpacity} from "react-native";
import {BoldText} from "./index";

function CustomHeader(props) {
    return (
        <Header style={{justifyContent: 'space-between', backgroundColor: '#874fcc'}}>
            {props.backBtn ? (
                <Left>
                    <TouchableOpacity style={{width: 40, alignItems: 'center'}} onPress={() => props.navigation.goBack()}>
                        <Icon name="ios-arrow-back" type="Ionicons" style={{color: '#FFFFFE'}} />
                    </TouchableOpacity>
                </Left>
            ) : null}
            <Right style={{paddingRight: 20}}>
                <BoldText style={{fontSize: 17, color: '#FFFFFE'}}>{props.title}</BoldText>
            </Right>
        </Header>
    )
}

export default CustomHeader;
