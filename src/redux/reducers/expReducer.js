//EXPENSE REDUCER
const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
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
