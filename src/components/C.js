import ThemeContext from "./ThemeContext";
class C extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(coloredTheme) => (
					<div style={{ color: coloredTheme }}>Hello World</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}
