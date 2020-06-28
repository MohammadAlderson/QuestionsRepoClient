import React from 'react';
import {BoldText, Container, CustomHeader, CustomToast, PrimaryButton, Row} from "../ui";
import {ScrollView, TextInput, View} from "react-native";
import {domain, headers} from "../config";
function EditProfile(props) {
    const params = props.route.params
    const [displayName, setDisplayName] = React.useState('')
    const [email, setEmail] = React.useState('')
    async function editProfileHandler() {

        if (displayName === '' && email === '') {
            CustomToast('لطفا اطلاعات را وارد کنید', 4000, "danger")
        } else {
            const body = JSON.stringify({
                userId: params.userId,
                displayName,
                email
            })
            const url = `${domain}/api/EditUserProfile`
            let response = await fetch(url, {body, method: 'POST', headers});
            let res = await response.json();
            if (res.statusCode === 200) {
                CustomToast('اطلاعات با موفقیت تغییر یافت', 3000, "success")
                params.refreshData();
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
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <BoldText style={{alignSelf: 'flex-end', fontSize: 17}}>نام:</BoldText>
                    <TextInput
                        onChangeText={(text) => setDisplayName(text)}
                        underlineColorAndroid="#354561"
                        style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                    />
                </View>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <BoldText style={{alignSelf: 'flex-end', fontSize: 17}}>ایمیل:</BoldText>
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        underlineColorAndroid="#354561"
                        style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                    />
                </View>
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
