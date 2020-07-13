import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./src/screens/Login.Screen";
import Register from "./src/screens/Register.Screen";
import {Root} from 'native-base';
import UserContextProvider from "./src/context/UserContext";
import SplashScreen from "./src/screens/SplashScreen.Screen";
import TabStack from "./src/stacks/Tab.Stack";

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
