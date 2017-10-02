import React from 'react';
import { AppRegistry } from 'react-native';
import {  StyleSheet, Text, View, StatusBar , Button } from 'react-native';
/// gestion de la navigation tabs
import { TabNavigator } from 'react-navigation';
/// gestion de la navigation entre les view
import {  StackNavigator } from 'react-navigation';

/// REDUX
//import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
///END REDUX

import store from './configStore'

/// view components
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'


const ModalStack = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home  }
});





const myname = ({name:'christophe'});

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
/*
let store = createStore((state, action)=>{
  
       return "mystore toto";
       //return (JSON.stringify(action))
      
       //return { store, username : action.text }
  
      }, this.state );
*/
export default class App extends React.Component {

  

  static navigationOptions = {
    title: 'Login',
  }

  constructor (props) {
    super(props);
    this.state = { myLogin: '', user: '' };
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <Provider store={store} > 
        <View style={{flex: 1}} >
          <StatusBar hidden={true} />
            <ModalStack />
          
        </View>
      </Provider>
     
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

