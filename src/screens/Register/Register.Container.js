import React from 'react';
import {CustomToast} from "../../ui";
import {AuthContext} from "../../../App";
import {UserContext} from "../../context/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import {domain} from "../../config";
import ErrorToast from "../../components/ErrorToast";
import RegisterView from "./Register.View";

function RegisterContainer(props) {

    const {setLoginHandler} = React.useContext(AuthContext);
    const {setUserIdHandler} = React.useContext(UserContext);

    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')

    async function registerHandler() {
        if (userName.trim() === '') {
            CustomToast('لطفا نام کاربری را وارد کنید!', 3000, "danger")
            return;
        }
        if (password.trim() === '') {
            CustomToast('لطفا کلمه عبور را وارد کنید!', 3000, "danger")
            return;
        }
        if (repeatPassword.trim() === '') {
            CustomToast('لطفا تکرار کلمه عبور را وارد کنید!', 3000, "danger")
            return;
        }
        if (password === repeatPassword) {
            const url = `${domain}/api/register`
            const body = JSON.stringify({
                userName,
                password
            })
            try {
                let response = await fetch(url, {
                    body,
                    method: 'POST',
                    headers: {Accept: "application/json", "Content-Type": "application/json"}
                });
                let res = await response.json();
                if (res.statusCode === '-3') {
                    CustomToast('این نام کاربری قبلا ثبت شده است!', 4000, "danger")
                    return;
                }
                console.log(res)
                if (res.statusCode === 200) {
                    setLoginHandler(true);
                    setUserIdHandler(res.data.id);
                    await AsyncStorage.setItem('isLogin', 'true')
                    await AsyncStorage.setItem('userId', res.data.id)
                }
            } catch (e) {
                console.log(e.message);
                ErrorToast()
            }
        } else {
            CustomToast('کلمه عبور همخوانی ندارد!', 4000, "danger")
        }
    }

    return (
        <RegisterView
            setUserName={setUserName}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
            registerHandler={registerHandler}
        />
    )
}

export default RegisterContainer;
