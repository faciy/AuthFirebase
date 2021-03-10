import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Home from '../components/Home';
import NextPage from '../components/NextPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NextPage" component={NextPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
