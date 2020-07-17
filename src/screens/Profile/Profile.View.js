import React from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from "react-native";
import {BoldText, Container, Gradient, LightText, NormalText, PrimaryButton, Row, SecondaryButton} from "../../ui";
import Logout from "../../components/LogoutModal";
import User from "../../../assets/icons/profile/user.svg";
import Answers from "../../../assets/icons/profile/answers.svg";
import Questions from "../../../assets/icons/profile/questions.svg";

function ProfileView(props) {

    const {loading, logoutModalState, setLogoutModalState, logOutHandler, userData, userId} = props

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
                    <View style={styles.loaderContainer}>
                        <Gradient>
                            <ActivityIndicator size="large" color="#FFFFFE"/>
                        </Gradient>
                    </View>
                ) : (
                    <>
                        <Gradient>
                            <View style={styles.profileTopSection}>
                                <User width={90} height={90}/>
                                <View style={styles.profileTopSectionUserInfoContainer}>
                                    <BoldText style={styles.userDisplayName}>{userData.displayName}</BoldText>
                                    <LightText style={styles.userName}>@{userData.userName}</LightText>
                                </View>
                            </View>
                            <View style={styles.profileBottomSection}>
                                <Row style={styles.staticsContainer}>
                                    <Row style={styles.staticsBlock}>
                                        <View style={styles.staticsTextsContainer}>
                                            <NormalText style={styles.staticCaption}>جواب ها</NormalText>
                                            <BoldText style={styles.staticNumber}>{userData.ansCount}</BoldText>
                                        </View>
                                        <View style={styles.staticIconContainer}>
                                            <Answers width={15} height={15}/>
                                        </View>
                                    </Row>
                                    <Row style={styles.staticsBlock}>
                                        <View style={styles.staticsTextsContainer}>
                                            <NormalText style={styles.staticCaption}>سوالات</NormalText>
                                            <BoldText style={styles.staticNumber}>{userData.questionCount}</BoldText>
                                        </View>
                                        <View style={styles.staticIconContainer}>
                                            <Questions width={15} height={15}/>
                                        </View>
                                    </Row>
                                </Row>
                                <View style={styles.buttonsContainer}>
                                    <PrimaryButton onPress={() => props.navigation.navigate('EditProfile')}
                                                   btnText="ویرایش پروفایل"/>
                                    <PrimaryButton onPress={() => props.navigation.navigate('UserQuestions', {userId})}
                                                   btnText="سوال های من"/>
                                    <SecondaryButton onPress={() => setLogoutModalState(true)} btnText="خروج از حساب کاربری"/>
                                </View>
                            </View>
                        </Gradient>
                    </>
                )
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {height: 250, width: '100%', alignItems: 'center', marginBottom: 10},
    profileTopSection: {height: '40%', width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20},
    profileTopSectionUserInfoContainer: {marginVertical: 8, alignItems: 'center'},
    userDisplayName: {fontSize: 24, color: '#FFFFFE'},
    userName: {fontSize: 20, color: '#FFFFFE'},
    profileBottomSection: {
        height: '60%', backgroundColor: '#f6f6f6', width: '100%', justifyContent: 'flex-start',
        alignItems: 'center', borderTopLeftRadius: 24, borderTopRightRadius: 24
    },
    staticsContainer: {width: '100%', justifyContent: 'space-around', marginTop: 24},
    staticsBlock: {
        alignItems: 'center', justifyContent: 'space-between', height: 60, paddingHorizontal: 40,
        width: 150, backgroundColor: '#fff', elevation: 2, borderRadius: 4
    },
    staticsTextsContainer: {alignItems: 'flex-end', marginRight: 10, justifyContent: 'center'},
    staticCaption: {fontSize: 14, color: '#d558c8'},
    staticNumber: {fontSize: 20, color: '#d558c8'},
    staticIconContainer: {
        backgroundColor: 'rgba(36,210,146,0.27)', width: 35, height: 35,
        borderRadius: 4, justifyContent: 'center', alignItems: 'center'
    },
    buttonsContainer: {marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center'}
})

export default ProfileView;
