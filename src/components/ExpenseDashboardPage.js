import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashBoardPage = () => (
	<div>
		<h3>expense dashboard page</h3>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);

export default ExpenseDashBoardPage;
