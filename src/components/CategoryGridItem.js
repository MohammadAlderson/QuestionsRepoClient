import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {SecondaryButton} from "../ui";
import Technology from './../../assets/icons/categories/technology.svg'
import Sports from './../../assets/icons/categories/sports.svg'
import Scientific from './../../assets/icons/categories/scientific.svg'
import General from './../../assets/icons/categories/general.svg'
import Religious from './../../assets/icons/categories/religious.svg'
import Historical from './../../assets/icons/categories/historical.svg'
import Default from './../../assets/icons/categories/default.svg'

const iconWidth = 40;
const iconHeight = 40;

function CategoryGridItem(props) {
    const {type} = props.item
    let icon;
    switch (type) {
        case 'historical':
            icon = <Historical width={iconWidth} height={iconHeight} />;
            break;
        case 'religious':
            icon = <Religious width={iconWidth} height={iconHeight} />;
            break;
        case 'scientific':
            icon = <Scientific width={iconWidth} height={iconHeight} />;
            break;
        case 'general':
            icon = <General width={iconWidth} height={iconHeight} />;
            break;
        case 'sports':
            icon = <Sports width={iconWidth} height={iconHeight} />;
            break;
        case 'technology':
            icon = <Technology width={iconWidth} height={iconHeight} />;
            break;
        default:
            icon = <Default width={iconWidth} height={iconHeight} />

    }

    return (
        <View style={CategoryGridStyles.container}>
            {icon}
            <Text style={CategoryGridStyles.text}>{props.item.name}</Text>
        </View>
    )
}

const CategoryGridStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 4,
        height: 150,
        elevation: 3,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFE',
        borderWidth: 1.5,
        borderColor: '#874fcc',
        marginVertical: 10
    },
    text:{fontFamily: 'IRANYekanMobileBold', fontSize: 18, color: '#874fcc', marginTop: 10}
})

export default CategoryGridItem;
