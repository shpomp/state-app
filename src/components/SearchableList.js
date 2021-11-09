import React from "react";

import { Search } from "./Search";
import { List } from "./List";

export default class SearchableList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
		};
		this.onChange = this.onChange.bind(this);
	}
	onChange(event) {
		const { value } = event.target;
		this.setState({
			query: value,
		});
	}
	render() {
		const { list } = this.props;
		const { query } = this.state;
		return (
			<div>
				<Search query={query} onChange={this.onChange}>
					Search List:
				</Search>
				<List list={(list || []).filter(byQuery(query))} />
			</div>
		);
	}
}
function byQuery(query) {
	return function (item) {
		return !query || item.name.toLowerCase().includes(query.toLowerCase());
	};
}
