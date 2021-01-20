import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';

import {validateForm, updateStorage} from 'globals';
import {Input, Button, LoginHeader} from 'components';

import {
  Container,
  ContentContainer,
  Footer,
  SignupText,
  SignupButtonText,
  ButtonWrapper,
} from '../styles';

const INITIAL_STATE = {
  username: '',
  password: '',
};

const validationSchema = {
  username: {
    required: true,
  },
  password: {
    required: true,
  },
};

const LoginView = (props) => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setField = (field, fieldVal) => {
    if (error) {
      setError('');
    }

    setFormState({
      ...formState,
      [field]: fieldVal,
    });
  };

  const handleSubmit = async () => {
    const valid = validateForm(validationSchema, formState);

    try {
      if (valid) {
        setLoading(true);
        const result = await props.submitForm(formState);

        if (!result.success) {
          ToastAndroid.show('User not exist', ToastAndroid.SHORT);
          setError("Couldn't able to login, please check your login details.");
        } else {
          await updateStorage({loggedIn: true});

          props.navigation.navigate('Splash');
        }
        setLoading(false);
      } else {
        setError('Please check form values');
        ToastAndroid.show('Please enter valid details', ToastAndroid.SHORT);
      }
    } catch (err) {
      ToastAndroid.show('Please enter valid details', ToastAndroid.SHORT);
    }
  };

  return (
    <Container>
      <LoginHeader label="BUDGET" />
      <ContentContainer>
        <Input
          value={formState.username}
          placeholder="Username"
          onChangeText={(val) => setField('username', val)}
        />
        <Input
          value={formState.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(val) => setField('password', val)}
        />
        <ButtonWrapper>
          <Button
            onPress={handleSubmit}
            label={loading ? 'Logging in...' : 'Login'}
          />
        </ButtonWrapper>
      </ContentContainer>
      <Footer>
        <SignupText>Don't have an account</SignupText>
        <SignupButtonText onPress={() => props.navigation.navigate('Signup')}>
          Signup here.
        </SignupButtonText>
      </Footer>
    </Container>
  );
};

export {LoginView};
