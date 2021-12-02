import { createStore } from "redux";
import { reducer } from "./reducer";
import { TODO_ADD, TODO_TOGGLE } from "./reducer";
//import * as actions from "./reducer";

const store = createStore(reducer, []);

const unsubscribe = store.subscribe(() => {
	console.log("store update, current state:");
	console.log(store.getState());
});

function doAddTodo(id, name) {
	return {
		type: TODO_ADD,
		todo: { id, name },
	};
}
function doToggleTodo(id) {
	return {
		type: TODO_TOGGLE,
		todo: { id },
	};
}

export const doStuff = () => {
	console.log("initial state:");
	console.log(store.getState());

	store.dispatch(doAddTodo("0", "learn redux"));
	store.dispatch(doAddTodo("1", "learn mobx"));
	console.log(store.getState());

	store.dispatch(doToggleTodo("0"));

	store.dispatch({
		type: TODO_TOGGLE,
		todo: { id: "0" },
	});

	console.log(store.getState());
};

unsubscribe();
//
