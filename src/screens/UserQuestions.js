import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {BoldText, Container, CustomHeader, LightText, NormalText} from "../ui";
import {domain, headers} from "../config";

function UserQuestions(props) {

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
        <Container>
            <CustomHeader navigation={props.navigation} backBtn title="سوال های من"/>
            {loading ? (
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <ActivityIndicator size="large" color="#874fcc"/>
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={{padding: 10}}
                    data={userQuestions}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => {
                        console.log('item', item)
                        return (
                            <View style={{
                                width: '100%',
                                elevation: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                padding: 10,
                                height: 80,
                                backgroundColor: '#e5f5ef',
                                marginVertical: 5,
                                borderRadius: 4
                            }}>
                                {item.questionText &&
                                    <BoldText style={{fontSize: 18, color: '#000059'}}>{item.questionText}</BoldText>}
                                {item.categoryName &&
                                    <NormalText style={{fontSize: 16, color: '#d558c8'}}>{item.categoryName}</NormalText>}
                            </View>
                        )
                    }}
                />
            )}
        </Container>
    )

}

export default UserQuestions;
// {
//     "answers": [
//     {
//         "text": "Ronaldo",
//         "isCorrect": true
//     },
//     {
//         "text": "Benzema",
//         "isCorrect": false
//     },
//     {
//         "text": "Navas",
//         "isCorrect": false
//     },
//     {
//         "text": "Ramos",
//         "isCorrect": false
//     }
//     ],
//     "_id": "5ef8d19afb7ac747205a63d2",
//     "questionText": "best soccer player?",
//     "createdDate": 1593364890606,
//     "userId": "5ef76dd02ea0780e1013b1e1",
//     "categoryId": "5ef5e4c0f7ac6025004b8408",
//      "categoryName" : "....."
//     "__v": 0
// }
