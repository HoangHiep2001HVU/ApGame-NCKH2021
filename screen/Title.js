import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

import avatar from "../assets/avatar.jpg";

export default class Title extends React.Component {
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.left}>
                    <Image style={styles.avatar} source={avatar} />
                    <Text style={styles.name}>Hoàng Hiệp</Text>
                </View>

                <View style={styles.right}> 
                    <Text style={styles.coins}>Điểm: 10000</Text>
                    <Text style={styles.level}>Level: 1</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#90cbd3",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // marginTop: 20,
    },
    left: {
        width: "40%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontFamily: "UVNBanhMi",
        color: "#fff",
        fontSize: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    right: {
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    coins: {
        color: "#fff",
        fontFamily: "UVNBanhMi",
        fontSize: 20,
        marginLeft: 10,
    },
    level: {
        color: "#fff",
        fontFamily: "UVNBanhMi",
        marginRight: 20,
        fontSize: 20,
    }
});