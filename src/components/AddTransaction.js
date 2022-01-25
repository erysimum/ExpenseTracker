import React, { useState, useContext } from 'react';
import { StateContext } from '../context/GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(StateContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 12029),
      text,
      amount: +amount
    });
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' placeholder='Enter text...' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' placeholder='Enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
