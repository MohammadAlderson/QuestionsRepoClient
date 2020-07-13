import React from "react";
import {View, StyleSheet, StatusBar, Text, SafeAreaView, TouchableOpacity, Dimensions} from "react-native";
import {BoldText, Container, CustomHeader, Gradient, NormalText, Row} from "../ui";
import {Icon} from 'native-base'
// import { Alert } from "../components/Alert";
const screen = Dimensions.get("window");
function Button(props) {
    // text={answer.text}
    // onPress={() => this.answer(answer.correct)}
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                borderRadius: 4,
                height: 75,
                elevation: 3,
                marginHorizontal: '2%',
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: '#FFFFFE',
                borderWidth: 1.5,
                borderColor: '#874fcc',
                marginVertical: 10,
                width: "46%",
            }}>
            <Text style={{fontFamily: 'IRANYekanMobileBold', fontSize: 18, color: '#874fcc', marginTop: 10}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const ButtonContainer = ({ children }) => (
    <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "space-between",
        width: '100%'
    }}>{children}</View>
);

const Alert = ({ correct, visible }) => {
    if (!visible) return <View  style={styles.alertContainer} />;

    const iconName = correct
        ? 'md-checkmark'
        : 'close'

    const circleStyles = [styles.circle];

    if (correct) {
        circleStyles.push(styles.circleCorrect);
    }

    return (
        <View style={styles.alertContainer}>
            <View style={circleStyles}>
                <Icon type='Ionicons' name={iconName} style={{color: '#fff'}} resizeMode="contain" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#36B1F0",
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: "space-between"
    },
    alertContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        backgroundColor: "#ff4136",
        width: 50,
        height: 50,
        borderRadius: screen.width / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    circleCorrect: {
        backgroundColor: "#24d292"
    },
});



class Quiz extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        correctCount: 0,
        totalCount: 5,
        activeQuestionIndex: 0,
        answered: false,
        answerCorrect: false,
        second: 9
    };

    timer = () => {
        this.setState(prevState => {
            return {second: prevState.second - 1}
        });
        if (this.state.second === 0) {
            // clearInterval(this.timerIntevarl)
            this.setState({second: 9})
            setTimeout(() => this.nextQuestion(), 750)
        }
    }

    componentDidMount() {
        this.timerIntevarl = setInterval(() => this.timer(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerIntevarl)
    }


    answer = correct => {
        this.setState(
            state => {
                const nextState = { answered: true };

                if (correct) {
                    nextState.correctCount = state.correctCount + 1;
                    nextState.answerCorrect = true;
                } else {
                    nextState.answerCorrect = false;
                }

                return nextState;
            },
            () => {
                setTimeout(() => {
                    this.nextQuestion();
                    this.setState({second: 9})
                    clearInterval(this.timerIntevarl)
                    this.timerIntevarl = setInterval(() => this.timer(), 1000);
                }, 750);
            }
        );
    };

    nextQuestion = () => {
        this.setState(state => {
            const nextIndex = state.activeQuestionIndex + 1;

            if (nextIndex >= state.totalCount) {
                return this.props.navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'AfterQuiz',
                        params: {
                            ansCount: this.state.totalCount ,
                            correctAnsCount: this.state.correctCount,
                            totalCount: this.state.totalCount
                        }
                    }],

                });
            }
            clearInterval(this.timerIntevarl)
            this.timerIntevarl = setInterval(() => this.timer(), 1000);
            return {
                activeQuestionIndex: nextIndex,
                answered: false
            };
        });
    };

    render() {
        const questions = this.props.route.params.questionList;
        const question = questions[this.state.activeQuestionIndex];
        console.log('questions',questions)
        return (
            <Container>
                <Gradient style={{paddingTop: 100,justifyContent: 'space-around', position: 'relative'}}>
                    <Alert
                        correct={this.state.answerCorrect}
                        visible={this.state.answered}
                    />
                    <View>
                        <BoldText style={{fontSize: 30, color: '#fff'}}>{question.questionText}</BoldText>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <ButtonContainer>
                            {question.answers.map(answer => (
                                <Button
                                    key={answer.id}
                                    text={answer.text}
                                    onPress={() => this.answer(answer.isCorrect)}
                                />
                            ))}
                        </ButtonContainer>
                        <BoldText style={{marginVertical: 20, fontSize: 25,}}>
                            {`00:0${this.state.second}`}
                        </BoldText>
                        <Row style={{justifyContent: 'space-between', width: '100%'}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <BoldText style={{color: '#fff', fontSize: 22}}>سوال</BoldText>
                                <BoldText style={styles.text}>
                                    {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
                                </BoldText>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <BoldText style={{color: '#fff', fontSize: 22}}>جواب صحیح</BoldText>
                                <BoldText style={styles.text}>
                                    {`${this.state.correctCount}/${this.state.totalCount}`}
                                </BoldText>
                            </View>
                        </Row>
                    </View>

                </Gradient>
                {/*</SafeAreaView>*/}

            </Container>
        );
    }
}

export default Quiz;
