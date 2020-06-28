import React from 'react';
import Container from "../ui/Container.Ui";
import {ActivityIndicator, FlatList} from 'react-native';
import {BoldText, CustomHeader, PrimaryButton, Row} from "../ui";
import {domain, headers} from "../config";

function CategoriesList(props) {

    const [categoryList, setCategoryList] = React.useState();
    const [loading, setLoading] = React.useState(true);

    async function fetchCategoryList() {
        let url = `${domain}/api/getAllCategories`;
        try {
            let response = await fetch(url, {method: 'POST', headers})
            let res = await response.json();
            if (res.statusCode === 200) {
                setCategoryList(res.data)
                setLoading(false)
            }
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        fetchCategoryList();
    }, [])

    return (
        <Container>
            <CustomHeader backBtn title="دسته بندی ها" navigation={props.navigation}/>
            {
                loading ? (
                    <ActivityIndicator size="large"/>
                ) : (
                    <FlatList
                        data={categoryList}
                        keyExtractor={item => item._id}
                        renderItem={({item}) => (
                            <Row style={{width: '100%', justifyContent: 'center'}}>
                                <PrimaryButton btnText={item.name} style={{borderRadius: 4, width: 250, height: 70}}/>
                            </Row>
                        )}
                        ListHeaderComponent={() => <Row
                            style={{paddingHorizontal: 10, justifyContent: 'flex-end', marginVertical: 10}}>
                            <BoldText style={{fontSize: 18}} >یک دسته بندی را انتخاب کنید</BoldText>
                        </Row>}
                    />
                )
            }
        </Container>
    )
}

export default CategoriesList;
