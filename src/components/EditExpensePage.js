import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
	editExpense,
	removeExpense,
} from '../redux/actions/expActionGenerators';

const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm
				expense={props.expense}
				onSubmit={(expense) => {
					props.dispatch(editExpense(props.expense.id, expense));
					console.log(props.expense.id, expense);
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(removeExpense({ id: props.expense.id }));
					props.history.push('/');
				}}
			>
				Remove all
			</button>
		</div>
	);
};
const mapStateToProp = (state, props) => {
	return {
		expense: state.expenses.find(
			(expense) => expense.id === props.match.params.id
		),
	};
};

export default connect(mapStateToProp)(EditExpensePage);
