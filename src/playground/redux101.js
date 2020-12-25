import { createStore } from "redux";
//Action generators > reducers > store=createStore(reducer) > Subscribe > Action (dispatch)
//Action generators :: Function that returns Action Objects
//increment action generator

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	//incrementBy: typeof incrementBy === "number" ? incrementBy : 1,
	incrementBy,
});

//reset action generator

const resetCount = () => ({
	type: "RESET",
});

//decrement action generator
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy,
});

//setCount action generator
const setCount = ({ setCount }) => ({
	type: "SET",
	setCount,
});

//Reducers
//Actions describes the fact that something happened, but don't specify the
//application's state changes in response. This is the job of Reducers.
// 01. Reducers are pure functions
// 02. Never change Action or State

const countReducer = (state = { count: 0 }, action) => {
	// if(action.type==='INCREMENT'){
	//     return {
	//         count:state.count +1
	//     }
	// }else {
	//     return state;
	// }

	//generally Switch is used instead of if else calls
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + action.incrementBy,
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy,
			};
		case "RESET":
			return {
				count: 0,
			};
		case "SET":
			return {
				count: action.setCount,
			};
		default:
			return state;
	}
};

//createStore expects function to be first argument;
//then first argument (which is function) inside createStore function is going to be state;
//And the second argument inside a createStore function is Actions::which is an object that gets sent to state;
//this works like setState calls;
const store = createStore(countReducer);

// //get state call gets the current state object
// console.log(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

//Action :: is an object that get sent to the store;

//action : i would like to increment the count
// store.dispatch({
// 	type: "INCREMENT",
// 	incrementBy: 5,
// });
store.dispatch(incrementCount({ incrementBy: 7 }));

//action : i would like to increment the count
// store.dispatch({
// 	type: "INCREMENT",
// });
store.dispatch(incrementCount());

//action : i would like to decrement the count
store.dispatch(resetCount());

//action : i would like to decrement the count
// store.dispatch({
// 	type: "DECREMENT",
// 	decrementBy: 7,
// });
store.dispatch(decrementCount({ decrementBy: 9 }));

//action : i would like to decrement the count
// store.dispatch({
// 	type: "DECREMENT",
// });
store.dispatch(decrementCount());

//action : i would like to set the count
// store.dispatch({
// 	type: "SET",
// 	count: 1000,
// });

store.dispatch(setCount({ setCount: 2000 }));
