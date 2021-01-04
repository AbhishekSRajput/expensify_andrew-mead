import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

import { connect } from 'react-redux';
import { addExpense } from '../redux/actions/expActionGenerators';

const AddExpensePage = (props) => (
	<div>
		<h1>add expense page</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				// props.dispatch(
				// 	addExpense({
				// 		description: expense.description,
				// 		amount: expense.amount,
				// 		note: expense.note,
				// 		createdAt: expense.createdAt,
				// 	})
				// );

				//since im passing an object and add expense action has de+structured passed argument already
				props.dispatch(addExpense(expense));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);
