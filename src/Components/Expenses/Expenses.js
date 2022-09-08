import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from 'react';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    console.log('This is expense component');
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={FilterChangeHandler}/>
      <ExpenseItem data={props.data[0]} />
      <ExpenseItem data={props.data[1]} />
      <ExpenseItem data={props.data[2]} />
      <ExpenseItem data={props.data[3]} />
    </Card>
  );
}

export default Expenses;
