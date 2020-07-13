import React from 'react';
import {Container, Gradient, NormalButton, NormalText} from "../../ui";
import {View, ActivityIndicator, StyleSheet} from "react-native";

import EmptyQuizIcon from './../../../assets/icons/EmptyQuizIcon.svg'

const iconWidth = 80;
const iconHeight = 80;

function BeforeQuizView(props) {
    const {icon, questionList, take, questionListNoData, loader} = props;
    return (
        <Container>
            {
                loader ? (
                    <Gradient style={styles.loaderGradient}>
                        <ActivityIndicator size='large' color='#fff'/>
                    </Gradient>
                ) : questionListNoData ? (
                    <Gradient style={styles.noQuestionGradient}>
                        <View style={styles.topSection}>
                            <EmptyQuizIcon width={iconWidth} height={iconHeight}/>
                            <NormalText
                                style={styles.noQuestionCaption}>متاسفانه
                                سوالی در این دسته بندی
                                وجود ندارد</NormalText>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <NormalButton
                                btnText="بازگشت" style={styles.normalBtn}
                                onPress={() => props.navigation.pop()} textStyle={styles.normalBtnTxt}
                            />
                        </View>
                    </Gradient>
                ) : (
                    <Gradient style={styles.regularGradient}>
                        <View style={styles.topSection}>
                            {icon}
                            <NormalText style={styles.regularCaption}>تعداد سوال
                                : {take}</NormalText>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <NormalButton
                                onPress={() => props.navigation.navigate('Quiz', {
                                    questionList
                                })}
                                textStyle={styles.normalBtnTxt} style={styles.normalBtn} btnText="شروع"
                            />
                            <NormalButton
                                btnText="بازگشت" onPress={() => props.navigation.pop()}
                                textStyle={styles.transparentBtnTxt} style={styles.transparentBtn}
                            />
                        </View>
                    </Gradient>
                )
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    loaderGradient: {justifyContent: 'center', alignItems: 'center', paddingVertical: 20},
    regularGradient: {justifyContent: 'space-between', paddingVertical: 20},
    regularCaption: {fontSize: 26, color: '#fff', marginTop: 16},
    noQuestionGradient: {justifyContent: 'space-evenly', paddingVertical: 20},
    noQuestionCaption: {fontSize: 25, color: '#fff', marginTop: 16, textAlign: 'center', lineHeight: 45},
    topSection: {width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 80, paddingHorizontal: 20},
    buttonsContainer: {width: '100%', justifyContent: 'center', alignItems: 'center'},
    normalBtn: {height: 60, borderRadius: 80, marginTop: 60},
    normalBtnTxt: {fontFamily: 'IRANYekanMobileBold', fontSize: 24},
    transparentBtn: {height: 60, borderRadius: 80, marginTop: 20, backgroundColor: 'transparent', borderWidth: 0},
    transparentBtnTxt: {fontFamily: 'IRANYekanMobileBold', fontSize: 24, color: '#fff'},
})

export default BeforeQuizView;
