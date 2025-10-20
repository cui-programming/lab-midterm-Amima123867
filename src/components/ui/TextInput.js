import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

/**
 * UI/TextInput
 * Simple wrapper over React Native's TextInput
 * Students can style this through styles.js or props
 */
export default function TextInput(props) {
  return <RNTextInput {...props} />;
}
