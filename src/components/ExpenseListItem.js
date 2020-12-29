import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expActionGenerators';
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>{amount}</p>
		<p>{createdAt}</p>
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
