import { Search } from "./Search";
import { List } from "./List";

function SearchableList({ list }) {
	return (
		<div>
			<Search>Search List:</Search>
			<List list={list} />
		</div>
	);
}
