import React, {Component} from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import bg from "../assets/setting_bg.jpg";

export default class SettingScreen extends Component{
    render(){
        return (
            <View style= {styles.container}>
                <ImageBackground source={bg} style={styles.bg}>
                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.ch}>
                            <Text style={styles.txt}>Tài khoản</Text>
                            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" 
                                color={"#fff"} size={30} style={styles.icon}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.ch}>
                            <Text style={styles.txt}>Cài đặt chung</Text>
                            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" 
                                color={"#fff"} size={30} style={styles.icon}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.ch}>
                            <Text style={styles.txt}>Thông tin ứng dụng</Text>
                            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" 
                                color={"#fff"} size={30} style={styles.icon}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.ch}>
                            <Text style={styles.txt}>Hỗ trợ</Text>
                            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" 
                                color={"#fff"} size={30} style={styles.icon}/>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
    choice: {
        marginHorizontal: 30,
        marginVertical: 15,
        borderColor: "#000",
        borderWidth: 3,
        display: "flex",
    },
    txt: {
        fontFamily: "UVNBanhMi",
        fontSize: 26,
        color: "#fff",
    },
    ch: {
        backgroundColor: "#90cbd3",
        padding: 20,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: -10,
        marginRight: -10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        marginLeft: 20
    }
});