import React from 'react';
import { StyleSheet, Text, View , TextInput, Button } from 'react-native';




export default class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
       login: '',
       password: '',
       pendingLoginRequest: false
      };
    this.navigation = this.props.navigation;
      this.store = this.props.store;   
  }

  submit (){
    console.log('submit')
    console.log(this.state);
    console.log('store :')
    //console.log(store.getState())
    //this.setState({user:param});
    //this.navigation.navigate('Home', { user:this.state.myLogin });
    //store.dispatch({ type: "SELECT_SUB", param:'john'});
    //alert( select('jhonny') );
    store.dispatch(select('jhonny') );
    console.log(store.getState())
    this.navigation.navigate('Home', { login:'' });
  }


  render() {


    if(this.state.login != ''){

      return (

        <View>

          <Text>Cas 1</Text>

        </View>
      )


    }else{

      return (
        <View>
          <TextInput
            style = { styles.inputText }
            placeholder = { 'Identifiant' }
            onChangeText = {(text) => this.setState({text}) }
            editable= { true } 
          />
  
          <Button onPress={() => this.submit()} title="CONNEXION" />
         <Text>{store.getState()}</Text>
        </View>
      );

    }



    
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
