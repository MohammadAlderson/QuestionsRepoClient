import React from 'react';
import {domain, headers} from "../../config";
import {UserContext} from "../../context/UserContext";
import AfterQuizView from "./AfterQuiz.View";



function AfterQuizContainer(props) {

    const {userId, fetchUserData, userData} = React.useContext(UserContext)
    const {params} = props.route


    async function SetUserAnswers() {
        let url = `${domain}/api/setUserAnswers`;
        let body = JSON.stringify({
            userId,
            ansCount: params.ansCount,
            correctAnsCount: params.correctAnsCount
        })
        let res = await fetch(url, {body, headers, method: 'POST'})
        let response = await res.json();
        if (response.statusCode === 200) {
            console.log('done')
            fetchUserData();
        }
    }

    React.useEffect(() => {
        SetUserAnswers();
        console.log('userData', userData)
    }, [])

    return (
        <AfterQuizView
            {...props}
        />
    )
}

export default AfterQuizContainer
