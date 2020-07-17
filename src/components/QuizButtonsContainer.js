import React from 'react';
import {View, StyleSheet} from "react-native";

function QuizButtonsContainer({children}) {
    return (
        <View style={styles.btnContainer}>{children}</View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {flexDirection: "row", flexWrap: "wrap", marginTop: 20, justifyContent: "space-between", width: '100%'}
})

export default QuizButtonsContainer;
