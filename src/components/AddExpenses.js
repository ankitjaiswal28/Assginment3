import React from "react";
import AddExpensesForm from "./AddExpensesForm";
import './AddExpenses.css';
const AddExpenses = (props) => {
    const  saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <AddExpensesForm onsaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

}
export default AddExpenses;