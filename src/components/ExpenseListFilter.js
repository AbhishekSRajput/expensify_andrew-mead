import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
} from '../redux/actions/filActionGenerators';
const ExpenseListFilter = (props) => (
	<div>
		<input
			type="text"
			placeholder="Text Filter"
			value={props.filters.text}
			onChange={(e) => {
				return props.dispatch(setTextFilter(e.target.value));
			}}
		></input>
		<select
			//value={props.filters.value}
			onChange={(e) => {
				if (e.target.value === 'date') {
					return props.dispatch(sortByDate());
				} else if (e.target.value === 'amount') {
					return props.dispatch(sortByAmount());
				}
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
