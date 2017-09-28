import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View, StatusBar , Button } from 'react-native';


import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'


import {
  StackNavigator,
} from 'react-navigation';

const ModalStack = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home  }
});

/// gestion de la navigation tabs
import { TabNavigator } from 'react-navigation'


const Tabs = TabNavigator({

  Login: { screen: Login},
  Home: { screen: Home },
  About: { screen: About }

},{
  tabBarOptions: {
    
    style: {
      backgroundColor: '#cc0000'
    }
  }
  
})



export default class App extends React.Component {

  static navigationOptions = {
    title: 'Login',
  }

  render() {

    return (
      <View style={{flex: 1}} >
        <StatusBar hidden={true} />
        
          
          <ModalStack />
         
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


