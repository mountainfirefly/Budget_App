import React from 'react';

import {StyledButton, StyledText} from './styles';

const Button = (props) => {
  return (
    <StyledButton onPress={props.onPress}>
      <StyledText>{props.label}</StyledText>
    </StyledButton>
  );
};

export {Button};
