import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle('Updated!!!!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
