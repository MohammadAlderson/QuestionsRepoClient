import React from 'react';
import {domain, headers} from "../../config";
import CategoriesListView from "./CategoriesList.View";

function CategoriesListContainer(props) {

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
        <CategoriesListView
            navigation={props.navigation}
            loading={loading}
            categoryList={categoryList}
        />
    )
}

export default CategoriesListContainer;
