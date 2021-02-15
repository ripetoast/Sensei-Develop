import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const TestScreen = () => {
    var arrayTest = [{name: 'boi'},{name: 'boy'},{name: 'gorl'},{name: 'girl'},{name: 'dude'}];

    return (<View style={style.background}>
        <Text style={{'color': '#FFF'}}>test</Text>
        <FlatList data={arrayTest} renderItem={(friend) => {console.log(friend)}}></FlatList>
    </View>)
};

const style = StyleSheet.create({
    background: {
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

export default TestScreen;