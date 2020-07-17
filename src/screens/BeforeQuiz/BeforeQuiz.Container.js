import React from 'react';
import {domain, headers} from "../../config";
import CheckCategoryIconType from "../../utils/CheckCategotyIconType";
import BeforeQuizView from "./BeforeQuiz.View";

function BeforeQuizContainer(props) {
    const iconWidth = 80;
    const iconHeight = 80;
    const {params} = props.route
    const take = 5;
    const [questionList, setQuestionList] = React.useState();
    const [questionListNoData, setQuestionListNoData] = React.useState(false)
    const [loader, setLoader] = React.useState(true)
    const [questionsCount, setQuestionsCount] = React.useState(0)
    console.log('params.categoryId', params.categoryId)

    async function fetchQuestionList() {
        let url = `${domain}/api/getQuestionByCategory`;
        let body = JSON.stringify({
            categoryId: params.categoryId,
            take
        })
        try {
            let res = await fetch(url, {body, method: 'POST', headers});
            let response = await res.json();

            if (response.statusCode === 200) {
                setLoader(false)
                console.log('response.data', response.data)
                if (response.data !== undefined && response.data.length > 0) {
                    setQuestionsCount(response.data.length)
                    setQuestionList(response.data)
                    setQuestionListNoData(false);
                } else {
                    console.log('setQuestionListNoData(true)')
                    setQuestionListNoData(true)
                }
            }
        } catch (e) {
            setLoader(false)
            console.log(e)
        }
    }

    React.useEffect(() => {
        const parent = props.navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        })
        fetchQuestionList();
        return () => parent.setOptions({
            tabBarVisible: true
        })
    }, [])

    let icon = CheckCategoryIconType(params.categoryType, iconWidth, iconHeight, 'white')

    return (
        <BeforeQuizView icon={icon} questionList={questionList} questionsCount={questionsCount} take={take} loader={loader}
                        questionListNoData={questionListNoData} {...props} />
    )
}

export default BeforeQuizContainer
