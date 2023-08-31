
import React, { useState } from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  // Add any additional props or customizations here
}

const TextInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <RNTextInput
      {...props}
      value={value}
      onChangeText={handleChangeText}
    />
  );
};

export default TextInput;