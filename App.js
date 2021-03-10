import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Navigation from './navigation/Navigation';

const App = () => {
    return(
        <Navigation />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

export default App;