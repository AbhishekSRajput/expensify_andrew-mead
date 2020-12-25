import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

import AppRouter from "./routers/AppRouter";

import configureStore from "./redux/store/configureStore";
import { addExpense } from "./redux/actions/expActionGenerators";
import { setTextFilter } from "./redux/actions/filActionGenerators";
import filteredExpenses from "./redux/selectors/filteredExpenses";

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 3000 }));
store.dispatch(addExpense({ description: "electricity bill", amount: 4000 }));
store.dispatch(setTextFilter("water bill"));

const state = store.getState();
console.log(state);
const VisibleExpenses = filteredExpenses(state.addExpense, state.filters);
console.log(VisibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

if (module.hot) {
	module.hot.accept();
}
