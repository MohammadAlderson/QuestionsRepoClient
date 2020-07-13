import React from 'react';
import {View, StyleSheet} from "react-native";
import {BoldText, Container, Gradient, NormalButton, Row} from "../../ui";

function AfterQuizView(props) {
    const {params} = props.route
    return (
        <Container>
            <Gradient>
                <BoldText style={styles.mainCaption}>آمار</BoldText>
                <View style={styles.infoContainer}>
                    <Row style={styles.infoRow}>
                        <BoldText style={styles.infoCaption}>{params.totalCount}</BoldText>
                        <BoldText style={styles.infoValue}>سوالات</BoldText>
                    </Row>
                    <Row style={styles.infoRow}>
                        <BoldText style={styles.infoCaption}>{params.correctAnsCount}</BoldText>
                        <BoldText style={styles.infoValue}>جواب های صحیح</BoldText>
                    </Row>
                </View>
                <NormalButton btnText="اتمام"
                              onPress={() => props.navigation.reset({
                                  index: 0,
                                  routes: [{
                                      name: 'Home',
                                  }],
                              })}
                              textStyle={styles.btnTxt}
                              style={styles.btn}/>
            </Gradient>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainCaption: {fontSize: 40, color: '#fff', marginBottom: 10},
    infoContainer: {width: '50%', marginVertical: 16},
    infoRow: {width: '100%', justifyContent: 'space-between', marginVertical: 8},
    infoCaption: {fontSize: 26, color: '#fff'},
    infoValue: {fontSize: 24, color: '#fff'},
    btn: {height: 60, borderRadius: 80, marginTop: 60},
    btnTxt: {fontFamily: 'IRANYekanMobileBold', fontSize: 24}
})

export default AfterQuizView;
