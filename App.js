import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/screens/Home.Screen";
import CategoriesList from "./src/screens/CategoriesList.Screen";
import Profile from "./src/screens/Profile.Screen";
import AddQuestion from "./src/screens/AddQuestion.Screen";
import Login from "./src/screens/Login.Screen";
import Register from "./src/screens/Register.Screen";
import {Root} from 'native-base';
// import AuthContextProvider from "./src/context/AuthContext";
import UserContextProvider from "./src/context/UserContext";
import SplashScreen from "./src/screens/SplashScreen.Screen";
import EditProfile from "./src/screens/EditProfile.Screen";

const Stack = createStackNavigator();
export const LoadingContext = React.createContext();
export const AuthContext = React.createContext();

console.disableYellowBox = true;

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
                                                <Stack.Screen name="Home" component={Home} options={{
                                                    headerShown: false
                                                }}/>
                                                <Stack.Screen name="AddQuestion" component={AddQuestion}/>
                                                <Stack.Screen name="CategoriesList" component={CategoriesList}/>
                                                <Stack.Screen name="Profile" component={Profile} options={{
                                                    headerShown: false
                                                }}/>
                                                <Stack.Screen name="EditProfile" component={EditProfile} options={{
                                                    headerShown: false
                                                }}/>
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
