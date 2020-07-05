import React from 'react';
import {StatusBar, TextInput, View, ActivityIndicator} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from 'react-native-splash-screen'
import LinearGradient from "react-native-linear-gradient";

import {UserContext} from "../context/UserContext";
import {AuthContext} from "../../App";

import {Body, BoldText, Container, CustomToast, PrimaryButton, Row, SecondaryButton} from "../ui";
import AuthStyles from "../styles/Auth.styles";
import styles from "../styles/ui.styles";

import LoginIcon from './../../assets/icons/login.svg'

import {colors, end, locations, start} from "../ui/GradientConfig";
import {domain} from "../config";
import ErrorToast from "../components/ErrorToast";

function Login(props) {

    const {setLoginHandler} = React.useContext(AuthContext);
    const {setUserIdHandler} = React.useContext(UserContext);
    const [loader, setLoader] = React.useState(false)
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function loginHandler() {
        const url = `${domain}/api/login`
        const body = JSON.stringify({
            userName,
            password
        })
        try {
            let response = await fetch(url, {body, method: 'POST', headers: {Accept: "application/json", "Content-Type": "application/json"}});
            let res = await response.json();
            console.log(res)
            if(res.statusCode === 200) {
                await AsyncStorage.setItem('isLogin', 'true')
                await AsyncStorage.setItem('userId', res.data.id)
                setLoginHandler(true);
                setUserIdHandler(res.data.id);
            } else if (res.statusCode === -2) {
                CustomToast('نام کاربری صحیح نمی باشد!', 3000, 'danger')
            } else if (res.statusCode === -1) {
                CustomToast('کلمه عبور صحیح نمی باشد!', 3000, 'danger')
            }
            setLoader(false)
        } catch (e) {
            ErrorToast()
            setLoader(false)
            console.log(e)
        }
    }

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors} style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body>
                <LoginIcon width={120} height={120} />
                <BoldText style={{fontSize: 30}}>ورود</BoldText>
                <View style={{width: '100%', paddingVertical: 10, paddingHorizontal: 20, marginTop: 20}}>
                    <View style={{width: '100%', marginVertical: 10}}>
                        <BoldText style={AuthStyles.textInputTitle}>نام کاربری</BoldText>
                        <TextInput
                            onChangeText={text => setUserName(text)}
                            style={AuthStyles.textInput}
                        />
                    </View>
                    <View style={{width: '100%', marginVertical: 10}}>
                        <BoldText style={AuthStyles.textInputTitle}>کلمه عبور</BoldText>
                        <TextInput
                            onChangeText={text => setPassword(text)}
                            style={AuthStyles.textInput}
                        />
                    </View>
                    <Row style={{width: '100%', justifyContent: 'center'}}>
                        {
                            loader ? (
                                <View style={[styles.buttonContainer, styles.primaryButtonBackgroundColor]}>
                                    <ActivityIndicator color="#fff" />
                                </View>
                            ) : (
                                <PrimaryButton onPress={() => {
                                    setLoader(true);
                                    loginHandler()
                                }} btnText="ورود" />
                            )
                        }
                    </Row>
                    <Row style={{width: '100%', justifyContent: 'center'}}>
                        <SecondaryButton onPress={() => props.navigation.navigate('Register')} btnText="عضویت" />
                    </Row>
                </View>
            </Body>
        </Container>
    )
}

export default Login;
