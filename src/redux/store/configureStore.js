import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expReducer";
import filterReducer from "../reducers/filReducer";

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filterReducer,
		})
	);
	return store;
};
