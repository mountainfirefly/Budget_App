import React from 'react';

import {Container, List} from '../styles';
import AccountCard from './AccountCard';

const AccountsView = (props) => {
  const {accounts} = props;

  return (
    <Container>
      <List
        data={accounts}
        renderItem={({item, index}) => {
          return (
            <AccountCard
              name={item.name}
              subtype={item.subtype}
              balance={`${item.balances.iso_currency_code} ${item.balances.current}`}
              onPress={() =>
                props.navigation.navigate('Transactions', {
                  accountId: item.account_id,
                })
              }
            />
          );
        }}
        keyExtractor={(item) => item.account_id}
      />
    </Container>
  );
};

export {AccountsView};
