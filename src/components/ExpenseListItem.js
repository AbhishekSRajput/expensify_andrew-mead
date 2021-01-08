import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expActionGenerators';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')}-
			{moment(createdAt).format('MMMM Do,YYYY')}
		</p>

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
