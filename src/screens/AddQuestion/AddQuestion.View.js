import React from 'react';
import {ScrollView, TouchableOpacity, View, StyleSheet} from "react-native";
import {Icon} from "native-base";
import CheckBox from "@react-native-community/checkbox";
import {Container, CustomHeader, PrimaryButton, CustomTextInput, BoldText, Row, NormalText} from "../../ui";
import SelectCategoryModal from "./SelectCategory.Modal";

const tintColor = {true: '#24d292', false: '#d558c8'}

function AddQuestionView(props) {

    const {
        navigation, questionInput, setQuestion, setCategoryModalState,
        categoryName, firstAnsInput, setFirstAns, secondAnsInput, setSecondAns,
        thirdAnsInput, setThirdAns, forthAnsInput, setForthAns,
        forthAnsCorrect, setForthAnsCorrect, setFirstAnsCorrect,
        setSecondAnsCorrect, setThirdAnsCorrect, thirdAnsCorrect,
        secondAnsCorrect, firstAnsCorrect, createQuestion,
        categoryModalState, categoryList, setCategoryId, setCategoryName
    } = props

    return (
        <Container>
            <SelectCategoryModal
                setCategoryModalState={setCategoryModalState}
                categoryModalState={categoryModalState}
                categoryList={categoryList}
                setCategoryId={setCategoryId}
                setCategoryName={setCategoryName}
            />
            <CustomHeader title="ایجاد سوال" navigation={navigation}/>
            <ScrollView style={styles.scrollView}>
                <View style={styles.questionContainer}>
                    <CustomTextInput
                        inputRef={questionInput}
                        placeholder='سوال...'
                        onChangeText={(text) => setQuestion(text)}
                        inputTitle="سوال:"
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <BoldText style={styles.categoryCaption}>دسته بندی:</BoldText>
                    <TouchableOpacity
                        style={styles.categoryBtn} activeOpacity={0.8}
                        onPress={() => setCategoryModalState(true)}
                    >
                        <Row style={styles.categoryBtnRow}>
                            <Icon name="md-arrow-dropdown" type="Ionicons" style={styles.categoryBtnIcon}/>
                            <NormalText style={styles.categoryBtnCaption}>{categoryName}</NormalText>
                        </Row>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsContainer}>
                    <BoldText style={styles.optionsCaption}>گزینه ها:</BoldText>
                    <CustomTextInput
                        inputRef={firstAnsInput}
                        placeholder='گزینه 1 ...'
                        onChangeText={(text) => setFirstAns(text)}
                        inputTitle="گزینه 1"
                    />
                    <CustomTextInput
                        inputRef={secondAnsInput}
                        placeholder='گزینه 2 ...'
                        onChangeText={(text) => setSecondAns(text)}
                        inputTitle="گزینه 2"
                    />
                    <CustomTextInput
                        inputRef={thirdAnsInput}
                        placeholder='گزینه 3 ...'
                        onChangeText={(text) => setThirdAns(text)}
                        inputTitle="گزینه 3"
                    />
                    <CustomTextInput
                        inputRef={forthAnsInput}
                        placeholder='گزینه 4 ...'
                        onChangeText={(text) => setForthAns(text)}
                        inputTitle="گزینه 4"
                    />
                </View>
                <View>
                    <BoldText style={styles.optionsCaption}>پاسخ صحیح:</BoldText>
                    <Row style={styles.answersRow}>
                        <View style={styles.checkBoxContainer}>
                            <NormalText>گزینه 4</NormalText>
                            <CheckBox tintColors={tintColor} value={forthAnsCorrect}
                                      onValueChange={() => {
                                          setForthAnsCorrect(true);
                                          setFirstAnsCorrect(false);
                                          setSecondAnsCorrect(false);
                                          setThirdAnsCorrect(false);
                                      }}/>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <NormalText>گزینه 3</NormalText>
                            <CheckBox tintColors={tintColor} value={thirdAnsCorrect}
                                      onValueChange={() => {
                                          setThirdAnsCorrect(true);
                                          setFirstAnsCorrect(false);
                                          setSecondAnsCorrect(false);
                                          setForthAnsCorrect(false);
                                      }}/>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <NormalText>گزینه 2</NormalText>
                            <CheckBox tintColors={tintColor} value={secondAnsCorrect}
                                      onValueChange={() => {
                                          setSecondAnsCorrect(true);
                                          setFirstAnsCorrect(false);
                                          setThirdAnsCorrect(false);
                                          setForthAnsCorrect(false);
                                      }}/>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <NormalText>گزینه 1</NormalText>
                            <CheckBox tintColors={tintColor} value={firstAnsCorrect}
                                      onValueChange={() => {
                                          setFirstAnsCorrect(true);
                                          setSecondAnsCorrect(false);
                                          setThirdAnsCorrect(false);
                                          setForthAnsCorrect(false);
                                      }}/>
                        </View>
                    </Row>
                </View>
                <View style={styles.submitBtnContainer}>
                    <PrimaryButton style={styles.submitBtn} onPress={() => createQuestion()} btnText="ارسال"/>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    scrollView: {paddingVertical: 10, paddingHorizontal: 10},
    questionContainer: {alignItems: 'center', marginVertical: 10},
    categoryContainer: {marginVertical: 10},
    categoryCaption: {fontSize: 17, marginBottom: 8},
    categoryBtn: {borderRadius: 80, width: '100%', borderWidth: 1, borderColor: '#d558c8'},
    categoryBtnRow: {
        backgroundColor: '#d558c8', borderRadius: 80, alignItems: 'center',
        justifyContent: 'space-between', paddingHorizontal: 16, height: 50, width: '100%'
    },
    categoryBtnIcon: {color: '#FFFFFE', marginRight: 10},
    categoryBtnCaption: {color: '#FFFFFE', fontSize: 17},
    optionsContainer: {alignItems: 'center', marginVertical: 10},
    optionsCaption: {alignSelf: 'flex-end', fontSize: 17},
    answersRow: {justifyContent: 'space-around', marginVertical: 16},
    checkBoxContainer: {alignItems: 'center'},
    submitBtnContainer: {width: '100%', alignItems: 'center', marginBottom: 20},
    submitBtn: {width: '90%'}
})

export default AddQuestionView;
