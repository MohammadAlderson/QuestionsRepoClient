import React from 'react';
import {domain, headers} from "../../config";
import UserQuestionsView from "./UserQuestions.View";

function UserQuestionsContainer(props) {

    const [userQuestions, setUserQuestions] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const {params} = props.route

    async function fetchUserQuestions() {
        const url = `${domain}/api/getUserQuestions`
        const body = JSON.stringify({
            userId: params.userId
        })

        try {
            let response = await fetch(url, {body, method: 'POST', headers})
            let res = await response.json();
            console.log('res', res)
            if (res.statusCode === 200) {
                console.log('res.data', res.data)
                setUserQuestions(res.data)
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        fetchUserQuestions();
    }, [])

    return (
        <UserQuestionsView
            loading={loading}
            userQuestions={userQuestions}
            navigation={props.navigation}
        />
    )

}

export default UserQuestionsContainer;

