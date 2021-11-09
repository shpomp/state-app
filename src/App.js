import "./App.css";
import Counter from "./components/Counter";
import CounterContainer from "./components/CounterContainer";

import Search from "./components/Search";

function App() {
	return (
		<div className="App">
			<Counter />
			<CounterContainer />
			<Search />
		</div>
	);
}

export default App;
