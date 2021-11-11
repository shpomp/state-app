import ThemeContext from "./ThemeContext";
class A extends React.Component {
	render() {
		return (
			<ThemeContext.Provider value={"green"}>
				<D />
			</ThemeContext.Provider>
		);
	}
}
