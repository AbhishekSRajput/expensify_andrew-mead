import filterReducer from '../../redux/reducers/filReducer';
import moment from 'moment';

test('should setup default filter default value', () => {
	const state = filterReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	});
});

test('should set sortBy to amount test', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

	expect(state.sortBy).toBe('amount');
});

test('shortBy date test', () => {
	const defaultState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount',
	};

	const state = filterReducer(defaultState, { type: 'SORT_BY_DATE' });

	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const text = 'hello';
	const action = {
		type: 'SET_TEXT_FILTER',
		text,
	};

	const state = filterReducer(undefined, action);

	expect(state.text).toBe(text);
});

test('should set startDate', () => {
	const startDate = moment();
	const action = {
		type: 'SET_START_DATE',
		startDate,
	};

	const state = filterReducer(undefined, action);

	expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
	const endDate = moment();
	const action = {
		type: 'SET_END_DATE',
		endDate,
	};

	const state = filterReducer(undefined, action);

	expect(state.endDate).toEqual(endDate);
});
