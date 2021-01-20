import React from 'react';

import {Header, HeaderText} from './styles';

const LoginHeader = (props) => {
  const {label} = props;

  return (
    <Header>
      <HeaderText>{label}</HeaderText>
    </Header>
  );
};

export {LoginHeader};
