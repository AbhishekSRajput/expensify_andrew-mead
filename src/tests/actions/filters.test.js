import moment from 'moment';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setEndDate,
	setStartDate,
} from '../../redux/actions/filActionGenerators';

test('setTextFilter testing', () => {
	const action = setTextFilter('rent');

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'rent',
	});
});

test('setTextFilter default', () => {
	const action = setTextFilter();

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	});
});

test('sorByAmount testing', () => {
	const action = sortByAmount();

	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});

test('sortByDate testing', () => {
	const action = sortByDate();

	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});

test('setStartDate testing', () => {
	const action = setStartDate(moment(0));

	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0),
	});
});

test('setEndDate testing', () => {
	const action = setEndDate({ endDate: 2000 });

	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: {
			endDate: 2000,
		},
	});
});
