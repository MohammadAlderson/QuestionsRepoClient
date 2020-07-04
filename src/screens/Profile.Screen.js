import React from 'react';
import {TouchableOpacity, View, ActivityIndicator, Text, Modal, StatusBar} from 'react-native';
import User from './../../assets/icons/profile/user.svg'
import Questions from './../../assets/icons/profile/questions.svg'
import Answers from './../../assets/icons/profile/answers.svg'
import {
    Row, BoldText, NormalText, Container,
    CustomHeader, LightText, SecondaryButton, PrimaryButton, Gradient
} from "../ui/index";
import {UserContext} from "../context/UserContext";
import Logout from "../components/LogoutModal";

function Profile(props) {


    const {userId, fetchUserData, loading, userData, logOutHandler} = React.useContext(UserContext);

    const [logoutModalState, setLogoutModalState] = React.useState(false);

    React.useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <Container>
            <View>
                <Gradient style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Logout
                logoutModalState={logoutModalState}
                setLogoutModalState={setLogoutModalState}
                logOutHandler={logOutHandler}
            />
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
                        <Gradient>
                            <View style={{
                                height: '40%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 20
                            }}>
                                <User width={90} height={90}/>
                                <View style={{marginVertical: 8, alignItems: 'center'}}>
                                    <BoldText style={{fontSize: 24, color: '#FFFFFE'}}>{userData.displayName}</BoldText>
                                    <LightText style={{fontSize: 20, color: '#FFFFFE'}}>@{userData.userName}</LightText>
                                </View>
                            </View>
                            <View style={{
                                height: '60%',
                                backgroundColor: '#f6f6f6',
                                width: '100%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24
                            }}>
                                <Row style={{width: '100%', justifyContent: 'space-around', marginTop: 24}}>
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

                                        <View
                                            style={{alignItems: 'flex-end', marginRight: 10, justifyContent: 'center'}}>
                                            <NormalText style={{fontSize: 14, color: '#d558c8'}}>جواب ها</NormalText>
                                            <BoldText
                                                style={{fontSize: 20, color: '#d558c8'}}>{userData.ansCount}</BoldText>
                                        </View>
                                        <View style={{
                                            backgroundColor: 'rgba(36,210,146,0.27)',
                                            width: 35,
                                            height: 35,
                                            borderRadius: 4,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Answers width={15} height={15}/>
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
                                        <View
                                            style={{alignItems: 'flex-end', marginRight: 10, justifyContent: 'center'}}>
                                            <NormalText style={{fontSize: 14, color: '#d558c8'}}>سوالات</NormalText>
                                            <BoldText style={{
                                                fontSize: 20,
                                                color: '#d558c8'
                                            }}>{userData.questionCount}</BoldText>
                                        </View>
                                        <View style={{
                                            backgroundColor: 'rgba(36,210,146,0.27)',
                                            width: 35,
                                            height: 35,
                                            borderRadius: 4,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Questions width={15} height={15}/>
                                        </View>

                                    </Row>
                                </Row>
                                <View
                                    style={{
                                        marginTop: 20,
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <PrimaryButton
                                        onPress={() => props.navigation.navigate('EditProfile')}
                                        btnText="ویرایش پروفایل"/>
                                    <PrimaryButton
                                        onPress={() => props.navigation.navigate('UserQuestions', {userId})}
                                        btnText="سوال های من"/>
                                    <SecondaryButton
                                        onPress={() => setLogoutModalState(true)}
                                        btnText="خروج از حساب کاربری"/>
                                </View>
                            </View>
                        </Gradient>
                    </>
                )
            }
        </Container>
    )
}

export default Profile;
