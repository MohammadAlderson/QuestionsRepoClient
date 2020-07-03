import React from 'react';
import Container from "../ui/Container.Ui";
import {ActivityIndicator, FlatList} from 'react-native';
import {BoldText, CustomHeader, PrimaryButton, Row, SecondaryButton} from "../ui";
import {domain, headers} from "../config";
import CategoryGridItem from "../components/CategoryGridItem";

function CategoriesList(props) {

    const [categoryList, setCategoryList] = React.useState();
    const [loading, setLoading] = React.useState(true);

    async function fetchCategoryList() {
        let url = `${domain}/api/getAllCategories`;
        console.log('url', url)
        try {
            let response = await fetch(url, {method: 'POST', headers})
            let res = await response.json();
            if (res.statusCode === 200) {
                setCategoryList(res.data)
                setLoading(false)
            }
            console.log(res.data)
        } catch (e) {
            console.log('error get category list', e)
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
                        numColumns={2}
                        renderItem={({item}) => <CategoryGridItem item={item} {...props} />}
                        ListHeaderComponent={() => <Row
                            style={{paddingHorizontal: 10, justifyContent: 'flex-end', marginVertical: 10}}>
                            <BoldText style={{fontSize: 18, color: '#874fcc'}}>یک دسته بندی را انتخاب کنید</BoldText>
                        </Row>}
                    />
                )
            }
        </Container>
    )
}

export default CategoriesList;
