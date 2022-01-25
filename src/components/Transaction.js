import React, { useContext } from 'react';

import { StateContext } from '../context/GlobalState';

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(StateContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
      {transaction.text}
      <span>
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button className='delete-btn' onClick={(e) => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
