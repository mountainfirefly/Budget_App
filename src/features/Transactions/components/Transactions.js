import React from 'react';

import {SearchBar, Picker} from 'components';

import TransactionItem from './TransactionItem';
import {
  Container,
  List,
  Title,
  SearchBarContainer,
  PickerContainer,
} from '../styles';

const TransactionsView = (props) => {
  const {transactions, searchText, setSearchText, sortBy, setSortBy} = props;

  return (
    <Container>
      <SearchBarContainer>
        <SearchBar
          value={searchText}
          placeholder={'Search here...'}
          onChangeText={setSearchText}
        />
      </SearchBarContainer>
      <PickerContainer>
        <Picker
          value={sortBy}
          onChange={setSortBy}
          options={[
            {
              label: 'By Account',
              value: 'name',
            },
            {
              label: 'By Amount',
              value: 'amount',
            },
            {
              label: 'By Date',
              value: 'date',
            },
          ]}
        />
      </PickerContainer>
      <List
        sections={transactions}
        contentContainerStyle={{paddingBottom: 16}}
        renderSectionHeader={({section: {title}}) => {
          return <Title>{title}</Title>;
        }}
        renderItem={({item, index}) => {
          return (
            <TransactionItem
              name={item.name}
              date={item.date}
              amount={item.amount}
              onPress={() =>
                props.navigation.navigate('Transaction', {
                  transactionId: item.transaction_id,
                })
              }
            />
          );
        }}
        keyExtractor={(item) => item.transaction_id}
      />
    </Container>
  );
};

export {TransactionsView};
