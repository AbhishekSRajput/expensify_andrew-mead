import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expActionGenerators';
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<p>description: {description}</p>
		<p>amount: {amount}</p>
		<p>createdAt: {createdAt}</p>
		<button
			onClick={() => {
				dispatch(removeExpense({ id }));
			}}
		>
			Remove item
		</button>
	</div>
);

export default connect()(ExpenseListItem);
