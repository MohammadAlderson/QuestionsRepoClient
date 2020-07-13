import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import AddQuestionContainer from "../screens/AddQuestion/AddQuestion.Container";

const AddQuestionStack = createStackNavigator();

function AddQuestionStackScreen() {
    return (
        <AddQuestionStack.Navigator>
            <AddQuestionStack.Screen name="AddQuestion" component={AddQuestionContainer} options={{
                headerShown: false
            }}/>
        </AddQuestionStack.Navigator>
    );
}
export default AddQuestionStackScreen;
