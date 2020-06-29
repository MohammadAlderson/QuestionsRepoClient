import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./src/screens/Home.Screen";
import CategoriesList from "./src/screens/CategoriesList.Screen";
import Profile from "./src/screens/Profile.Screen";
import AddQuestion from "./src/screens/AddQuestion.Screen";
import Login from "./src/screens/Login.Screen";
import Register from "./src/screens/Register.Screen";
import {Root} from 'native-base';
import UserContextProvider from "./src/context/UserContext";
import SplashScreen from "./src/screens/SplashScreen.Screen";
import EditProfile from "./src/screens/EditProfile.Screen";
import {Icon} from 'native-base'
import UserQuestions from "./src/screens/UserQuestions";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
export const LoadingContext = React.createContext();
export const AuthContext = React.createContext();
const HomeStack = createStackNavigator();
const AddQuestionStack = createStackNavigator();
const ProfileStack = createStackNavigator();
console.disableYellowBox = true;

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{
                headerShown: false
            }}/>
            <HomeStack.Screen name="CategoriesList" component={CategoriesList} options={{
                headerShown: false
            }}/>
        </HomeStack.Navigator>
    );
}

function AddQuestionStackScreen() {
    return (
        <AddQuestionStack.Navigator>
            <AddQuestionStack.Screen name="AddQuestion" component={AddQuestion} options={{
                headerShown: false
            }}/>
        </AddQuestionStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} options={{
                headerShown: false
            }}/>
            <ProfileStack.Screen name="EditProfile" component={EditProfile} options={{
                headerShown: false
            }}/>
            <ProfileStack.Screen name="UserQuestions" component={UserQuestions} options={{
                headerShown: false
            }}/>
        </ProfileStack.Navigator>
    );
}

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


function App() {

    const [loading, setLoading] = React.useState(true);
    const [isLogin, setIsLogin] = React.useState(false);

    function setLoadingHandler(loadingState) {
        setLoading(loadingState);
    }

    function setLoginHandler(loginState) {
        setIsLogin(loginState)
    }

    return (
        <AuthContext.Provider value={{isLogin, setLoginHandler}}>
            <UserContextProvider>
                <LoadingContext.Provider value={{loading, setLoadingHandler}}>
                    <NavigationContainer>
                        <Root>
                            <Stack.Navigator headerMode="none">
                                {
                                    loading ? (
                                        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                                    ) : (
                                        isLogin ? (
                                            <>
                                                <Stack.Screen name="TabStack" component={TabStack}/>
                                            </>
                                        ) : (
                                            <>
                                                <Stack.Screen name="Login" component={Login}/>
                                                <Stack.Screen name="Register" component={Register}/>
                                            </>
                                        )
                                    )
                                }
                            </Stack.Navigator>
                        </Root>
                    </NavigationContainer>
                </LoadingContext.Provider>
            </UserContextProvider>
        </AuthContext.Provider>
    )
}

export default App
