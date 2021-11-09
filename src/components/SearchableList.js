import React from "react";

import { Search } from "./Search";
import List from "./List";

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
		const { query, archivedItems } = this.state;
		const filteredList = list
			.filter(byQuery(query))
			.filter(byArchived(archivedItems));
		return (
			<div>
				...
				<List list={filteredList} onArchive={this.onArchive} />{" "}
			</div>
		);
	}
}
function byQuery(query) {
	return function (item) {
		return !query || item.name.toLowerCase().includes(query.toLowerCase());
	};
}

function byArchived(archivedItems) {
	return function (item) {
		return !archivedItems.includes(item.id);
	};
}
