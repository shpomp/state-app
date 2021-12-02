export const TODO_ADD = "TODO_ADD";
export const TODO_TOGGLE = "TODO_TOGGLE";

export const reducer = (state = [], action) => {
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
};

function applyAddTodo(state, action) {
	const todo = Object.assign({}, action.todo, { completed: false });
	const todos = state.todos.concat(todo);
	return Object.assign({}, state, { todos });
}

function applyToggleTodo(state, action) {
	const todos = state.todos.map((todo) =>
		todo.id === action.todo.id
			? Object.assign({}, todo, { completed: !todo.completed })
			: todo
	);
	return Object.assign({}, state, { todos });
}
