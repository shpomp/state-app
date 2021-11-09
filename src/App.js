import "./App.css";
import Counter from "./components/Counter";
import CounterContainer from "./components/CounterContainer";
import SearchableList from "./components/SearchableList";
const dogList = [
	"bulldog",
	"labrador retriever",
	"german shepherd",
	"poodle",
	"siberian husky",
	"chihuahua",
];

function App() {
	return (
		<div className="App">
			<Counter />
			<CounterContainer />
			<SearchableList list={dogList} />
		</div>
	);
}

export default App;
