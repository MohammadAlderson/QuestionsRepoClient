import React from 'react';
import {View, ActivityIndicator, ScrollView, Modal, StatusBar} from 'react-native';
import User from './../../assets/icons/profile/user.svg'
import Questions from './../../assets/icons/profile/questions.svg'
import Answers from './../../assets/icons/profile/answers.svg'
import {
    Row, BoldText, NormalText, Container,
    CustomHeader, LightText, SecondaryButton, PrimaryButton, Gradient
} from "../ui/index";
import {UserContext} from "../context/UserContext";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "../ui/GradientConfig";

function Profile(props) {


    const {userId, fetchUserData, loading, userData, logOutHandler} = React.useContext(UserContext);

    const [logoutModalState, setLogoutModalState] = React.useState(false);

    React.useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors} style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
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
                            height: 250,
                            width: '100%',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <Gradient>
                            <ActivityIndicator size="large" color="#FFFFFE"/>
                            </Gradient>
                        </View>
                    ) : (
                        <>
                            <View style={{
                                height: 250,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 10
                            }}>
                                <Gradient>
                                    <User width={90} height={90}/>
                                    <View style={{marginVertical: 8, alignItems: 'center'}}>
                                        <BoldText style={{fontSize: 24, color: '#FFFFFE'}}>{userData.displayName}</BoldText>
                                        <LightText style={{fontSize: 20, color: '#FFFFFE'}}>@{userData.userName}</LightText>
                                    </View>
                                </Gradient>
                            </View>
                            <Row style={{width: '100%', justifyContent: 'space-around'}}>
                                <Row style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    paddingHorizontal: 40,
                                    width: 150,
                                    backgroundColor: '#fff',
                                    elevation: 2,
                                    borderRadius: 4
                                }}>

                                    <View style={{alignItems: 'flex-end', marginRight: 10, justifyContent: 'center'}}>
                                        <LightText style={{fontSize: 14, color: '#194b9a'}}>جواب ها</LightText>
                                        <BoldText style={{fontSize: 19, color: '#194b9a' }}>{userData.ansCount}</BoldText>
                                    </View>
                                    <View style={{backgroundColor: 'rgba(36,210,146,0.27)', width: 35, height: 35, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                                        <Answers width={15} height={15} />
                                    </View>
                                </Row>
                                <Row style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    height: 60,
                                    paddingHorizontal: 40,
                                    width: 150,
                                    backgroundColor: '#fff',
                                    elevation: 2,
                                    borderRadius: 4
                                }}>
                                    <View style={{alignItems: 'flex-end', marginRight: 10, justifyContent: 'center'}}>
                                        <LightText style={{fontSize: 14, color: '#194b9a'}}>سوالات</LightText>
                                        <BoldText style={{fontSize: 19, color: '#194b9a'}}>{userData.questionCount}</BoldText>
                                    </View>
                                    <View style={{backgroundColor: 'rgba(36,210,146,0.27)', width: 35, height: 35, borderRadius: 4, justifyContent: 'center', alignItems: 'center'}}>
                                        <Questions width={15} height={15} />
                                    </View>

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
