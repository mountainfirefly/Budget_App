import React from 'react';

import {LoginView} from '../components';
import {submitLogin} from '../actions';

const LoginScreen = (props) => {
  return <LoginView {...props} submitForm={submitLogin} />;
};

export {LoginScreen};
