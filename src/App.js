import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import React, { useState } from 'react';
const initialExpenses = [
  {
    id: 'e1',
    date: new Date(2022, 9, 19),
    title: 'Car Insurace',
    amount: 294.44,
  },
  {
    id: 'e2',
    date: new Date(2022, 9, 21),
    title: 'Toilet papre',
    amount: 24.44,
  },
  {
    id: 'e3',
    date: new Date(2022, 9, 29),
    title: 'Food',
    amount: 94.44,
  },
  {
    id: 'e4',
    date: new Date(2022, 10, 1),
    title: 'Pen',
    amount: 4.44,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    console.log('in app.js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>;
    </div>
  );
}

export default App;
