import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calenderFocused: false,
	};

	// onDescriptionChange = (e) => {
	// 	const description = e.target.value;
	// 	this.setState({ description });
	// };
	// OnNoteChange = (e) => {
	// 	const note = e.target.value;
	// 	this.setState({ note });
	// };

	onDesAndNoteChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState({ amount });
		}
	};

	onDateChange = (createdAt) => {
		this.setState(() => ({ createdAt }));
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};
	render() {
		return (
			<div>
				<form>
					<input
						name="description"
						type="text"
						placeholder="description"
						autoFocus
						value={this.state.description}
						onChange={this.onDesAndNoteChange}
					></input>
					<input
						name="amount"
						type="text"
						placeholder="amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					></input>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						name="note"
						placeholder="add a not to yours expense *(optional)"
						value={this.state.note}
						onChange={this.onDesAndNoteChange}
					></textarea>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
