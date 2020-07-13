import React from 'react';
import {BoldText, Container, CustomHeader, NormalText} from "../../ui";
import {ActivityIndicator, FlatList, View, StyleSheet} from "react-native";

function RenderListItem(item) {
    return (
        <View style={styles.listItemContainer}>
            {item.questionText &&
            <BoldText style={styles.listItemCaption}>{item.questionText}</BoldText>}
            {item.categoryName &&
            <NormalText style={styles.listItemCategory}>{item.categoryName}</NormalText>}
        </View>
    )
}

function UserQuestionsView(props) {

    const {loading, userQuestions, navigation} = props

    return (
        <Container>
            <CustomHeader navigation={navigation} backBtn title="سوال های من"/>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#874fcc"/>
                </View>
            ) : (
                <FlatList
                    contentContainerStyle={styles.listStyle}
                    data={userQuestions}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => RenderListItem(item)}
                />
            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    loaderContainer: {width: '100%', alignItems: 'center', marginBottom: 10},
    listStyle: {padding: 10},
    listItemContainer: {
        width: '100%', elevation: 2, alignItems: 'flex-end', justifyContent: 'space-between',
        padding: 10, height: 80, backgroundColor: '#fff', marginVertical: 5, borderRadius: 4
    },
    listItemCaption: {fontSize: 18, color: '#000059'},
    listItemCategory: {fontSize: 16, color: '#d558c8'}
})

export default UserQuestionsView;
