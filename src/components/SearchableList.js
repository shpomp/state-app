import React from "react";

import { Search } from "./Search";
import List from "./List";

export default class SearchableList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			archivedItems: [],
		};
		this.onChange = this.onChange.bind(this);
	}

	onArchive(id) {
		const { archivedItems } = this.state;
		this.setState({
			archivedItems: [...archivedItems, id],
		});
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
		const filteredList = list.filter(byQuery(query));
		return (
			<div>
				...
				<List list={filteredList} />
			</div>
		);
	}
}
function byQuery(query) {
	return function (item) {
		return !query || item.name.toLowerCase().includes(query.toLowerCase());
	};
}
