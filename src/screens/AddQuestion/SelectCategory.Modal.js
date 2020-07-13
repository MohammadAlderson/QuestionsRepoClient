import React from 'react';
import {FlatList, Modal, TouchableOpacity, View, StyleSheet} from "react-native";
import {Icon} from "native-base";
import {NormalText} from "../../ui";

function SelectCategoryModal(props) {

    const {setCategoryModalState, categoryModalState, categoryList, setCategoryId, setCategoryName} = props

    return (
        <Modal
            animationType="slide"
            visible={categoryModalState}
            transparent={true}
            onRequestClose={() => setCategoryModalState(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalLayout}>
                    <TouchableOpacity
                        style={styles.modalCloseBtn}
                        onPress={() => setCategoryModalState(false)}
                    >
                        <Icon name="md-close" type="Ionicons" style={styles.modalCloseBtnIcon}/>
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
                                style={styles.modalItems}>
                                <NormalText>{item.name}</NormalText>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {flex: 1, backgroundColor: '#0000008a',},
    modalLayout: {padding: 10, margin: 20, backgroundColor: '#fff', borderRadius: 10, flex: 1},
    modalCloseBtn: {alignSelf: 'flex-end', paddingRight: 10, color: '#194b9a',},
    modalCloseBtnIcon: {color: '#354561'},
    modalItems: {paddingVertical: 10, paddingHorizontal: 5, marginVertical: 5},
})

export default SelectCategoryModal;
