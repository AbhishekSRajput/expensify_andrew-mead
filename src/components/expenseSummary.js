import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalAmount from '../redux/selectors/addAllAmount';
import filteredExpenses from '../redux/selectors/filteredExpenses';

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<div>
			<h1>
				Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
			</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = filteredExpenses(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: totalAmount(visibleExpenses),
	};
};
export default connect(mapStateToProps)(ExpenseSummary);
