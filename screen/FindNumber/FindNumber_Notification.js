import React from "react";
import { ImageBackground, TouchableOpacity, View, StyleSheet, Text } from "react-native";

import bg_win from "../../assets/images/findNumber/2.gif";
import bg_lose from "../../assets/images/findNumber/1.gif";

export default class FindNumber_Notification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            check: this.props.route.params.check_nb,
        }
    }

    componentDidMount(){
        const check_nb = this.props.route.params.check_nb;
        console.log(this.props.route.params.check_nb);
    }

    render(){
        const {navigation} = this.props;
        if(this.state.check){
            return(
                <ImageBackground source={bg_win} style={styles.container}>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>Màn tiếp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={()=>{
                            navigation.navigate("Game")
                        }}>
                            <Text style={styles.txt}>Thoát</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            );
        }
        else{
            return(
                <ImageBackground source={bg_lose} style={styles.container}>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{
                            navigation.navigate("FindNumbers")
                        }}>
                            <Text style={styles.txt}>Chơi lại</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={()=>{
                            navigation.navigate("Game")
                        }}>
                            <Text style={styles.txt}>Thoát</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    btns: {
        width: 300,
        display: "flex",
        flexDirection: "row",
        marginBottom: 100,
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#90cbd3",
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    txt: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});