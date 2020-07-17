import React from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from 'react-native-splash-screen'

import {UserContext} from "../../context/UserContext";
import {AuthContext} from "../../../App";

import {CustomToast} from "../../ui";

import {domain} from "../../config";
import ErrorToast from "../../components/ErrorToast";
import LoginView from "./Login.View";

function LoginContainer(props) {

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
        <LoginView
            loader={loader}
            setUserName={setUserName}
            setPassword={setPassword}
            setLoader={setLoader}
            loginHandler={loginHandler}
            navigation={props.navigation}
        />
    )
}

export default LoginContainer;
