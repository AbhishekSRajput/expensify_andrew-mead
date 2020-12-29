import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocused: false,
			error: '',
		};
	}

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
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState({ amount });
		}
	};

	onDateChange = (createdAt) => {
		//this is to prevent deletion of dates from input
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({
				error: 'please provide description and amount',
			}));
		} else {
			this.setState(() => ({
				error: '',
			}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					{this.state.error && <p>{this.state.error}</p>}
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
