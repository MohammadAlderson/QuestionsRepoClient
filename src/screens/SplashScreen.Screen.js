import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native'
import {Body, Container, Gradient, NormalText} from "../ui";
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext, LoadingContext} from "../../App";
import {UserContext} from "../context/UserContext";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "../ui/GradientConfig";

function SplashScreen(props) {

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
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors} style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body>
                <ActivityIndicator size="large" />
            </Body>
        </Container>
    )
}

export default SplashScreen;
