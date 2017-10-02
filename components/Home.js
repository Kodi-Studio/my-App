import React from 'react';
import { StyleSheet, Text, View , TextInput } from 'react-native';


export default class Home extends React.Component {

  constructor (props, myname) {
    super(props);
    console.log(props);
    this.state = { user: props.navigation.state.params.user };
  } 

  render() {
    console.log(this.state)
    return (
      <View>

        <Text>user {this.state.user}-{() => this.state.myname}</Text>

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
  inputText: {
    borderWidth: 1,
    borderColor: "#000"
  }
});