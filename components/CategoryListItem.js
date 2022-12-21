import * as React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import bg_menu from '../assets/m1.png';

export default function CategoryListItem(props){
    const { category, icon, onPress } = props;
    
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <ImageBackground source={bg_menu} style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImage} source={icon} />
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 28,
        borderRadius: 4,
        // backgroundColor: '#fff',
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowRadius: 10,
        // shadowOffset: {width: 0, height: 0},
        marginBottom: 20,
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
        color: '#fff',
        fontSize: 35,
        // shadowColor: '#fff',
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        // shadowOffset: {width: 0, height: 0},
        fontFamily: 'UVNBanhMi',
    },
});