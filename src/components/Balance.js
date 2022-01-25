import React, { useContext } from 'react';
import { StateContext } from '../context/GlobalState';

function Balance() {
  const { transactions } = useContext(StateContext);

  const amount = transactions.map((transaction) => transaction.amount);
  console.log('amount', amount);
  const totalAmount = amount.reduce((acc, singleAmt) => (acc += singleAmt), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  );
}

export default Balance;
