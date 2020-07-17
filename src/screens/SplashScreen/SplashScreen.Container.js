import React from 'react';
import {AuthContext, LoadingContext} from "../../../App";
import {UserContext} from "../../context/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreenView from "./SplashScreen.View";

function SplashScreenContainer(props) {

    const {setLoginHandler} = React.useContext(AuthContext)
    const {setLoadingHandler} = React.useContext(LoadingContext)
    const {setUserIdHandler} = React.useContext(UserContext);
    async function checkLoginState() {
        let loginState = await AsyncStorage.getItem('isLogin');
        if(loginState === 'true') {
            let userId = await AsyncStorage.getItem('userId')
            setUserIdHandler(userId)
            setLoginHandler(true);
            setLoadingHandler(false);
        } else {
            setLoginHandler(false);
            setLoadingHandler(false);
        }

    }

    React.useEffect(() => {
        checkLoginState();
    }, [])

    return (
        <SplashScreenView />
    )
}

export default SplashScreenContainer;
