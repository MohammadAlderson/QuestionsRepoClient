import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import {Root} from 'native-base';
import UserContextProvider from "./src/context/UserContext";
import TabStack from "./src/stacks/Tab.Stack";
import LoginContainer from "./src/screens/Login/Login.Container";
import RegisterContainer from "./src/screens/Register/Register.Container";
import SplashScreenContainer from "./src/screens/SplashScreen/SplashScreen.Container";

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
                                        <Stack.Screen name="SplashScreen" component={SplashScreenContainer}/>
                                    ) : (
                                        isLogin ? (
                                            <>
                                                <Stack.Screen name="TabStack" component={TabStack}/>
                                            </>
                                        ) : (
                                            <>
                                                <Stack.Screen name="Login" component={LoginContainer}/>
                                                <Stack.Screen name="Register" component={RegisterContainer}/>
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
