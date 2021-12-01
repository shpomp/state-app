import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer, []);

const unsubscribe = store.subscribe(() => {
	console.log("store update, current state:");
	console.log(store.getState());
});

export const doStuff = () => {
	console.log("initial state:");
	console.log(store.getState());

	store.dispatch({
		type: "TODO_ADD",
		todo: { id: "0", name: "learn redux", completed: false },
	});

	store.dispatch({
		type: "TODO_ADD",
		todo: { id: "1", name: "learn mobx", completed: false },
	});
	console.log(store.getState());

	store.dispatch({
		type: "TODO_TOGGLE",
		todo: { id: "0" },
	});

	console.log(store.getState());
};

unsubscribe();
