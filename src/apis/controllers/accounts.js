import accounts from '../data/accounts.json';
import transactions from '../data/transactions.json';

export const fetchTransactions = (accountId, searchText, sortBy) => {
  let result = transactions[0].Transactions.filter((transaction) => {
    return accountId === transaction.account_id;
  }).sort((a, b) => new Date(a) - new Date(b));

  if (searchText) {
    result = result.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  if (sortBy) {
    result = result.sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  }

  return result;
};

export const fetchAccounts = () => {
  return accounts[0].Accounts;
};

export const fetchTransaction = (transactionId) => {
  return transactions[0].Transactions.find((transaction) => {
    return transaction.transaction_id === transactionId;
  });
};
