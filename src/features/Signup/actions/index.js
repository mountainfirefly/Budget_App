import {signupUser} from 'apis';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

export const submitSignup = (signupDetails) => {
  return signupUser({
    ...signupDetails,
    id: `user_${getRandomInt(3000, 100000)}`,
  });
};
