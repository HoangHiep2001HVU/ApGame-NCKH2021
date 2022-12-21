import React from "react";
import axios from "axios";
import {Text, View, ImageBackground, TouchableOpacity, StyleSheet, Alert} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default class Answer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
          question:[]
        }
      }

    componentDidMount(){
        const database = this.props.route.params.data;
        const id = this.props.route.params.id;
        // console.log(this.props.route.params);
        // axios.get('/' + database + "?id=" + id)
        //   .then(res =>{
        //     this.setState({
        //       question: res.data
        //     })
        //   })
        //   .catch(error=>{
        //     console.error(error)
        //   })

        let item = database.filter((q) => {
            return q.id === id
        })

        this.setState({
            question: item
        })
      }
    
    check(choice, answer){
        const { navigation } = this.props;
        if(answer==choice){
            navigation.navigate('Notification', {
                notification: true,
                id: this.props.route.params.id,
                data: this.props.route.params.data,
              });
        }
        else{
            navigation.navigate('Notification', {
                notification: false,
                id: this.props.route.params.id,
                data: this.props.route.params.data,
              });
        }
    }
    render(){
        const answer = this.state.question.map(q =>(
            <ImageBackground key={q.id} style={styles.container} source={q.image}>
                <View style={styles.info} >
                    <Text style={styles.name}>{q.name}</Text>
                    <View style={styles.answers}>
                        <View style={styles.answer}>
                            <TouchableOpacity style={styles.choice} onPress={()=>this.check(q.A, q.answer)}>
                                <Text style={styles.txt}>A. {q.A}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.choice} onPress={()=>this.check(q.B, q.answer)}>
                                <Text style={styles.txt}>B. {q.B}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.answer}>
                            <TouchableOpacity style={styles.choice} onPress={()=>this.check(q.C, q.answer)}>
                                <Text style={styles.txt}>C. {q.C}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.choice} onPress={()=>this.check(q.D, q.answer)}>
                                <Text style={styles.txt}>D. {q.D}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        ));
        return(
            <>
                {answer}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: "column-reverse",
    },
    info: {
        padding: 8,
        alignItems: "center",
        marginBottom: 30,
    },
    name: {
        fontFamily: 'UVNBanhMi',
        width: "90%",
        fontSize: 24,
        marginBottom: 8,
        color: "#ff6000",
    },
    answers: {
        width: "90%",
    },
    choice: {
        backgroundColor: '#ffdf2b',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    },
    answer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txt: {
        fontSize: 24,
        fontFamily: 'UVNBanhMi',
        fontWeight: 'bold',
        color: '#ff6000',
    },
})