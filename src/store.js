import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { TODO_ADD, TODO_TOGGLE, FILTER_SET } from "./reducer";

const store = createStore(rootReducer);

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

function doSetFilter(filter) {
	return {
		type: FILTER_SET,
		filter,
	};
}

export const doStuff = () => {
	console.log("initial state:", store.getState());

	store.dispatch(doAddTodo("0", "learn redux"));
	store.dispatch(doAddTodo("1", "learn mobx"));
	console.log("after dispatching doAddTodo", store.getState());

	store.dispatch(doToggleTodo("0"));

	console.log("after dispatching doToggleTodo", store.getState());

	store.dispatch(doSetFilter("COMPLETED"));
	console.log(store.getState());
};

unsubscribe(); //
