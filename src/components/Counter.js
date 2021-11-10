import React from "react";
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
	}
	onIncrement() {
		this.setState({
			counter: this.state.counter + 1,
		});
		// fetch("https://dog.ceo/api/breeds/list/all")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log(data.message);
		// 		console.log(Object.keys(data.message));
		// 		let dogNames = Object.keys(data.message);
		// 		let i = 0;
		// 		let dogBreedsArray = [];
		// 		for (var key in dogNames) {
		// 			let dog = { id: i, name: dogNames[i] };
		// 			dogBreedsArray.push(dog);
		// 			i++;
		// 		}
		// 		console.log(dogBreedsArray);
		// 	});
	}
	onDecrement() {
		this.setState({
			counter: this.state.counter - 1,
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.counter}</p>
				<button type="button" onClick={this.onIncrement}>
					Increment
				</button>
				<button type="button" onClick={this.onDecrement}>
					Decrement
				</button>
			</div>
		);
	}
}
export default Counter;
