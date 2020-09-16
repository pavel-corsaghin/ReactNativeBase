import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Button from '../../components/Button';

const data = [
  {
    title: 'GREEN',
    titleColor: 'white',
    backgroundColor: 'green',
  },
  {
    title: 'BLUE',
    titleColor: 'white',
    backgroundColor: 'blue',
  },
  {
    title: 'BROWN',
    titleColor: 'white',
    backgroundColor: 'brown',
  },
  {
    title: 'YELLOW',
    titleColor: 'black',
    backgroundColor: 'yellow',
  },
  {
    title: 'RED',
    titleColor: 'white',
    backgroundColor: 'red',
  },
  {
    title: 'BLACK',
    titleColor: 'white',
    backgroundColor: 'black',
  },
];

export default function BackgroundChangeScreen() {
  const [background, setBackground] = useState('white');
  const backgroundStyle = {backgroundColor: background};

  return (
    <View style={[styles.container, backgroundStyle]}>
      {data.map((item) => {
        return (
          <Button
            title={item.title}
            titleColor={item.titleColor}
            backgroundColor={item.backgroundColor}
            onPress={() => setBackground(item.backgroundColor)}
          />
        );
      })}
      {/* <Button
        title={data[0].title}
        titleColor={data[0].titleColor}
        backgroundColor={data[0].backgroundColor}
        // onPress={() => setBackground(data[0].backgroundColor)}
      />
      <Button
        title={data[1].title}
        titleColor={data[1].titleColor}
        backgroundColor={data[1].backgroundColor}
        // onPress={() => setBackground(data[1].backgroundColor)}
      />
      <Button
        title={data[2].title}
        titleColor={data[2].titleColor}
        backgroundColor={data[2].backgroundColor}
        // onPress={() => setBackground(data[2].backgroundColor)}
      />
      <Button
        title={data[3].title}
        titleColor={data[3].titleColor}
        backgroundColor={data[3].backgroundColor}
        // onPress={() => setBackground(data[3].backgroundColor)}
      />
      <Button
        title={data[4].title}
        titleColor={data[4].titleColor}
        backgroundColor={data[4].backgroundColor}
        // onPress={() => setBackground(data[4].backgroundColor)}
      />
      <Button
        title={data[5].title}
        titleColor={data[5].titleColor}
        backgroundColor={data[5].backgroundColor}
        // onPress={() => setBackground(data[5].backgroundColor)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
});
