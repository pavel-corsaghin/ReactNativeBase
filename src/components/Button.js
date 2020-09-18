import React from 'react';
import {Dimensions, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({onPress, title, titleColor, backgroundColor}) {
  const titleStyle = {color: titleColor};
  const backgroundStyle = {backgroundColor: backgroundColor};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, backgroundStyle]}>
      <Text style={[styles.textButton, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E6E6FA',
    textAlign: 'center',
    textShadowColor: '#DCDCDC',
    height: 50,
    width: Dimensions.get('window').width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  textButton: {
    fontSize: 22,
    color: '#000000',
  },
});
