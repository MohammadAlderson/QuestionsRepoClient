import React from 'react';
import {CustomToast} from "../../ui";
import {UserContext} from "../../context/UserContext";
import {domain, headers} from "../../config";
import ErrorToast from "../../components/ErrorToast";
import AddQuestionView from "./AddQuestion.View";

function AddQuestionContainer(props) {

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
            ErrorToast()
            console.log(e)
        }
    }

    React.useEffect(() => {
        getCategories();
    }, [])

    return (
        <AddQuestionView
            navigation={props.navigation} questionInput={questionInput} setQuestion={setQuestion}
            setCategoryModalState={setCategoryModalState}
            categoryName={categoryName} firstAnsInput={firstAnsInput} setFirstAns={setFirstAns}
            secondAnsInput={secondAnsInput} setSecondAns={setSecondAns}
            thirdAnsInput={thirdAnsInput} setThirdAns={setThirdAns} forthAnsInput={forthAnsInput}
            setForthAns={setForthAns}
            forthAnsCorrect={forthAnsCorrect} setForthAnsCorrect={setForthAnsCorrect}
            setFirstAnsCorrect={setFirstAnsCorrect}
            setSecondAnsCorrect={setSecondAnsCorrect} setThirdAnsCorrect={setThirdAnsCorrect}
            thirdAnsCorrect={thirdAnsCorrect}
            secondAnsCorrect={secondAnsCorrect} firstAnsCorrect={firstAnsCorrect} createQuestion={createQuestion}
            categoryModalState={categoryModalState} categoryList={categoryList} setCategoryId={setCategoryId}
            setCategoryName={setCategoryName}
        />
    )
}

export default AddQuestionContainer
