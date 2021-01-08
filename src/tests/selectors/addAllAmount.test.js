import totalAmount from '../../redux/selectors/addAllAmount';
import expenses from '../fixtures/dummyExpenseData';

test('should return 0 if no expenses', () => {
	const action = totalAmount([]);

	expect(action).toBe(0);
});

test('should add a single expense(amount)', () => {
	const action = totalAmount([expenses[0]]);

	expect(action).toBe(4000);
});

test('should add all expenses(amount)', () => {
	const action = totalAmount(expenses);

	expect(action).toBe(12000);
});
