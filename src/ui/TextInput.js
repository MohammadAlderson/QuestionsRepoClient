import React from 'react';
import {TextInput, StyleSheet, View} from "react-native";
import {BoldText, Gradient} from "./index";


function CustomTextInput(props) {
    return (
        <View style={TextInputStyles.container}>
            {props.inputTitle &&
            <BoldText style={[TextInputStyles.title, props.titleStyle]}> {props.inputTitle} </BoldText>}
            <Gradient style={[TextInputStyles.gradient, props.gradientStyle]}>
                <TextInput
                    placeholder={props.placeholder}
                    ref={props.inputRef}
                    onChangeText={props.onChangeText}
                    style={[TextInputStyles.input, props.inputStyle]}
                />
            </Gradient>
        </View>
    )
}

const TextInputStyles = StyleSheet.create({
    container: {marginVertical: 10, width: '100%'},
    title: {fontSize: 17, marginBottom: 8, color: '#194b9a', alignSelf: 'flex-end'},
    gradient: {height: 55, justifyContent: 'center', alignItems: 'center', borderRadius: 4},
    input : {
        width: '99.2%',
        height: '95%',
        fontFamily: 'IRANYekanMobileMedium',
        borderRadius: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 5
    }
})

export default CustomTextInput;
