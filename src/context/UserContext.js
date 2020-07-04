import React from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext} from "../../App";
import {domain} from "../config";

export const UserContext = React.createContext();

function UserContextProvider(props) {

    const {setLoginHandler} = React.useContext(AuthContext);

    const [userId, setUserId] = React.useState()
    const [userData, setUserData] = React.useState()
    const [loading, setLoading] = React.useState(true);

    function setUserIdHandler(user_data) {
        setUserId(user_data)
        console.log(user_data)
    }

    function handleLoader(loaderStatus) {
        setLoading(loaderStatus)
    }

    async function logOutHandler() {
        await AsyncStorage.setItem('userId', '');
        await AsyncStorage.setItem('isLogin', 'false');
        setLoginHandler(false)
    }

    async function fetchUserData() {
        const url = `${domain}/api/getUserData`
        const body = JSON.stringify({
            userId: userId
        });
        console.log('userId', userId)
        try {
            let response = await fetch(url, {
                body,
                method: 'POST',
                headers: {Accept: "application/json", "Content-Type": "application/json"}
            });
            let res = await response.json();
            console.log('res', res)
            if (res.statusCode === 200) {
                setUserData(res.data)
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <UserContext.Provider
            value={{userId, setUserIdHandler, fetchUserData, loading, userData, handleLoader, logOutHandler}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
