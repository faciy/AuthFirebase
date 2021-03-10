import React from 'react';
import {
    View,
    Text
} from 'react-native';

const NextPage = ({route}) =>{
    const { itemId } = route.params;
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{itemId.email} </Text>
        </View>
    )
}

export default NextPage
