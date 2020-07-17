import React from 'react';
import {BoldText, Container, Gradient, Row} from "../../ui";
import {View, StyleSheet} from "react-native";
import QuizButtonsContainer from "../../components/QuizButtonsContainer";
import QuizButtons from "../../components/QuizButtons";
import QuizAlert from "../../components/QuizAlert";

function QuizView(props) {
    const questions = props.route.params.questionList;
    const question = questions[props.activeQuestionIndex];
    console.log('questions', questions)
    return (
        <Container>
            <Gradient style={styles.gradientContainer}>
                <QuizAlert correct={props.answerCorrect} visible={props.answered}/>
                <View>
                    <BoldText style={styles.questionText}>{question.questionText}</BoldText>
                </View>
                <View style={styles.bottomSectionContainer}>
                    <BoldText style={styles.timer}>
                        {`00:0${props.second}`}
                    </BoldText>
                    <Row style={styles.staticsRow}>
                        <View style={styles.staticsBlock}>
                            <BoldText style={styles.staticCaption}>سوال</BoldText>
                            <BoldText style={styles.staticNumber}>
                                {`${props.activeQuestionIndex + 1}/${props.totalCount}`}
                            </BoldText>
                        </View>
                        <View style={styles.staticsBlock}>
                            <BoldText style={styles.staticCaption}>جواب صحیح</BoldText>
                            <BoldText style={styles.staticNumber}>
                                {`${props.correctCount}/${props.totalCount}`}
                            </BoldText>
                        </View>
                    </Row>
                    <QuizButtonsContainer>
                        {question.answers.map(answer => (
                            <QuizButtons
                                key={answer.id} text={answer.text}
                                onPress={() => props.answer(answer.isCorrect)}
                            />
                        ))}
                    </QuizButtonsContainer>
                </View>
            </Gradient>
        </Container>
    );
}

const styles = StyleSheet.create({

    gradientContainer: {paddingTop: 100, justifyContent: 'space-between', position: 'relative'},
    questionText: {fontSize: 30, color: '#fff'},
    bottomSectionContainer: {
        alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#f6f6f6',
        borderTopRightRadius: 25, borderTopLeftRadius: 25, paddingVertical: 20, paddingHorizontal: 10
    },
    timer: {marginVertical: 15, fontSize: 22, color: '#d558c8'},
    staticsRow: {justifyContent: 'space-between', width: '100%'},
    staticsBlock: {
        flex: 1, alignItems: 'center', backgroundColor: '#fff',
        marginHorizontal: 8, elevation: 2, borderRadius: 4
    },
    staticCaption: {fontSize: 18, color: '#d558c8'},
    staticNumber: {fontSize: 20, textAlign: "center", letterSpacing: -0.02, fontWeight: "600", color: '#d558c8'},
});


export default QuizView;
