import React, {useEffect, useReducer} from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = props => {
  const [inputState, setInputState] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initallyvalid,
    touched: false,
  });
  const INPUT_CHANGE = 'INPUT_CHANGE';
  const INPUT_BLUR = 'INPUT_BLUR';

  const inputReducer = (state, action) => {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          value: action.value,
          isValid: action.isValid,
        };
      case INPUT_BLUR:
        return {
          ...state,
          toucherd: true,
        };
      default:
        return state;
    }
  };

  const {onInputChange, id, required, email, min, max, minLength, errorText} =
    props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange]);

  const handleOnChange = text => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (required && text.trim().length === 0) isValid = false;
    if (email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (min != null && +text < min) isValid = false;
    if (max != null && +text > max) isValid = false;
    if (minLength != null && text.length < minLength) isValid = false;

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid,
    });
  };
  const handleOnBlur = () => {
    dispatch({
      type: INPUT_BLUR,
    });
  };
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        {...props}
        placeholderTextColor="#999"
        autoCorrect={false}
        onChangeText={handleOnChange}
        onBlur={handleOnBlur}
        value={inputState.value}
      />
      {!inputState.isValid && inputState.touched && <Text>{errorText}</Text>}
    </View>
  );
};

export default Input;
