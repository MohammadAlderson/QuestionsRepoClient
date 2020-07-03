import React from 'react';
import {BoldText, Container, CustomHeader, CustomTextInput, CustomToast, PrimaryButton, Row} from "../ui";
import {ScrollView, TextInput, View} from "react-native";
import {domain, headers} from "../config";
import {UserContext} from "../context/UserContext";
import AuthStyles from "../styles/Auth.styles";

function EditProfile(props) {
    const {fetchUserData, handleLoader, userId} = React.useContext(UserContext);
    const [displayName, setDisplayName] = React.useState('')
    const [email, setEmail] = React.useState('')

    function refreshUserDataHandler() {
        fetchUserData();
        handleLoader(true);
    }

    async function editProfileHandler() {

        if (displayName === '' && email === '') {
            CustomToast('لطفا اطلاعات را وارد کنید', 4000, "danger")
        } else {
            const body = JSON.stringify({
                userId: userId,
                displayName,
                email
            })
            const url = `${domain}/api/EditUserProfile`
            let response = await fetch(url, {body, method: 'POST', headers});
            let res = await response.json();
            if (res.statusCode === 200) {
                CustomToast('اطلاعات با موفقیت تغییر یافت', 3000, "success")
                refreshUserDataHandler();
                props.navigation.goBack();
            } else {
                CustomToast('عدم برقراری ارتباط با سرور', 3000, "danger")
            }
        }
    }

    return (
        <Container>
            <CustomHeader title="ویرایش پروفایل" navigation={props.navigation} backBtn />
            <ScrollView style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <CustomTextInput
                    placeholder='نام...'
                    onChangeText={(text) => setDisplayName(text)}
                    inputTitle="نام"
                />
                <CustomTextInput
                    placeholder='ایمیل...'
                    onChangeText={(text) => setEmail(text)}
                    inputTitle="ایمیل"
                />
                <Row style={{width: '100%', justifyContent: 'center', marginTop: 20}}>
                    <PrimaryButton
                        onPress={() => editProfileHandler()}
                        btnText="ثبت" />
                </Row>
            </ScrollView>
        </Container>
    )
}
export default EditProfile;
