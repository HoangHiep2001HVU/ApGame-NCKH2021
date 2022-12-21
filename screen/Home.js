import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

import background from '../assets/bg.jpg';
import learn from '../assets/learn.png';

export const categories=[
  {"id": 1, "name": "Học toán"},
  {"id": 2, "name": "Đố vui"},
  {"id": 3, "name": "Trò chơi"},
  {"id": 4, "name": "Nhiệm vụ"},
];

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories:[
        {"id": 1, "name": "Học toán"},
        {"id": 2, "name": "Đố vui"},
        {"id": 3, "name": "Trò chơi"},
        {"id": 4, "name": "Nhiệm vụ"},
      ]
    }
  }

  componentDidMount(){
    // axios.get('/categories')
    //   .then(res =>{
    //     this.setState({
    //       categories: res.data
    //     })
    //   })
    //   .catch(error=>{
    //     console.error(error)
    //   })
  }

  render(){
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <ImageBackground source={background} style={styles.bg}>
        <FlatList 
          data={categories}
          renderItem={({ item }) => 
          {
            if(item.id==3){
              return (
                <CategoryListItem 
                  category={item}
                  icon = {learn}
                  onPress={()=>navigation.navigate('Game', {
                    id_categories: item.id,
                    categoryName: item.name,
                  })}  
                />
              )
            }
            else{
              if(item.id==1){
                return (
                  <CategoryListItem 
                    category={item} 
                    icon = {learn}
                    onPress={()=>navigation.navigate('ListQuestion', {
                      database: 'math',
                      categoryName: item.name
                    })}  
                  />
                )
              }
              else if(item.id==2){
                return (
                  <CategoryListItem 
                    category={item} 
                    icon = {learn}
                    onPress={()=>navigation.navigate('ListQuestion', {
                      database: 'riddle',
                      categoryName: item.name
                    })}  
                  />
                )
              }
              else{
                // return(
                //   <Text>{item.name}</Text>
                // )
              }
            }
          }
          }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingRight: 16,
   paddingLeft: 16,
   justifyContent: "center",
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  }
});
