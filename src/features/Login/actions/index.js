import {loginUser} from 'apis';

export const submitLogin = (loginDetails) => {
  return loginUser(loginDetails);
};
