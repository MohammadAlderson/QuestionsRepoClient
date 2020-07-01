import React from 'react';
import {View, ActivityIndicator, ScrollView, Modal} from 'react-native';
import User from './../../assets/icons/user.svg'
import {
    Row, BoldText, NormalText, Container,
    CustomHeader, LightText, SecondaryButton, PrimaryButton
} from "../ui/index";
import {UserContext} from "../context/UserContext";
import LinearGradient from "react-native-linear-gradient";

function Profile(props) {


    const {userId, fetchUserData, loading, userData, logOutHandler} = React.useContext(UserContext);

    const [logoutModalState, setLogoutModalState] = React.useState(false);

    React.useEffect(() => {
        fetchUserData();
    }, [])

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
                        height: 200,
                        justifyContent: 'space-between'
                    }}>
                        <BoldText style={{fontSize: 20, lineHeight: 35, marginRight: 20}}>آیا می خواهید از حساب کاربری
                            خود خارج شوید؟</BoldText>
                        <Row style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
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
                                justifyContent: 'center',
                                marginBottom: 10
                            }}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#194b9a', '#4b6cb7']} style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <User width={90} height={90}/>
                                    <View style={{marginVertical: 8, alignItems: 'center'}}>
                                        <BoldText style={{fontSize: 24, color: '#FFFFFE'}}>{userData.displayName}</BoldText>
                                        <LightText style={{fontSize: 20, color: '#FFFFFE'}}>@{userData.userName}</LightText>
                                    </View>
                                </LinearGradient>
                            </View>
                            <Row style={{width: '100%'}}>
                                <Row style={{
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    paddingHorizontal: 40,
                                    flex: 1,
                                }}>
                                    <NormalText style={{fontSize: 20, color: '#4b6cb7' }}>{userData.ansCount}</NormalText>
                                    <BoldText style={{fontSize: 20, color: '#194b9a'}}>جواب ها</BoldText>
                                </Row>
                                <Row style={{
                                    alignItems: 'center',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    flex: 1,
                                    paddingHorizontal: 40
                                }}>
                                    <NormalText style={{fontSize: 20, color: '#4b6cb7'}}>{userData.questionCount}</NormalText>
                                    <BoldText style={{fontSize: 20, color: '#194b9a'}}>سوالات</BoldText>
                                </Row>
                            </Row>
                            <View
                                style={{marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <PrimaryButton
                                    onPress={() => props.navigation.navigate('EditProfile')}
                                    style={{borderRadius: 4, width: '90%', height: 50}} btnText="ویرایش پروفایل"/>
                                <PrimaryButton
                                    onPress={() => props.navigation.navigate('UserQuestions', {userId})}
                                    style={{borderRadius: 4, width: '90%', height: 50}} btnText="سوال های من"/>
                                <SecondaryButton
                                    onPress={() => setLogoutModalState(true)}
                                    style={{borderRadius: 4, width: '90%', height: 50}}
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
