import React from "react";
const List = ({ list }) => {
	const [archivedItems, setArchivedItems] = React.useState([]);

	const handleArchive = (id) => {
		setArchivedItems((archivedItems) => [...archivedItems, id]);
	};

	return (
		<ul>
			{list.filter(byArchived(archivedItems)).map((item) => (
				<li key={item.id}>
					<span>{item.name}</span>
					<span>
						<button type="button" onClick={() => handleArchive(item.id)}>
							Archive
						</button>
					</span>
				</li>
			))}
		</ul>
	);
};

const byArchived = (archivedItems) => (item) =>
	!archivedItems.includes(item.id);

export default List;
