import React from 'react';
import {ScrollView, StyleSheet} from "react-native";
import {Container, CustomHeader, CustomTextInput, PrimaryButton, Row} from "../../ui";

function EditProfileView(props) {

    const {editProfileHandler, setDisplayName, setEmail} = props

    return (
        <Container>
            <CustomHeader title="ویرایش پروفایل" navigation={props.navigation} backBtn/>
            <ScrollView style={styles.scrollViewStyle}>
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
                <Row style={styles.btnRow}>
                    <PrimaryButton
                        onPress={editProfileHandler}
                        btnText="ثبت"/>
                </Row>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    scrollViewStyle: {paddingVertical: 10, paddingHorizontal: 10},
    btnRow: {width: '100%', justifyContent: 'center', marginTop: 20}
})

export default EditProfileView;
