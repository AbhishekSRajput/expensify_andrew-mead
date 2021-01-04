import moment from 'moment';
import filteredExpenses from '../../redux/selectors/filteredExpenses';

import expenses from '../fixtures/dummyExpenseData';

test('filteredExpense filtered by text', () => {
	const filters = {
		text: 'z',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};
	const action = filteredExpenses(expenses, filters);

	expect(action).toEqual([expenses[0]]);
});

test('filteredExpenses filtered by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};

	const action = filteredExpenses(expenses, filters);
	expect(action).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('filteredExpense test showing sortBy amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	};
	const action = filteredExpenses(expenses, filters);

	expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('filteredExpense test startDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined,
	};

	const action = filteredExpenses(expenses, filters);

	expect(action).toEqual([expenses[1], expenses[0]]);
});

test('filteredExpense test by endDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0).add(2, 'days'),
	};

	const action = filteredExpenses(expenses, filters);

	expect(action).toEqual([expenses[0], expenses[2]]);
});
