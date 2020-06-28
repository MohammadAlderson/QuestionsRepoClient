import React from 'react';
import {
    Body,
    BoldText,
    Container,
    CustomHeader,
    CustomToast,
    NormalText,
    PrimaryButton,
    Row,
    SecondaryButton
} from "../ui";
import {Icon} from "native-base";
import {View, Modal, TextInput, ScrollView, TouchableOpacity, FlatList} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import {UserContext} from "../context/UserContext";
import {domain, headers} from "../config";

function AddQuestion(props) {

    const {userId} = React.useContext(UserContext);

    const [question, setQuestion] = React.useState('')

    const [categoryModalState, setCategoryModalState] = React.useState(false)
    const [categoryId, setCategoryId] = React.useState('')
    const [categoryName, setCategoryName] = React.useState('همه')
    const [categoryList, setCategoryList] = React.useState([])

    const [firstAnsCorrect, setFirstAnsCorrect] = React.useState(false);
    const [secondAnsCorrect, setSecondAnsCorrect] = React.useState(false);
    const [thirdAnsCorrect, setThirdAnsCorrect] = React.useState(false);
    const [forthAnsCorrect, setForthAnsCorrect] = React.useState(false);

    const [firstAns, setFirstAns] = React.useState('')
    const [secondAns, setSecondAns] = React.useState('')
    const [thirdAns, setThirdAns] = React.useState('')
    const [forthAns, setForthAns] = React.useState('')

    function questionValidator() {
        if(question === '') {
            CustomToast('لطفا سوال را وارد کنید!', 4000, "danger")
            return false;
        } else if(firstAns === '' || secondAns === '' || thirdAns === '' || forthAns === '') {
            CustomToast('لطفا پاسخ ها را وارد کنید!', 4000, "danger")
            return false;
        } else if(!firstAnsCorrect && !secondAnsCorrect && !thirdAnsCorrect && !forthAnsCorrect) {
            CustomToast('لطفا جواب صحیح را مشخص کنید!', 4000, "danger")
            return false;
        } else if (categoryId === '') {
            CustomToast('لطفا دسته بندی را مشخص کنید!', 4000, "danger")
            return false;
        } else {
            return true;
        }
    }

    async function createQuestion() {

        /***
         *
         * @param questionText @type {String}
         * @param answers @type {Array}
         * @param createdDate @type {Number}
         * @param userId @type {String}
         * @param categoryId @type {String}
         */
        const body = JSON.stringify({
            questionText: question,
            answers: [
                {
                    text: firstAns,
                    isCorrect: firstAnsCorrect,
                },
                {
                    text: secondAns,
                    isCorrect: secondAnsCorrect,
                },
                {
                    text: thirdAns,
                    isCorrect: thirdAnsCorrect,
                },
                {
                    text: forthAns,
                    isCorrect: forthAnsCorrect,
                },
            ],
            createdDate: new Date().getTime(),
            userId: userId,
            categoryId
        });
        // console.log('questionRef', questionRef.current)
        const url = `${domain}/api/createQuestion`
        if (questionValidator()) {
            try {
                let response = await fetch(url, {body, headers, method: 'POST'});
                let res = await response.json();
                console.log(res)
                if (res.statusCode === 200) {
                    CustomToast('سوال با موفقیت ایجاد شد!', 4000, "success")
                    setFirstAnsCorrect(false)
                    setSecondAnsCorrect(false);
                    setThirdAnsCorrect(false);
                    setForthAnsCorrect(false);
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function getCategories() {
        const url = 'http://192.168.43.92:4001/api/getAllCategories'
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {Accept: "application/json", "Content-Type": "application/json"}
            })
            let res = await response.json();
            if (res.statusCode === 200) {
                setCategoryList(res.data)
            }
            console.log('res', res)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getCategories();
    }, [])

    return (
        <Container>
            <Modal
                animationType="slide"
                visible={categoryModalState}
                transparent={true}
                onRequestClose={() => setCategoryModalState(false)}
            >
                <View style={{flex: 1, backgroundColor: '#0000008a',}}>
                    <View style={{padding: 10, margin: 20, backgroundColor: '#fff', borderRadius: 10, flex: 1}}>
                        <TouchableOpacity
                            style={{alignSelf: 'flex-end'}}
                            onPress={() => setCategoryModalState(false)}
                        >
                            <Icon name="md-close" type="Ionicons" style={{color: '#354561'}} />
                        </TouchableOpacity>
                        <FlatList
                            data={categoryList}
                            keyExtractor={(item) => item._id}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setCategoryId(item._id);
                                        setCategoryName(item.name);
                                        setCategoryModalState(false)
                                    }}
                                    style={{paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5}}>
                                    <NormalText>{item.name}</NormalText>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
            <CustomHeader title="ایجاد سوال" navigation={props.navigation}/>
            <ScrollView style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <BoldText style={{alignSelf: 'flex-end', fontSize: 17}}>سوال:</BoldText>
                    <TextInput
                        onChangeText={(text) => setQuestion(text)}
                        underlineColorAndroid="#354561"
                        style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                    />
                </View>
                <View style={{marginVertical: 10}}>
                    <BoldText style={{fontSize: 17, marginBottom: 8}}>دسته بندی:</BoldText>
                    <TouchableOpacity
                        onPress={() => setCategoryModalState(true)}
                    >
                        <Row style={{justifyContent: 'flex-end'}}>
                            <Icon name="md-arrow-dropdown" type="Ionicons" style={{color: '#354561', marginRight: 10}}/>
                            <NormalText style={{fontSize: 16}}>{categoryName}</NormalText>
                        </Row>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <BoldText style={{alignSelf: 'flex-end', fontSize: 17}}>پاسخ ها:</BoldText>
                    <View style={{alignItems: 'center', marginVertical: 15, width: '100%'}}>
                        <NormalText style={{alignSelf: 'flex-end', fontSize: 15}}>پاسخ 1:</NormalText>
                        <Row style={{width: '100%', alignItems: 'center'}}>
                            <CheckBox value={firstAnsCorrect} onValueChange={() => {
                                setFirstAnsCorrect(true);
                                setSecondAnsCorrect(false);
                                setThirdAnsCorrect(false);
                                setForthAnsCorrect(false);
                            }}/>
                            <TextInput
                                onChangeText={(text) => setFirstAns(text)}
                                underlineColorAndroid="#354561"
                                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                            />

                        </Row>
                    </View>
                    <View style={{alignItems: 'center', marginVertical: 15, width: '100%'}}>
                        <NormalText style={{alignSelf: 'flex-end', fontSize: 15}}>پاسخ 2:</NormalText>
                        <Row style={{width: '100%'}}>
                            <CheckBox value={secondAnsCorrect} onValueChange={() => {
                                setSecondAnsCorrect(true);
                                setFirstAnsCorrect(false);
                                setThirdAnsCorrect(false);
                                setForthAnsCorrect(false);
                            }}/>
                            <TextInput
                                onChangeText={(text) => setSecondAns(text)}
                                underlineColorAndroid="#354561"
                                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                            />
                        </Row>
                    </View>
                    <View style={{alignItems: 'center', marginVertical: 15, width: '100%'}}>
                        <NormalText style={{alignSelf: 'flex-end', fontSize: 15}}>پاسخ 3:</NormalText>
                        <Row style={{width: '100%'}}>
                            <CheckBox value={thirdAnsCorrect} onValueChange={() => {
                                setThirdAnsCorrect(true);
                                setFirstAnsCorrect(false);
                                setSecondAnsCorrect(false);
                                setForthAnsCorrect(false);
                            }}/>
                            <TextInput
                                onChangeText={(text) => setThirdAns(text)}
                                underlineColorAndroid="#354561"
                                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                            />
                        </Row>
                    </View>
                    <View style={{alignItems: 'center', marginVertical: 15, width: '100%'}}>
                        <NormalText style={{alignSelf: 'flex-end', fontSize: 15}}>پاسخ 4:</NormalText>
                        <Row style={{width: '100%'}}>
                            <CheckBox value={forthAnsCorrect} onValueChange={() => {
                                setForthAnsCorrect(true);
                                setFirstAnsCorrect(false);
                                setSecondAnsCorrect(false);
                                setThirdAnsCorrect(false);
                            }}/>
                            <TextInput
                                onChangeText={(text) => setForthAns(text)}
                                underlineColorAndroid="#354561"
                                style={{width: '100%', fontFamily: 'IRANYekanMobileMedium'}}
                            />
                        </Row>
                    </View>
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                    <SecondaryButton onPress={() => createQuestion()} btnText="ارسال"/>
                </View>
            </ScrollView>
        </Container>
    )
}

export default AddQuestion
