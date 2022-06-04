import React, {useState} from "react";
import "./NewExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";
const NewExpenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020')
  const changeFilterHandler = (parameter) => {
    setSelectedYear(parameter)
  } 
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter filteredYear={selectedYear} onFilterChange={changeFilterHandler}/>\
      {filteredExpense.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
        
      ))}
      
    </Card>
    </div>
  );
}
export default NewExpenses;
