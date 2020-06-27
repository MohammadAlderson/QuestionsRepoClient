import React from 'react';
import {ActivityIndicator} from 'react-native'
import {Body, Container, NormalText} from "../ui";
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext, LoadingContext} from "../../App";
import {UserContext} from "../context/UserContext";

function SplashScreen(props) {

    const {setLoginHandler} = React.useContext(AuthContext)
    const {setLoadingHandler} = React.useContext(LoadingContext)
    const {setUserDataHandler} = React.useContext(UserContext);
    async function checkLoginState() {
        let loginState = await AsyncStorage.getItem('isLogin');
        if(loginState === 'true') {
            let userId = await AsyncStorage.getItem('userId')
            setUserDataHandler(userId)
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
        <Container>
            <Body>
                <ActivityIndicator size="large" />
            </Body>
        </Container>
    )
}

export default SplashScreen;
