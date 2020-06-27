import React from 'react';
import {TextInput, View} from 'react-native'
import {Body, BoldText, Container, CustomToast, PrimaryButton, Row} from "../ui";
import RegisterIcon from './../../assets/icons/register.svg'
import {AuthContext} from "../../App";
import {UserContext} from "../context/UserContext";
import AsyncStorage from "@react-native-community/async-storage";

function Register(props) {

    const {setLoginHandler} = React.useContext(AuthContext);
    const {setUserDataHandler} = React.useContext(UserContext);

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')

    async function registerHandler() {
        if(password === repeatPassword) {
            const url = 'http://192.168.43.92:4001/api/register'
            const body = JSON.stringify({
                userName,
                password
            })
            try {
                let response = await fetch(url, {body, method: 'POST', headers: {Accept: "application/json", "Content-Type": "application/json"}});
                let res = await response.json();
                if (res.statusCode === '-3') {
                    CustomToast('این نام کاربری قبلا ثبت شده است!', 4000, "danger")
                    return;
                }
                console.log(res)
                if(res.statusCode === 200) {
                    setLoginHandler(true);
                    setUserDataHandler(res.data.id);
                    await AsyncStorage.setItem('isLogin', 'true')
                    await AsyncStorage.setItem('userId', res.data.id)
                }
            } catch (e) {
                console.log(e.message)
            }
        } else {
            CustomToast('کلمه عبور همخوانی ندارد!', 4000, "danger")
        }
    }

    return (
        <Container>
            <Body>
                <RegisterIcon width={120} height={120} />
                <BoldText style={{fontSize: 30}}>عضویت</BoldText>
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
                        <View style={{width: '100%', marginVertical: 10}}>
                            <BoldText>تکرار کلمه عبور</BoldText>
                            <TextInput
                                onChangeText={text => setRepeatPassword(text)}
                                underlineColorAndroid="#354561"
                                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                            />
                        </View>
                    </View>
                    <Row style={{width: '100%', justifyContent: 'center'}}>
                        <PrimaryButton onPress={() => registerHandler()} btnText="عضویت" />
                    </Row>
                </View>
            </Body>
        </Container>
    )
}

export default Register;
