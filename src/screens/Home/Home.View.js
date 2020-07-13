import React from 'react';
import {BoldText, Container, Gradient, PrimaryButton} from "../../ui";
import {StatusBar, View, StyleSheet} from "react-native";
import Logo from "../../../assets/icons/logo.svg";

function HomeView(props) {
    return (
        <Container>
            <View>
                <Gradient style={{height: StatusBar.currentHeight}}/>
            </View>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <Gradient>
                <View style={styles.topSectionContainer}>
                    <Logo width={100} height={100}/>
                    <BoldText style={styles.pageCaption}>کوییز</BoldText>
                </View>
                <View style={styles.bottomSectionContainer}>
                    <PrimaryButton
                        btnText="شروع" style={styles.btnStyle}
                        onPress={() => props.navigator('CategoriesList')}
                        textStyle={styles.btnCaptionStyle}
                    />
                </View>
            </Gradient>
        </Container>
    )
}

const styles = StyleSheet.create({
    topSectionContainer: {height: '67%', width: '100%', justifyContent: 'center', alignItems: 'center'},
    pageCaption: {color: '#FFFFFE', fontSize: 40, marginTop: 10},
    bottomSectionContainer: {
        height: '33%', backgroundColor: '#f6f6f6', width: '100%', justifyContent: 'center',
        alignItems: 'center', borderTopLeftRadius: 24, borderTopRightRadius: 24
    },
    btnStyle: {height: 60},
    btnCaptionStyle: {fontFamily: 'IRANYekanMobileBold', fontSize: 24},
})

export default HomeView;
