import React from "react";

const CounterPresenter = (props) => {
	return (
		<div>
			<p>{props.counter}</p>
			<button type="button" onClick={props.onIncrement}>
				Increment
			</button>
			<button type="button" onClick={props.onDecrement}>
				Decrement
			</button>
		</div>
	);
};
export default CounterPresenter;
