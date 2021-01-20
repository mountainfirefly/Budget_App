import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';

import {validateForm} from 'globals';
import {Input, Button, LoginHeader} from 'components';

import {
  Container,
  Footer,
  SignupText,
  SignupButtonText,
  ContentContainer,
  ButtonWrapper,
} from '../styles';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
};

const validationSchema = {
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  username: {
    required: true,
  },
  password: {
    required: true,
  },
};

const SignupView = (props) => {
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

    if (valid) {
      setLoading(true);
      const result = await props.submitForm(formState);

      if (!result.success) {
        setError('User account already exist');
      } else {
        ToastAndroid.show(
          'Created your account successfully, please login',
          ToastAndroid.SHORT,
        );
        props.navigation.navigate('Login');
      }
      setLoading(false);
    } else {
      setError('Please check form values');
    }
  };

  return (
    <Container>
      <LoginHeader label="BUDGET" />
      <ContentContainer>
        <Input
          value={formState.firstName}
          placeholder="First Name"
          onChangeText={(val) => setField('firstName', val)}
        />
        <Input
          value={formState.lastName}
          placeholder="Last Name"
          onChangeText={(val) => setField('lastName', val)}
        />
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
            label={loading ? 'Signing in...' : 'Signup'}
            disabled={loading ? true : false}
          />
        </ButtonWrapper>
      </ContentContainer>
      <Footer>
        <SignupText>Already have an account?</SignupText>
        <SignupButtonText onPress={() => props.navigation.navigate('Login')}>
          Login here.
        </SignupButtonText>
      </Footer>
    </Container>
  );
};

export {SignupView};
