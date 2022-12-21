import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

import background from '../assets/bgGame.jpg';
import icon_game from '../assets/iconGame.png';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        games:[
          {"id": 1, "name": "Tìm số"},
          {"id": 2, "name": "Trò chơi 2"},
          {"id": 3, "name": "Trò chơi 3"},
          {"id": 4, "name": "Trò chơi 4"},
        ]
    }
  }

  componentDidMount(){
    // axios.get('/game')
    //   .then(res =>{
    //     this.setState({
    //         games: res.data
    //     })
    //   })
    //   .catch(error=>{
    //     console.error(error)
    //   })
  }

  render(){
    const { navigation } = this.props;
    const { games } = this.state;
    return (
      <ImageBackground source={background} style={styles.bg}>
        <FlatList 
                data={games}
                renderItem={({ item }) => 
                {
                  if(item.id==1){
                    return(
                      <CategoryListItem 
                        category={item} 
                        icon = {icon_game}
                        onPress={()=>navigation.navigate('FindNumbers', {
                            id_game: item.id,
                            name_game: item.name
                        })}  
                      />
                    )
                  }
                  else{
                    return(
                      <CategoryListItem 
                        category={item} 
                        icon = {icon_game}
                        onPress={()=>navigation.navigate('Game', {
                            id_game: item.id,
                            name_game: item.name
                        })}  
                      />
                    )
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
   paddingTop: 50,
  },
  bg: {
    flex: 1,
    justifyContent: 'center'
  }
});
