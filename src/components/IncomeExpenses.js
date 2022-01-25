import React, { useContext } from 'react';
import { StateContext } from '../context/GlobalState';

function IncomeExpenses() {
  const { transactions } = useContext(StateContext);

  const positiveAmtArr = transactions.filter((transaction) => transaction.amount > 0);
  const negativeAmtArr = transactions.filter((transaction) => transaction.amount < 0);

  const positiveAmt = positiveAmtArr.map((item) => item.amount);
  const negativeAmt = negativeAmtArr.map((item) => item.amount);
  console.log(positiveAmt, negativeAmt);

  const positive = positiveAmt.reduce((acc, amt) => (acc += amt), 0);
  const negative = negativeAmt.reduce((acc, amt) => (acc += amt), 0);
  return (
    <div>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className='money plus'>+${positive}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>-${Math.abs(negative)}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
