import expenseReducer from '../../redux/reducers/expReducer';
import expenses from '../fixtures/dummyExpenseData';

test('default state gets set to default array', () => {
	const state = expenseReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual([]);
});

test('REMOVE_EXPENSE TEST', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};

	const state = expenseReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not provided', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1',
	};

	const state = expenseReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'high iq',
		note: '',
		createdAt: 50000,
		amount: 2000,
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};

	const state = expenseReducer(expenses, action);

	//expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
	const description = 'palace';

	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			description,
		},
	};

	const state = expenseReducer(expenses, action);

	expect(state[2].description).toEqual(description);
});

test('should not edit expense if id is not found', () => {
	const amount = 3000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '1234abc',
		updates: {
			amount,
		},
	};

	const state = expenseReducer(expenses, action);

	expect(state).toEqual(expenses);
});
