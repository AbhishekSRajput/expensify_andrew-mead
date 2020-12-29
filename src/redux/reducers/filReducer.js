import moment, { months } from 'moment';

//FILTER REDUCER
//default state for filters
const filterDefaultState = {
	text: '',
	sortBy: 'date', //date or amount
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
};

export default (state = filterDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				...action,
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date',
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount',
			};
		case 'SET_START_DATE':
			return {
				...state,
				...action,
			};
		case 'SET_END_DATE':
			return {
				...state,
				...action,
			};
		default:
			return state;
	}
};
