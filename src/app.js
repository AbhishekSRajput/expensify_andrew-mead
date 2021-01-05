import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expActionGenerators';
//import { setTextFilter } from './redux/actions/filActionGenerators';
// import filteredExpenses from "./redux/selectors/filteredExpenses";

const store = configureStore();
store.dispatch(addExpense({ description: 'water bill', amount: 700 }));
store.dispatch(addExpense({ description: 'electricity bill', amount: 4000 }));
store.dispatch(
	addExpense({ description: 'rent', amount: 300, createdAt: 1000 })
);

// const state = store.getState();
// console.log(state);
// const VisibleExpenses = filteredExpenses(state.addExpense, state.filters);
// console.log(VisibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
