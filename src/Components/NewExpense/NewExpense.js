import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };

        props.onAddExpense(enteredExpenseDate);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;