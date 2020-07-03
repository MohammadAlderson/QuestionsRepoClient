import React from 'react';
import {
    Body,
    BoldText,
    Container,
    CustomHeader, CustomTextInput,
    CustomToast, Gradient,
    NormalText,
    PrimaryButton,
    Row,
    SecondaryButton
} from "../ui";
import {Icon} from "native-base";
import {View, Modal, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import {UserContext} from "../context/UserContext";
import {domain, headers} from "../config";
import LinearGradient from "react-native-linear-gradient";

function AddQuestion(props) {

    const questionInput = React.useRef();
    const firstAnsInput = React.useRef();
    const secondAnsInput = React.useRef();
    const thirdAnsInput = React.useRef();
    const forthAnsInput = React.useRef();

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
        if (question === '') {
            CustomToast('لطفا سوال را وارد کنید!', 4000, "danger")
            return false;
        } else if (firstAns === '' || secondAns === '' || thirdAns === '' || forthAns === '') {
            CustomToast('لطفا پاسخ ها را وارد کنید!', 4000, "danger")
            return false;
        } else if (!firstAnsCorrect && !secondAnsCorrect && !thirdAnsCorrect && !forthAnsCorrect) {
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
        console.log('questionInput', questionInput)
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
                    questionInput.current && questionInput.current.clear();
                    firstAnsInput.current && firstAnsInput.current.clear();
                    secondAnsInput.current && secondAnsInput.current.clear();
                    thirdAnsInput.current && thirdAnsInput.current.clear();
                    forthAnsInput.current && forthAnsInput.current.clear();
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function getCategories() {
        const url = `${domain}/api/getAllCategories`
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
                            style={{alignSelf: 'flex-end', paddingRight: 10, color: '#194b9a',}}
                            onPress={() => setCategoryModalState(false)}
                        >
                            <Icon name="md-close" type="Ionicons" style={{color: '#354561'}}/>
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
                    <CustomTextInput
                        inputRef={questionInput}
                        placeholder='سوال...'
                        onChangeText={(text) => setQuestion(text)}
                        inputTitle="سوال:"
                    />
                </View>
                <View style={{marginVertical: 10}}>
                    <BoldText style={{fontSize: 17, marginBottom: 8}}>دسته بندی:</BoldText>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setCategoryModalState(true)}
                    >
                        <Row style={{justifyContent: 'flex-end'}}>
                            <Gradient style={{
                                elevation: 2,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 50,
                                width: 200,
                                borderRadius: 4,
                                marginHorizontal: 8,
                                paddingHorizontal: 16
                            }}>
                                <Icon name="md-arrow-dropdown" type="Ionicons"
                                      style={{color: '#FFFFFE', marginRight: 10}}/>
                                <NormalText style={{color: '#FFFFFE', fontSize: 17}}>{categoryName}</NormalText>
                            </Gradient>
                        </Row>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <BoldText style={{alignSelf: 'flex-end', fontSize: 17}}>پاسخ ها:</BoldText>
                    <CustomTextInput
                        inputRef={firstAnsInput}
                        placeholder='گزینه 1 ...'
                        onChangeText={(text) => setFirstAns(text)}
                        inputTitle="گزینه 1"
                    />
                    <CustomTextInput
                        inputRef={secondAnsInput}
                        placeholder='گزینه 2 ...'
                        onChangeText={(text) => setSecondAns(text)}
                        inputTitle="گزینه 2"
                    />
                    <CustomTextInput
                        inputRef={thirdAnsInput}
                        placeholder='گزینه 3 ...'
                        onChangeText={(text) => setThirdAns(text)}
                        inputTitle="گزینه 3"
                    />
                    <CustomTextInput
                        inputRef={forthAnsInput}
                        placeholder='گزینه 4 ...'
                        onChangeText={(text) => setForthAns(text)}
                        inputTitle="گزینه 4"
                    />
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                    <PrimaryButton style={{width: '90%'}} onPress={() => createQuestion()} btnText="ارسال"/>
                </View>
            </ScrollView>
        </Container>
    )
}

const addQuestionStyles = StyleSheet.create({

})

export default AddQuestion
