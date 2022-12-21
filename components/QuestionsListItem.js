import React from "react";
import { Image, StyleSheet, View, Text,TouchableOpacity } from "react-native";

export default function QuestionsListItem(props){
    const {questions, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.txt}>Câu {questions.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#90cbd3',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
    },
    txt: {
        fontFamily: "UVNBanhMi",
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    }
});