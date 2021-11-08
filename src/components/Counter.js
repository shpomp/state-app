import React from "react";
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}
	render() {
		return (
			<div>
				{" "}
				<p>{this.state.counter}</p>
			</div>
		);
	}
}
