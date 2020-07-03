import React from 'react';
import {
    BoldText,
    Container,
    CustomHeader,
    Gradient,
    NormalButton,
    NormalText,
    PrimaryButton,
    SecondaryButton
} from "../ui";
import {View} from "react-native";
import {domain, headers} from "../config";

function BeforeQuiz(props) {
    const {params} = props.route
    const take = 5;
    const [questionList, setQuestionList] = React.useState();
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
                console.log(response.data)
                setQuestionList(response.data)
            }
        } catch (e) {
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

    return (
        <Container>
            <Gradient>
                <BoldText style={{fontSize: 20, color: '#fff', marginBottom: 10}}>دسته بندی: {params.categoryName}</BoldText>
                <NormalText style={{fontSize: 20, color: '#fff'}}>تعداد سوال : {take}</NormalText>
                <NormalButton btnText="شروع"
                               onPress={() => props.navigation.navigate('Quiz', {
                                   questionList
                               })}
                               textStyle={{fontFamily: 'IRANYekanMobileBold', fontSize: 24}}
                               style={{height: 75, borderRadius: 4, marginTop: 60}}/>
                <NormalButton btnText="بازگشت"
                              onPress={() => props.navigation.pop()}
                              textStyle={{fontFamily: 'IRANYekanMobileBold', fontSize: 24, color: '#fff'}}
                              style={{height: 75, borderRadius: 4, marginTop: 20, backgroundColor: 'transparent', borderColor: '#fff'}}/>
            </Gradient>
        </Container>
    )
}

export default BeforeQuiz
