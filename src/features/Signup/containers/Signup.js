import React from 'react';

import {SignupView} from '../components';
import {submitSignup} from '../actions';

const SignupScreen = (props) => {
  return <SignupView {...props} submitForm={submitSignup} />;
};

export {SignupScreen};
