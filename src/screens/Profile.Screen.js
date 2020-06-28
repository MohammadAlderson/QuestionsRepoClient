import React from 'react';
import {View, ActivityIndicator, ScrollView, Modal} from 'react-native';
import User from './../../assets/icons/user.svg'
import {
    Row, BoldText, NormalText, Container,
    CustomHeader, LightText, SecondaryButton, PrimaryButton
} from "../ui/index";
import {UserContext} from "../context/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext} from "../../App";

function Profile(props) {

    const {setLoginHandler} = React.useContext(AuthContext);

    const {userId} = React.useContext(UserContext);
    const [userData, setUserData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const [logoutModalState, setLogoutModalState] = React.useState(false);

    const refreshData = async () => {
        setLoading(true)
        await getUserData();
    }

    async function getUserData() {
        const url = 'http://192.168.43.92:4001/api/getUserData'
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

    React.useEffect(() => {
        getUserData();
    }, [])

    async function logOutHandler() {
        await AsyncStorage.setItem('userId', '');
        await AsyncStorage.setItem('isLogin', 'false');
        setLoginHandler(false)
    }


    return (
        <Container>
            <CustomHeader title="پروفایل" navigation={props.navigation}/>
            <Modal
                animationType="fade"
                visible={logoutModalState}
                transparent={true}
                onRequestClose={() => setLogoutModalState(false)}
            >
                <View style={{flex: 1, backgroundColor: '#0000008a', justifyContent: 'center'}}>
                    <View style={{
                        paddingVertical: 20,
                        margin: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        height: 200
                    }}>
                        <BoldText style={{fontSize: 20, lineHeight: 35, marginRight: 20}}>آیا می خواهید از حساب کاربری
                            خود خارج شوید؟</BoldText>
                        <Row style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            marginTop: 10
                        }}>
                            <SecondaryButton style={{flex: 0.5, marginHorizontal: 3}} onPress={() => {
                                setLogoutModalState(false)
                                logOutHandler()
                            }}
                                             btnText="بله"/>
                            <PrimaryButton style={{flex: 0.5, marginHorizontal: 3}} onPress={() => {
                                setLogoutModalState(false)
                            }} btnText="خیر"/>
                        </Row>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                {
                    loading ? (
                        <View style={{
                            backgroundColor: '#874fcc',
                            height: 220,
                            width: '100%',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <ActivityIndicator size="large" color="#FFFFFE"/>
                        </View>
                    ) : (
                        <>
                            <View style={{
                                backgroundColor: '#874fcc',
                                height: 220,
                                width: '100%',
                                alignItems: 'center',
                                marginBottom: 10
                            }}>
                                <User width={90} height={90} style={{marginTop: 30}}/>
                                <View style={{marginVertical: 8, alignItems: 'center'}}>
                                    <BoldText style={{fontSize: 24, color: '#FFFFFE'}}>{userData.displayName}</BoldText>
                                    <LightText style={{fontSize: 20, color: '#FFFFFE'}}>@{userData.userName}</LightText>
                                </View>
                            </View>
                            <View style={{width: '100%'}}>
                                <Row style={{
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    paddingHorizontal: 40
                                }}>
                                    <NormalText style={{fontSize: 20}}>{userData.ansCount}</NormalText>
                                    <BoldText style={{fontSize: 20}}>جواب ها</BoldText>
                                </Row>
                                <Row style={{
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    paddingHorizontal: 40
                                }}>
                                    <NormalText style={{fontSize: 20}}>{userData.questionCount}</NormalText>
                                    <BoldText style={{fontSize: 20}}>سوالات</BoldText>
                                </Row>
                            </View>
                            <View
                                style={{marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <SecondaryButton
                                    onPress={() => props.navigation.navigate('EditProfile', {userId, refreshData})}
                                    style={{borderRadius: 4, width: 250, height: 55}} btnText="ویرایش پروفایل"/>
                                <SecondaryButton
                                    onPress={() => props.navigation.navigate('UserQuestions', {userId})}
                                    style={{borderRadius: 4, width: 250, height: 55}} btnText="سوال های من"/>
                                <PrimaryButton
                                    onPress={() => setLogoutModalState(true)}
                                    style={{borderRadius: 4, width: 250, height: 55}}
                                    btnText="خروج از حساب کاربری"/>
                            </View>
                        </>
                    )
                }
            </ScrollView>
        </Container>
    )
}

export default Profile;
