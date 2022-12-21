import React from 'react';
import axios from 'axios';
import { StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./screen/Home";
import ListQuestion from "./screen/ListQuestion";
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Learn from './screen/Learn';
import Setting from './screen/Setting';
import Answer from './screen/Answer';
import Title from './screen/Title';
import Game from './screen/Game';
import FindNumbers from "./screen/FindNumber/FindNumbers";
import FindNumber_Notification from "./screen/FindNumber/FindNumber_Notification";
import Notification from './screen/notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Font from 'expo-font';
import BgAudio from 'react-native-background-audio';

axios.defaults.baseURL='http://03ba-14-226-74-136.ngrok.io';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export class MenuHome extends React.Component{

  state = {
    fontsLoaded: false,
  };

  loadFonts() {
    Font.loadAsync({
      'Vanilla': require('./assets/fonts/Vanilla.ttf'),
      'AntsyPants': require('./assets/fonts/AntsyPants.ttf'),
      'UVNBanhMi': require('./assets/fonts/UVNBanhMi.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render(){
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#90cbd3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 30,
              fontFamily: 'UVNBanhMi',
            }
          }}
        >
          <Stack.Screen 
            name="Menu" 
            component={Home} 
            options={{
              headerShown: false,
              title: "Trang chủ"
            }}
          />
          <Stack.Screen 
            name="ListQuestion" 
            component={ListQuestion} 
            options={({ route }) => ({
              title: "Danh sách câu hỏi"
            })}
          />
          <Stack.Screen 
            name="Answer" 
            component={Answer} 
            options={({ route }) => ({
              headerShown: false,
              title: "Câu hỏi"
            })}
          />
          <Stack.Screen 
            name="Game" 
            component={Game} 
            options={({ route }) => ({
              title: "Trò chơi"
            })}
          />
          <Stack.Screen 
            name="Notification" 
            component={Notification} 
            options={({ route }) => ({
              headerShown: false,
              title: "Thông báo"
            })}
          />
          <Stack.Screen 
          name="FindNumbers" 
          component={FindNumbers} 
          options={{ 
            title: 'Tìm số theo thứ tự',
            headerStyle: {
              backgroundColor: '#90cbd3',
            }, 
          }}
           
        />
        <Stack.Screen 
          name="FindNumber_Notification" 
          component={FindNumber_Notification} 
          options={{ 
            title: 'FindNumber_Notification',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#90cbd3',
            },  
          }} 
        />
        </Stack.Navigator>
    );
  }
}

export default class App extends React.Component {
  render(){
    return (
      <>
        <Title />
        {/* <BgAudio options={audio_options} /> */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#90cbd3',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '900',
                fontSize: 30,
                fontFamily: 'UVNBanhMi',
              }
            }}
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: '#fff',
              tabStyle: {
                backgroundColor: '#90cbd3',
              },
            }}
          >
            <Tab.Screen name="Home" component={MenuHome} options={{ 
              headerShown: false, 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}/>
            <Tab.Screen name="Học tập" component={Learn} options={{ 
              headerShown: false, 
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book-open-outline" color={color} size={size} />
              ),
            }}/>
            <Tab.Screen name="Cá nhân" component={Setting} options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings" color={color} size={size} />
              ),
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style='dark' />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
const audio_options = {
  source:{local: require('./assets/musics/GiaVoNoiYeuEmDi.mp3')}
}
