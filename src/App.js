import "./App.css";
import Counter from "./components/Counter";
import CounterContainer from "./components/CounterContainer";
import SearchableList from "./components/SearchableList";

function App() {
	return (
		<div className="App">
			<Counter />
			<CounterContainer />
			<SearchableList />
		</div>
	);
}

export default App;
