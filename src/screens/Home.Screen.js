import React from 'react';
import Logo from './../../assets/icons/logo.svg'
import {Container, Body, PrimaryButton, SecondaryButton} from './../ui/index'
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext} from "../../App";

function Home(props) {

    const {setLoginHandler} = React.useContext(AuthContext);

    function navigator(destination) {
        return props.navigation.navigate(destination)
    }

    async function logOutHandler() {
        await AsyncStorage.setItem('userId', '');
        await AsyncStorage.setItem('isLogin', 'false');
        setLoginHandler(false)
    }

    return(
        <Container>
            <Body>
                <Logo width={100} height={100} style={{marginBottom: 60}} />
                <PrimaryButton btnText="ایجاد سوال" onPress={() => navigator('AddQuestion')} />
                <PrimaryButton btnText="دسته بندی ها" onPress={() => navigator('CategoriesList')} />
                <PrimaryButton btnText="پروفایل من" onPress={() => navigator('Profile')} />
                <SecondaryButton btnText="خروج" onPress={() => logOutHandler()} />
            </Body>
        </Container>
    )
}

export default Home;
