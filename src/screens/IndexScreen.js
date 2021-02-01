import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import DataContext from '../context/DataContext';

const IndexScreen = () => {
  const { data, addQuote } = useContext(DataContext);

  return (
    <View style={styles.main}>
      <Text>Screenedadad</Text>
      <Button
        title="Add Quote"
        onPress={() => {
          addQuote();
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(quote) => quote.quoteID}
        renderItem={({ item }) => {
          return <Text style={styles.quote}>{item.quote}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#D0F0C1',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  quote: {
    color: 'red',
  },
});

export default IndexScreen;
