import React from 'react';

import {Row} from 'styles';

import {Card, CardContent, CardTitle, CardSubText} from '../styles';

const AccountCard = (props) => {
  const {name, balance, subtype} = props;

  return (
    <Card onPress={props.onPress}>
      <CardContent>
        <Row>
          <CardTitle>{balance}</CardTitle>
          <CardSubText>{subtype}</CardSubText>
        </Row>
        <CardSubText>{name}</CardSubText>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
