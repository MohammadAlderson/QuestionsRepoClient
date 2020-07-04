import {Modal, View} from "react-native";
import {BoldText, PrimaryButton, Row, SecondaryButton} from "../ui";
import React from "react";

function Logout(props) {
    const {logoutModalState, setLogoutModalState, logOutHandler} = props
    return (
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
                        <SecondaryButton style={{width: '50%'}} onPress={() => {
                            setLogoutModalState(false)
                            logOutHandler()
                        }} btnText="بله"/>
                        <PrimaryButton style={{marginHorizontal: 3, width: '50%'}} onPress={() => {
                            setLogoutModalState(false)
                        }} btnText="خیر"/>
                    </Row>
                </View>
            </View>
        </Modal>
    )
}
export default Logout;
