import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui'; 
import { styles } from '../../styles/styles';
export default function TeacherMessage() {
  return (
    <View style={styles.teacherContainer}>
      <Text style={styles.teacherTitle}>Message from Teacher</Text>
      <Text style={styles.teacherMessage}>
        Keep up the great work on your Tasbih App!
      </Text>
    </View>
  );
}
