import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import User from './../../assets/icons/user.svg'
import styles from './../styles/ui.styles'
import {Row, BoldText, NormalText, Container, CustomHeader} from "../ui/index";
import {Body} from 'native-base'
import {UserContext} from "../context/UserContext";

function Profile(props) {

    const {userId} = React.useContext(UserContext);
    const [userData, setUserData] = React.useState();
    const [loading, setLoading] = React.useState(true);

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

    return (
        <Container>
            <CustomHeader title="پروفایل" navigation={props.navigation}/>
            <Body>
                {
                    loading ? (
                        <ActivityIndicator size="large"/>
                    ) : (
                        <>
                            <User width={120} height={120} style={{marginTop: 30}}/>
                            <View style={{marginVertical: 16, alignItems: 'center'}}>
                                <BoldText style={{ fontSize: 19}}>{userData.displayName}</BoldText>
                                <BoldText style={{ fontSize: 16 , color: '#6079bf'}}>@{userData.userName}</BoldText>
                            </View>
                            <Row style={{justifyContent: 'space-evenly', width: '100%'}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <BoldText style={{fontSize: 16}}>جواب ها</BoldText>
                                    <NormalText style={{fontSize: 15}}>{userData.ansCount}</NormalText>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <BoldText style={{fontSize: 16}}>سوالات</BoldText>
                                    <NormalText style={{fontSize: 15}}>{userData.questionCount}</NormalText>
                                </View>
                            </Row>
                            <View style={{marginTop: 20}}>
                                <Row style={{justifyContent: 'space-evenly', width: '100%'}}>
                                    <TouchableOpacity activeOpacity={0.8}
                                                      onPress={() => props.navigation.navigate('EditProfile', {userId, refreshData})}
                                                      style={[styles.fullyCenter, styles.profileButton]}>
                                        <NormalText>ویرایش پروفایل</NormalText>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}
                                                      style={[styles.fullyCenter, styles.profileButton]}>
                                        <NormalText>سوالات من</NormalText>
                                    </TouchableOpacity>
                                </Row>
                            </View>
                        </>
                    )
                }
            </Body>
        </Container>
    )
}

export default Profile;
