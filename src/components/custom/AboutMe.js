import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles'; // correct relative path

export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Registration No: {regNo}</Text>
    </View>
  );
}

