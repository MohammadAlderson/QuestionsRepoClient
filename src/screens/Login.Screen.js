import React from 'react';
import {TextInput, View} from 'react-native'
import {Body, BoldText, Container, PrimaryButton, Row, SecondaryButton} from "../ui";
import LoginIcon from './../../assets/icons/login.svg'
// import {AuthContext} from "../context/AuthContext";
import {UserContext} from "../context/UserContext";
import {AuthContext} from "../../App";
import AsyncStorage from "@react-native-community/async-storage";

function Login(props) {

    const {setLoginHandler} = React.useContext(AuthContext);
    const {setUserIdHandler} = React.useContext(UserContext);
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function loginHandler() {
        const url = 'http://192.168.43.92:4001/api/login'
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
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container>
            <Body>
                <LoginIcon width={120} height={120} />
                <BoldText style={{fontSize: 30}}>ورود</BoldText>
                <View style={{width: '100%', paddingVertical: 10, paddingHorizontal: 20, marginTop: 20}}>
                    <View style={{width: '100%', marginVertical: 10}}>
                        <BoldText>نام کاربری</BoldText>
                        <TextInput
                            onChangeText={text => setUserName(text)}
                            underlineColorAndroid="#354561"
                            style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                        />
                    </View>
                    <View style={{width: '100%', marginVertical: 10}}>
                        <BoldText>کلمه عبور</BoldText>
                        <TextInput
                            onChangeText={text => setPassword(text)}
                            underlineColorAndroid="#354561"
                            style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                        />
                    </View>
                    <Row style={{width: '100%', justifyContent: 'center'}}>
                        <PrimaryButton onPress={() => loginHandler()} btnText="ورود" />
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
