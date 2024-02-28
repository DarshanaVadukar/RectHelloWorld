import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Mytext: React.FC = (props: any) => {
  return <Text style={styles.text}>{props.mytext}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#111825',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default Mytext;
