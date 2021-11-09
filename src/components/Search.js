import React from "react";
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		const { value } = this.input;
		// do something with the search value
		// e.g. propagate it up to the parent component this.props.onSearch(value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input ref={(node) => (this.input = node)} type="text" />
				<button type="submit">Search</button>
			</form>
		);
	}
}

export default Search;
