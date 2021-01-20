import React from 'react';

import {fetchAccounts} from 'apis';

import {AccountsView} from '../components';

const AccountsScreen = (props) => {
  const accounts = fetchAccounts();

  return <AccountsView {...props} accounts={accounts} />;
};

export {AccountsScreen};
