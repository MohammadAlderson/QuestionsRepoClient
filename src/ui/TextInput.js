import React from 'react';
import {TextInput} from "react-native";
import {BoldText} from "./index";


function CustomTextInput(props) {
    return (
        <React.Fragment>
            {props.inputTitle && <BoldText style={{fontSize: 17, marginBottom: 8, color: '#194b9a'}}> {props.inputTitle} </BoldText>}
            <TextInput
                placeholder={props.placeholder}
                ref={props.ref}
                onChangeText={props.onChangeText}
                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium', borderWidth: 1, marginTop: 16, borderColor: '#194b9a'}}
            />
        </React.Fragment>
    )
}

export default CustomTextInput;
