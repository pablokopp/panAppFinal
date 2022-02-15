import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {signin, signup} from '../../store/actions/auth.actions';
import {useReducer, useState} from 'react';

import React from 'react';
import {styles} from './style';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
export const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let formIsValid = true;

    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }

    return {
      formIsValid,
      inputValidities,
      inputValues,
    };
  }
  return state;
};

const AuthScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(true);

  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleAuth = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const handleInputChange = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      formDispatch({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [formDispatch],
  );
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <View style={styles.formContainer}>
        <Text>{isLogin ? 'Login' : 'Registro'}</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text>
            {isLogin ? 'No tienes una cuenta?' : 'Ya tienes una cuenta?'}
          </Text>
        </TouchableOpacity>
        <Button
          title={isLogin ? 'Ingresar' : 'Registrarse'}
          onPress={() => handleAuth()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
