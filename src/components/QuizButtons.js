import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

function QuizButtons(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.quizBtn}>
            <Text style={styles.quizBtnCaption}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    quizBtn: {
        borderRadius: 4, height: 75, elevation: 3, marginHorizontal: '2%', alignItems: "center", justifyContent: "center",
        backgroundColor: '#d558c8', marginVertical: 10, width: "46%",
    },
    quizBtnCaption: {fontFamily: 'IRANYekanMobileBold', fontSize: 18, color: '#FFFFFE', marginTop: 10}
})

export default QuizButtons;
