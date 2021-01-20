import React, {useContext, useEffect, useState} from 'react';

import {fetchTransactions} from 'apis';
import {AppStateContext} from 'contexts';

import {TransactionsView} from '../components';
import {groupTransactions} from '../utils';

const TransactionsScreen = (props) => {
  const {accountId} = props.route.params;
  const appState = useContext(AppStateContext);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [transactions, setTransactions] = useState(
    fetchTransactions(accountId),
  );

  useEffect(() => {
    appState.setTransactionIds(
      transactions.map((transaction) => transaction.transaction_id),
    );
  }, []);

  return (
    <TransactionsView
      {...props}
      transactions={groupTransactions(transactions)}
      searchText={searchText}
      sortBy={sortBy}
      setSortBy={setSortBy}
      setSearchText={(val) => {
        setSearchText(val);
        setTransactions(fetchTransactions(accountId, val));
      }}
    />
  );
};

export {TransactionsScreen};
