import React from 'react';
import {Icon} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeStackScreen from "./Home.Stack";
import ProfileStackScreen from "./Profile.Stack";
import AddQuestionStackScreen from "./AddQuestion.Stack";

const Tab = createBottomTabNavigator();
function TabStack() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTabScene"
            barStyle={{backgroundColor: '#ece8e8', fontFamily: 'IRANYekanMobileMedium'}}
            tabBarOptions={{
                labelStyle: {fontFamily: 'IRANYekanMobileMedium', fontSize: 14}
            }}>
            <Tab.Screen name="ProfileTabScene" component={ProfileStackScreen} options={{
                title: 'پروفایل', tabBarIcon: ({color, size}) => (
                    <Icon name="user" type="AntDesign" style={{fontSize: size, color}}/>
                )
            }}/>
            <Tab.Screen name="AddQuestionTabScene" component={AddQuestionStackScreen} options={{
                title: 'ایجاد سوال', tabBarIcon: ({color, size}) => (
                    <Icon name="pluscircleo" type="AntDesign" style={{fontSize: size, color}}/>
                )
            }}/>
            <Tab.Screen name="HomeTabScene" component={HomeStackScreen} options={{
                title: 'خانه', tabBarIcon: ({color, size}) => (
                    <Icon name="home" type="AntDesign" style={{fontSize: size, color}}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default TabStack;
