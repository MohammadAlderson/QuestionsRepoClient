import React from "react";
import QuizView from "./Quiz.View";


class QuizContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        correctCount: 0,
        totalCount: this.props.route.params.questionsCount,
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
        return (
            <QuizView
                {...this.props}
                activeQuestionIndex={this.state.activeQuestionIndex}
                answerCorrect={this.state.answerCorrect}
                answered={this.state.answered}
                answer={this.answer}
                second={this.state.second}
                totalCount={this.state.totalCount}
                correctCount={this.state.correctCount}
            />
        )
    }
}



export default QuizContainer;
