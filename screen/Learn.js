import React, {Component} from "react";
import { Text, View, Image, StyleSheet, FlatList, Dimensions } from "react-native";

export default class LearnScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            img: [
                {id: 1, url: require("../assets/images/learn/c1_b1_d1.gif")},
                {id: 2, url: require("../assets/images/learn/c1_b1_d2.gif")},
                {id: 3, url: require("../assets/images/learn/c1_b1_d1.gif")},
                {id: 4, url: require("../assets/images/learn/c1_b1_d2.gif")},
            ]
        }
    }
    
    render(){
        const { img }= this.state;
        return (
            <FlatList 
                data={img}
                renderItem={({item})=>{
                    return(
                        <Image source={item.url} style={styles.img}/>
                    )
                }}
                keyExtractor= {item=>item.id}
                contentContainerStyle={styles.container}
            />
        )
    }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    img: {
        width: width,
        height: height-160,
        marginVertical: 20,
        resizeMode: "cover"
    }
  });