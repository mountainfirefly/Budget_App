import React from 'react';

import {Row} from 'styles';
import CloseIcon from 'assets/icons/close.png';

import {
  Container,
  Title,
  Price,
  DateText,
  PaidFrom,
  CategoryText,
  EditButton,
  EditButtonText,
  ContentContainer,
  Item,
  Label,
  Divider,
  CloseButton,
  Image,
} from '../styles';

const TransactionView = (props) => {
  const {transaction} = props;

  return (
    <Container>
      <CloseButton onPress={() => props.navigation.goBack()}>
        <Image source={CloseIcon} />
      </CloseButton>
      <ContentContainer>
        <Title>{transaction.name}</Title>
        <Divider />
        <Price>{`${transaction.iso_currency_code} ${transaction.amount}`}</Price>
        <Divider />
        <Row>
          <Item fullWidth>
            <Label>Date</Label>
            <DateText>{transaction.date}</DateText>
          </Item>
          <Item>
            <Label>Paid From</Label>
            <PaidFrom>ICIC 2010</PaidFrom>
          </Item>
        </Row>
        <Row>
          <Item topSpace fullWidth>
            <Label>Categories</Label>
            <CategoryText>{transaction.category.join(', ')}</CategoryText>
          </Item>
          <Item topSpace>
            <EditButton>
              <EditButtonText>Edit</EditButtonText>
            </EditButton>
          </Item>
        </Row>
      </ContentContainer>
    </Container>
  );
};

export {TransactionView};
