import React, { useState, createContext, useReducer } from 'react';
import { AppReducer } from '../reducer/AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};
export const StateContext = createContext(initialState);
function GlobalState({ children }) {
  const [transactions, setTransaction] = useState(initialState);
  const [newState, dispatch] = useReducer(AppReducer, transactions);

  //ACTIONS
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (tranObj) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: tranObj
    });
  };
  return (
    <StateContext.Provider value={{ transactions: newState.transactions, deleteTransaction, addTransaction }}>
      {children}
    </StateContext.Provider>
  );
}

export default GlobalState;
