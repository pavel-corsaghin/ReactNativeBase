import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TodoItem({item}) {
  return (
    <View style={styles.container}>
      <Text>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: 8,
    padding: 4,
  },
});
