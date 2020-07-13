import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from "react-native";
import {BoldText, CustomHeader, Container, Row} from "../../ui";
import CategoryGridItem from "../../components/CategoryGridItem";

function CategoriesListView(props) {

    const {loading, navigation, categoryList} = props

    return (
        <Container>
            <CustomHeader backBtn title="دسته بندی ها" navigation={navigation}/>
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
                            style={styles.listHeaderContainer}>
                            <BoldText style={styles.listHeaderCaption}>یک دسته بندی را انتخاب کنید</BoldText>
                        </Row>}
                    />
                )
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    listHeaderContainer: {paddingHorizontal: 10, justifyContent: 'flex-end', marginVertical: 10},
    listHeaderCaption: {fontSize: 18, color: '#874fcc'}
})

export default CategoriesListView;
