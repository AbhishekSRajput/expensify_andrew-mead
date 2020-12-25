import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Action generators > reducers > getVisibleExpenses >
//Store=createStore(reducer) > Subscribe > Action (dispatch)

//ADD_EXPENSE
const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = 0,
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id,
});
//EDIT_EXPENSE
const editExpense = ({ id, amount }) => {
	return {
		type: "EDIT_EXPENSE",
		id,
		amount,
	};
};
//SET_TEXT_FILTER
const setTextFilter = (text) => ({
	type: "SET_TEXT_FILTER",
	text,
});
//SORT_BY_DATE
const sortByDate = () => ({
	type: "SORT_BY_DATE",
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
});
//SET_START_DATE
const setStartDate = (startDate) => ({
	type: "SET_START_DATE",
	startDate,
});
//SET_END_DATE
const setEndDate = (endDate) => ({
	type: "SET_END_DATE",
	endDate,
});

//EXPENSE REDUCER
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			// return state.concat(action.expense);
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			//filter is applied on array in this case state is declared an array
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE":
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action };
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

//FILTER REDUCER
//default state for filters
const filterDefaultState = {
	text: "",
	sortBy: "date", //date or amount
	startDate: undefined,
	endDate: undefined,
};

const filterReducer = (state = filterDefaultState, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER":
			return {
				...state,
				...action,
			};
		case "SORT_BY_DATE":
			return {
				...state,
				sortBy: "date",
			};
		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy: "amount",
			};
		case "SET_START_DATE":
			return {
				...state,
				...action,
			};
		case "SET_END_DATE":
			return {
				...state,
				...action,
			};
		default:
			return state;
	}
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch =
				typeof startDate !== "number" || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== "number" || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === "date") {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === "amount") {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

//store creation
const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filterReducer,
	})
);

//Subscribe from watch over action calls print modified state in the console

const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(VisibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: "rent", amount: 200, createdAt: -200 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: "petrol", amount: 2000, createdAt: -1000000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense({ id: expenseTwo.expense.id, amount: 5000 }));

// store.dispatch(setTextFilter("t"));
// //filter dispatch action calls

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate({ startDate: 160 }));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate({ endDate: 3000 }));
// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
// const demoState = {
// 	expenses: [
// 		{
// 			id: "asdkjfl",
// 			description: "phone bill",
// 			note: "it is getting harder for me to bay my bills",
// 			amount: 55000,
// 			createdAt: 0,
// 		},
// 	],
// 	filters: {
// 		text: "rent",
// 		sortBy: "amount", //date or amount
// 		startDate: undefined,
// 		endDate: undefined,
// 	},
// };

// const user = {
// 	name: "jen",
// 	age: 25,
// };

// console.log(user);
// console.log({
// 	...user,
// 	name: "abhishek",
// 	city: "pandhurna",
// });
