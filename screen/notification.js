import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';

import bgtrue from "../assets/true.gif";
import bgfalse from "../assets/false.gif";

export default class Notification extends React.Component {

    constructor (props){
        super(props);
        this.state={
            _notification: "",
            check: "false",
        }
    }

    componentDidMount(){
        const notification =  this.props.route.params.notification;
        if(notification){
            this.setState({_notification: "Hoan hô đúng rồi", check: "true"})
        }
        else{
            this.setState({_notification: "Rất tiếc trả lời sai rồi", check: "false"})
        }
    }

    next(id, data){
        const { navigation } = this.props;
        // console.log(navigation);
        // navigation.navigate('Answer', {
        //     id: id + 1,
        //     data: data, 
        // })

        navigation.dispatch(
            StackActions.replace('Answer', {
                id: id + 1,
                data: data, 
            })
          );
    }

    back(){
        const { navigation } = this.props;
        navigation.goBack();
    }

    render(){
        const data = this.props.route.params.data;
        const id = this.props.route.params.id;
        if(this.state.check=="true"){
            return (
                <View style={styles.container}>
                    <ImageBackground source={bgtrue} style={styles.body}>
                        <Text style={styles.not}>{this.state._notification}</Text>
                        <View style={styles.btns}>
                            <TouchableOpacity>
                                <Text style={styles.btn}>Giải thích</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.next(id, data)}>
                                <Text style={styles.btn}>Câu tiếp</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <ImageBackground source={bgfalse}style={styles.body}>
                        <Text style={styles.not}>{this.state._notification}</Text>
                        <View style={styles.btns}>
                            <TouchableOpacity  onPress={()=>this.back()}>
                                <Text style={styles.btn}>Làm lại</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btn}>Giải thích</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 150,
    },
    not: {
        fontFamily: "UVNBanhMi",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
    },
    btns: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 50,
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#fdbe14",
        fontFamily: "UVNBanhMi",
        color: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 10,
    }
});