import {
	addExpense,
	editExpense,
	removeExpense,
} from '../../redux/actions/expActionGenerators';

test('remove expense from list', () => {
	const action = removeExpense({ id: '123abc' });

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc',
	});
});

test('edit expenses', () => {
	const action = editExpense('123abc', { note: 'new note value' });

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'new note value',
		},
	});
});

test('add expense', () => {
	const expenseData = {
		description: 'hello',
		note: 'greetings message',
		amount: 20,
		createdAt: 1000,
	};
	const action = addExpense(expenseData);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test('add expense without data', () => {
	const action = addExpense();

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
		},
	});
});
