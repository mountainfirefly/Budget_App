import React from 'react';

import {Row} from 'styles';

import {
  ListItem,
  ListItemContent,
  ListItemTitle,
  ListItemSubText,
  ListItemRightText,
} from '../styles';

const TransactionItem = (props) => {
  const {name, amount, date} = props;

  return (
    <ListItem onPress={props.onPress}>
      <ListItemContent>
        <Row>
          <ListItemTitle ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </ListItemTitle>
          <ListItemRightText>{amount}</ListItemRightText>
        </Row>
        <ListItemSubText>{date}</ListItemSubText>
      </ListItemContent>
    </ListItem>
  );
};

export default TransactionItem;
