import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {signin, signup} from '../../store/actions/auth.actions';

import React from 'react';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const AuthScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };
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
