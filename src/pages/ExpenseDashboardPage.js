import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilter from '../components/ExpenseListFilter';

const ExpenseDashBoardPage = () => (
	<div>
		<h3>expense dashboard page</h3>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);

export default ExpenseDashBoardPage;
