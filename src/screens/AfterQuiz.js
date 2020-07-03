import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {BoldText, Container, CustomHeader, Gradient, NormalButton, NormalText, Row} from "../ui";
import {domain, headers} from "../config";
import {UserContext} from "../context/UserContext";



function AfterQuiz(props) {

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
        <Container>
            {/*<CustomHeader backBtn navigation={props.navigation} />*/}
            <Gradient>
                <BoldText style={{fontSize: 40, color: '#fff', marginBottom: 10}}>آمار</BoldText>
                    <View style={{width: '50%', marginVertical: 16}}>
                        <Row style={{width: '100%', justifyContent: 'space-between', marginVertical: 8}}>
                            <BoldText style={{fontSize: 21, color: '#fff'}}>{params.totalCount}</BoldText>
                            <BoldText style={{fontSize: 21, color: '#fff'}}>سوالات</BoldText>
                        </Row>
                        <Row style={{width: '100%', justifyContent: 'space-between', marginVertical: 8}}>
                            <BoldText style={{fontSize: 21, color: '#fff'}}>{params.correctAnsCount}</BoldText>
                            <BoldText style={{fontSize: 21, color: '#fff'}}>جواب های صحیح</BoldText>
                        </Row>
                        {/*<Row style={{width: '100%', justifyContent: 'space-between', marginVertical: 8}}>*/}
                        {/*    <BoldText style={{fontSize: 25, color: '#fff'}}>{newData}</BoldText>*/}
                        {/*    <BoldText style={{fontSize: 25, color: '#fff'}}>همه جواب ها</BoldText>*/}
                        {/*</Row>*/}
                    </View>
                <NormalButton btnText="اتمام"
                              // onPress={() => props.navigation.popToTop()}
                    onPress={() => props.navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Home',
                        }],
                    })}
                    textStyle={{fontFamily: 'IRANYekanMobileBold', fontSize: 24}}
                    style={{height: 75, borderRadius: 4, marginTop: 60}}/>
            </Gradient>
        </Container>
    )
}

export default AfterQuiz
