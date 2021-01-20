import React, {useContext, useState} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import {fetchTransaction} from 'apis';
import {AppStateContext} from 'contexts';

import {TransactionView} from '../components';

const TransactionScreen = (props) => {
  const {transactionId} = props.route.params;
  const [transaction, setTransaction] = useState(
    fetchTransaction(transactionId),
  );
  const appState = useContext(AppStateContext);

  const swipeRight = () => {
    const previousItemIndex =
      appState.transactionIds.indexOf(transaction.transaction_id) - 1;

    if (previousItemIndex >= 0) {
      setTransaction(
        fetchTransaction(appState.transactionIds[previousItemIndex]),
      );
    }
  };

  const swipeLeft = () => {
    const nextItemIndex =
      appState.transactionIds.indexOf(transaction.transaction_id) + 1;
    if (nextItemIndex < appState.transactionIds.length) {
      const value = fetchTransaction(appState.transactionIds[nextItemIndex]);
      setTransaction(value);
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={swipeLeft}
      onSwipeRight={swipeRight}
      style={{flex: 1}}>
      <TransactionView {...props} transaction={transaction} />
    </GestureRecognizer>
  );
};

export {TransactionScreen};
