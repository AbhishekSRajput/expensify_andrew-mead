import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../redux/actions/filActionGenerators';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';

class ExpenseListFilter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			calenderFocused: null,
		};
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = (calenderFocused) => {
		this.setState(() => ({ calenderFocused }));
	};

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Text Filter"
					value={this.props.filters.text}
					onChange={(e) => {
						return this.props.dispatch(setTextFilter(e.target.value));
					}}
				></input>
				<select
					//value={props.filters.value}
					onChange={(e) => {
						if (e.target.value === 'date') {
							return this.props.dispatch(sortByDate());
						} else if (e.target.value === 'amount') {
							return this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId={uuid()}
					endDate={this.props.filters.endDate}
					endDateId={uuid()}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				></DateRangePicker>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
