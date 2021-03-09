import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

const firebaseConfig = {
    apiKey: "AIzaSyAjTViXR4_HU8HBd97ERyvKfwvf9IBZqXQ",
    authDomain: "authfirebase-c7a5e.firebaseapp.com",
    projectId: "authfirebase-c7a5e",
    storageBucket: "authfirebase-c7a5e.appspot.com",
    messagingSenderId: "1083170899523",
    appId: "1:1083170899523:web:be6e02121b57b1840076f6"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            email : '',
            password : ''
        })
    }

    signUp = (email, password) => {
        try {
            if(this.state.password.length<6){
                alert('Entrer au moins 6 caractères')
                return;
            }
            // alert(email)
            firebase.auth().createUserWithEmailAndPassword(email,password)
        } catch (error) {
            console.log(error.toString())
        }
    }

    login = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function(user){
                console.log(user)
            })
        } catch (error) {
            console.log(error.toString())
        }
    }

    render() {
      return (
        <Container style={styles.container}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input 
                onChangeText={(email) => this.setState({email})}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="Username" />
              </Item>
              
              <Item floatingLabel>
                <Label>password</Label>
                <Input 
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="Password" />
              </Item>
                <Button 
                onPress={() => this.login(this.state.email, this.state.password)}
                style={{marginTop:10}}
                full rounded success>
                    <Text style={{color:'white'}}>Login</Text>
                </Button>

                <Button 
                 onPress={() => this.signUp(this.state.email, this.state.password)}
                style={{marginTop:10}}
                full rounded primary>
                    <Text style={{color:'white'}}>Sign Up</Text>
                </Button>
            </Form>
        </Container>
      );
    }
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        padding:10
    }
});