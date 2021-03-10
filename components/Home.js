import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const firebaseConfig = {
    apiKey: "AIzaSyBAH8rU-xmkFjNQFqTdCIs9QNKMMVimwoI",
    authDomain: "fir-auth-7a718.firebaseapp.com",
    projectId: "fir-auth-7a718",
    storageBucket: "fir-auth-7a718.appspot.com",
    messagingSenderId: "734835324348",
    appId: "1:734835324348:web:025723025d53af42e9a7b9"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

const Home = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (email, password) => {
        console.log('password', password)
        try {
            if(password.length<5){
                alert('Entrer 5 caractères svp')
                return;
            }
            // alert(email)
            firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error.toString())
        }
    }

    const login = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((users) => {
                console.log(users.user)
                // setEmail(user.data)
                navigation.navigate('NextPage', {itemId: users.user,
                    })
            })
        } catch (error) {
            alert('inscrivez vous')
        }
    }

    return(
        <Container style={styles.container}>
            <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input 
                onChangeText={(email) => setEmail(email)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="Username" />
            </Item>
            
            <Item floatingLabel>
                <Label>password</Label>
                <Input 
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="Password" />
            </Item>
                <Button 
                onPress={() => login(email, password)}
                style={{marginTop:10}}
                full rounded success>
                    <Text style={{color:'white'}}>Login</Text>
                </Button>

                <Button 
                onPress={() => signUp(email, password)}
                style={{marginTop:10}}
                full rounded primary>
                    <Text style={{color:'white'}}>Sign Up</Text>
                </Button>
            </Form>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        padding:10
    }
});

export default Home;