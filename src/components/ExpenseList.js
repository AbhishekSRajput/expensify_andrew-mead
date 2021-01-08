import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../redux/selectors/filteredExpenses';
//import totalAmount from '../redux/selectors/addAllAmount';
const ExpenseList = (props) => (
	<div>
		{/* <h1>expense list</h1>
		{props.expenses.length === 0 ? (
			<h2>there is no expenses</h2>
		) : (
			<h2>
				Viewing {props.expenses.length} expense totaling $
				{totalAmount(props.expenses)}
			</h2>
		)} */}

		{props.expenses.map((expense) => (
			<ExpenseListItem key={expense.id} {...expense} />
		))}
	</div>
);

// const ConnectedExpenseList = connect((state) => {
// 	return {
// 		expenses: state.expenses,
// 	};
// })(ExpenseList);

// export default ConnectedExpenseList;

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpenseList);
