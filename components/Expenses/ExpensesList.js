import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) =>{

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback"> Only single Expense here. Please add more...</h2>
    } 

    return (
        <ul className="expense-list"> 
        {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              // locationOfExpenditure ={expense.locationOfExpenditure}
            ></ExpenseItem>
          ))};
        </ul>
    )
}

export default ExpensesList;