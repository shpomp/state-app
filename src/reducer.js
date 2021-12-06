import { combineReducers } from "redux";
export const TODO_ADD = "TODO_ADD";
export const TODO_TOGGLE = "TODO_TOGGLE";
export const FILTER_SET = "FILTER_SET";

export const rootReducer = combineReducers({
	todoState: todoReducer,
	filterState: filterReducer,
});

function todoReducer(state = [], action) {
	switch (action.type) {
		case TODO_ADD: {
			return state.concat(todoEntityReducer(undefined, action));
		}
		case TODO_TOGGLE: {
			return state.map((todo) => todoEntityReducer(todo, action));
		}
		default:
			return state;
	}
}

function todoEntityReducer(state, action) {
	switch (action.type) {
		case TODO_ADD: {
			return applyAddTodo(state, action);
		}
		case TODO_TOGGLE: {
			return applyToggleTodo(state, action);
		}
		default:
			return state;
	}
}

function applyAddTodo(state, action) {
	return Object.assign({}, action.todo, { completed: false });
}

function applyToggleTodo(todo, action) {
	return todo.id === action.todo.id
		? Object.assign({}, todo, { completed: !todo.completed })
		: todo;
}

function filterReducer(state = "SHOW_ALL", action) {
	switch (action.type) {
		case FILTER_SET: {
			return applySetFilter(state, action);
		}
		default:
			return state;
	}
}

function applySetFilter(state, action) {
	return action.filter;
}

// The todoReducer doesn’t know anything about the filterState
// and the filterReducer doesn’t know anything about the todoState.
