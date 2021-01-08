import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilter from '../components/ExpenseListFilter';
import ExpenseSummary from '../components/expenseSummary';

const ExpenseDashBoardPage = () => (
	<div>
		<h3>expense dashboard page</h3>
		<ExpenseSummary />
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);

export default ExpenseDashBoardPage;
