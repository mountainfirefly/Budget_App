import React from 'react';

import {fetchTransactions} from 'apis';

import {ReportView} from '../components';
import {getMonthAmount} from '../utils';

const ReportScreen = (props) => {
  const {accountId} = props.route.params;
  const transactions = fetchTransactions(accountId);
  const spendMonthly = getMonthAmount(transactions);

  console.log(spendMonthly);
  return <ReportView {...props} />;
};

export {ReportScreen};
