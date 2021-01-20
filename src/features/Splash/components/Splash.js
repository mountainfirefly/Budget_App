import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';

import {getStorageData} from 'globals';

import {Container, StyledText} from '../styles';

const SplashScreen = (props) => {
  useEffect(() => {
    (async () => {
      const loggedIn = await getStorageData();

      if (loggedIn) {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'App'}],
          }),
        );
      } else {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Auth'}],
          }),
        );
      }
    })();
  }, []);

  return (
    <Container>
      <StyledText>BUDGET</StyledText>
    </Container>
  );
};

export {SplashScreen};
