import React from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {Icon} from "native-base";
const screen = Dimensions.get("window");
function QuizAlert({ correct, visible }) {
    if (!visible) return <View  style={styles.alertContainer} />;

    const iconName = correct
        ? 'md-checkmark'
        : 'close'

    const circleStyles = [styles.circle];

    if (correct) {
        circleStyles.push(styles.circleCorrect);
    }

    return (
        <View style={styles.alertContainer}>
            <View style={circleStyles}>
                <Icon type='Ionicons' name={iconName} style={{color: '#fff'}} resizeMode="contain" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alertContainer: {width: 50, height: 50, alignItems: "center", justifyContent: "center"},
    circle: {backgroundColor: "#ff4136", width: 50, height: 50, borderRadius: screen.width / 2, alignItems: "center", justifyContent: "center"},
    circleCorrect: {backgroundColor: "#24d292"},
});

export default QuizAlert;
