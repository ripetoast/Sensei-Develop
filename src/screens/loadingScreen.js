import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const LoadingScreen = () => {
    return (<View style={style.background}>
        <Text>blah</Text>
    </View>);
};

const style = StyleSheet.create({
    background: {
        backgroundColor:
            '#000',
        position:
            'absolute',
        top:
            0,
        right:
            0,
        bottom:
            0,
        left:
            0,
    }
})
export default LoadingScreen;