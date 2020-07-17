import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import BeforeQuizContainer from "../screens/BeforeQuiz/BeforeQuiz.Container";
import AfterQuizContainer from "../screens/AfterQuiz/AfterQuiz.Container";
import CategoriesListContainer from "../screens/CategoriesList/CategoriesList.Container";
import HomeContainer from "../screens/Home/Home.Container";
import QuizContainer from "../screens/Quiz/Quiz.Container";

const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeContainer} options={{
                headerShown: false
            }}/>
            <HomeStack.Screen name="CategoriesList" component={CategoriesListContainer} options={{
                headerShown: false
            }}/>
            <HomeStack.Screen name="BeforeQuiz" component={BeforeQuizContainer} options={{
                headerShown: false
            }}/>
            <HomeStack.Screen name="Quiz" component={QuizContainer} options={{
                headerShown: false
            }}/>
            <HomeStack.Screen name="AfterQuiz" component={AfterQuizContainer} options={{
                headerShown: false
            }}/>

        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
