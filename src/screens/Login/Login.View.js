import React from 'react';
import {Body, BoldText, Container, PrimaryButton, Row, SecondaryButton} from "../../ui";
import {ActivityIndicator, StatusBar, TextInput, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "../../ui/GradientConfig";
import LoginIcon from "../../../assets/icons/login.svg";
import AuthStyles from "../../styles/Auth.styles";
import styles from "../../styles/ui.styles";

function LoginView(props) {

    const {loader, setUserName, setPassword, setLoader, loginHandler} = props

    return (
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors}
                                style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body>
                <LoginIcon width={120} height={120}/>
                <BoldText style={AuthStyles.pageTitle}>ورود</BoldText>
                <View style={AuthStyles.formContainer}>
                    <View style={AuthStyles.formRow}>
                        <BoldText style={AuthStyles.textInputTitle}>نام کاربری</BoldText>
                        <TextInput
                            onChangeText={text => setUserName(text)}
                            style={AuthStyles.textInput}
                        />
                    </View>
                    <View style={AuthStyles.formRow}>
                        <BoldText style={AuthStyles.textInputTitle}>کلمه عبور</BoldText>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                            style={AuthStyles.textInput}
                        />
                    </View>
                    <Row style={AuthStyles.buttonRow}>
                        {
                            loader ? (
                                <View style={[styles.buttonContainer, styles.primaryButtonBackgroundColor]}>
                                    <ActivityIndicator color="#fff"/>
                                </View>
                            ) : (
                                <PrimaryButton onPress={() => {
                                    setLoader(true);
                                    loginHandler()
                                }} btnText="ورود"/>
                            )
                        }
                    </Row>
                    <Row style={AuthStyles.buttonRow}>
                        <SecondaryButton onPress={() => props.navigation.navigate('Register')} btnText="عضویت"/>
                    </Row>
                </View>
            </Body>
        </Container>
    )
}

export default LoginView;
