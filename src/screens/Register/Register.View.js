import React from 'react';
import {Body, BoldText, Container, PrimaryButton, Row} from "../../ui";
import {StatusBar, TextInput, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {colors, end, locations, start} from "../../ui/GradientConfig";
import RegisterIcon from "../../../assets/icons/register.svg";
import AuthStyles from "../../styles/Auth.styles";

function RegisterView(props) {

    const {setUserName, registerHandler, setPassword, setRepeatPassword} = props

    return (
        <Container>
            <View>
                <LinearGradient locations={locations} start={start} end={end} colors={colors}
                                style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Body>
                <RegisterIcon width={120} height={120}/>
                <BoldText style={AuthStyles.pageTitle}>عضویت</BoldText>
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
                    <View style={AuthStyles.formRow}>
                        <BoldText style={AuthStyles.textInputTitle}>تکرار کلمه عبور</BoldText>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={text => setRepeatPassword(text)}
                            style={AuthStyles.textInput}
                        />
                    </View>
                    <Row style={AuthStyles.buttonRow}>
                        <PrimaryButton onPress={() => registerHandler()} btnText="عضویت"/>
                    </Row>
                </View>
            </Body>
        </Container>
    )
}

export default RegisterView;
