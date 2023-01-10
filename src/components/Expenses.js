import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
function Expenses(props) {
  return (
    <div className="expenses">
      <Card>
        <h2>Let's get started!</h2>
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              date={expense.date}
              amount={expense.amount}></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
