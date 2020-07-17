import React from 'react';
import {BoldText, Container, CustomHeader, NormalText} from "../../ui";
import {ActivityIndicator, FlatList, View, StyleSheet} from "react-native";
import UserWithOutQuestions from './../../../assets/icons/UserWithOutQuestions.svg'
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
            ) : userQuestions.length > 0 ? (
                <FlatList
                    contentContainerStyle={styles.listStyle}
                    data={userQuestions}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => RenderListItem(item)}
                />
            ) : (
                <View style={styles.emptyStateContainer}>
                    <UserWithOutQuestions width={100} height={100} />
                    <BoldText style={styles.emptyStateText}>
                        شما سوالی ایجاد نکردید!
                    </BoldText>
                </View>
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
    listItemCategory: {fontSize: 16, color: '#d558c8'},
    emptyStateContainer : {justifyContent: 'center', alignItems: 'center', flex: 1},
    emptyStateText: {color: '#d558c8', fontSize: 25, marginTop: 20}
})

export default UserQuestionsView;
