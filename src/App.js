import "./App.css";
import CounterContainer from "./components//counter/CounterContainer";
import { withArchive } from "./components/ArchivableList";
import List from "./components/List";

import { doStuff } from "../src/store";

const dogList = [
	{
		"id": 0,
		"name": "affenpinscher",
	},
	{
		"id": 1,
		"name": "african",
	},
	{
		"id": 2,
		"name": "airedale",
	},
	{
		"id": 3,
		"name": "akita",
	},
	{
		"id": 4,
		"name": "appenzeller",
	},
	{
		"id": 5,
		"name": "australian",
	},
	{
		"id": 6,
		"name": "basenji",
	},
	{
		"id": 7,
		"name": "beagle",
	},
	{
		"id": 8,
		"name": "bluetick",
	},
	{
		"id": 9,
		"name": "borzoi",
	},
	{
		"id": 10,
		"name": "bouvier",
	},
	{
		"id": 11,
		"name": "boxer",
	},
	{
		"id": 12,
		"name": "brabancon",
	},
	{
		"id": 13,
		"name": "briard",
	},
	{
		"id": 14,
		"name": "buhund",
	},
	{
		"id": 15,
		"name": "bulldog",
	},
	{
		"id": 16,
		"name": "bullterrier",
	},
	{
		"id": 17,
		"name": "cattledog",
	},
	{
		"id": 18,
		"name": "chihuahua",
	},
	{
		"id": 19,
		"name": "chow",
	},
	{
		"id": 20,
		"name": "clumber",
	},
	{
		"id": 21,
		"name": "cockapoo",
	},
	{
		"id": 22,
		"name": "collie",
	},
	{
		"id": 23,
		"name": "coonhound",
	},
	{
		"id": 24,
		"name": "corgi",
	},
	{
		"id": 25,
		"name": "cotondetulear",
	},
	{
		"id": 26,
		"name": "dachshund",
	},
	{
		"id": 27,
		"name": "dalmatian",
	},
	{
		"id": 28,
		"name": "dane",
	},
	{
		"id": 29,
		"name": "deerhound",
	},
	{
		"id": 30,
		"name": "dhole",
	},
	{
		"id": 31,
		"name": "dingo",
	},
	{
		"id": 32,
		"name": "doberman",
	},
	{
		"id": 33,
		"name": "elkhound",
	},
	{
		"id": 34,
		"name": "entlebucher",
	},
	{
		"id": 35,
		"name": "eskimo",
	},
	{
		"id": 36,
		"name": "finnish",
	},
	{
		"id": 37,
		"name": "frise",
	},
	{
		"id": 38,
		"name": "germanshepherd",
	},
	{
		"id": 39,
		"name": "greyhound",
	},
	{
		"id": 40,
		"name": "groenendael",
	},
	{
		"id": 41,
		"name": "havanese",
	},
	{
		"id": 42,
		"name": "hound",
	},
	{
		"id": 43,
		"name": "husky",
	},
	{
		"id": 44,
		"name": "keeshond",
	},
	{
		"id": 45,
		"name": "kelpie",
	},
	{
		"id": 46,
		"name": "komondor",
	},
	{
		"id": 47,
		"name": "kuvasz",
	},
	{
		"id": 48,
		"name": "labradoodle",
	},
	{
		"id": 49,
		"name": "labrador",
	},
	{
		"id": 50,
		"name": "leonberg",
	},
	{
		"id": 51,
		"name": "lhasa",
	},
	{
		"id": 52,
		"name": "malamute",
	},
	{
		"id": 53,
		"name": "malinois",
	},
	{
		"id": 54,
		"name": "maltese",
	},
	{
		"id": 55,
		"name": "mastiff",
	},
	{
		"id": 56,
		"name": "mexicanhairless",
	},
	{
		"id": 57,
		"name": "mix",
	},
	{
		"id": 58,
		"name": "mountain",
	},
	{
		"id": 59,
		"name": "newfoundland",
	},
	{
		"id": 60,
		"name": "otterhound",
	},
	{
		"id": 61,
		"name": "ovcharka",
	},
	{
		"id": 62,
		"name": "papillon",
	},
	{
		"id": 63,
		"name": "pekinese",
	},
	{
		"id": 64,
		"name": "pembroke",
	},
	{
		"id": 65,
		"name": "pinscher",
	},
	{
		"id": 66,
		"name": "pitbull",
	},
	{
		"id": 67,
		"name": "pointer",
	},
	{
		"id": 68,
		"name": "pomeranian",
	},
	{
		"id": 69,
		"name": "poodle",
	},
	{
		"id": 70,
		"name": "pug",
	},
	{
		"id": 71,
		"name": "puggle",
	},
	{
		"id": 72,
		"name": "pyrenees",
	},
	{
		"id": 73,
		"name": "redbone",
	},
	{
		"id": 74,
		"name": "retriever",
	},
	{
		"id": 75,
		"name": "ridgeback",
	},
	{
		"id": 76,
		"name": "rottweiler",
	},
	{
		"id": 77,
		"name": "saluki",
	},
	{
		"id": 78,
		"name": "samoyed",
	},
	{
		"id": 79,
		"name": "schipperke",
	},
	{
		"id": 80,
		"name": "schnauzer",
	},
	{
		"id": 81,
		"name": "setter",
	},
	{
		"id": 82,
		"name": "sheepdog",
	},
	{
		"id": 83,
		"name": "shiba",
	},
	{
		"id": 84,
		"name": "shihtzu",
	},
	{
		"id": 85,
		"name": "spaniel",
	},
	{
		"id": 86,
		"name": "springer",
	},
	{
		"id": 87,
		"name": "stbernard",
	},
	{
		"id": 88,
		"name": "terrier",
	},
	{
		"id": 89,
		"name": "tervuren",
	},
	{
		"id": 90,
		"name": "vizsla",
	},
	{
		"id": 91,
		"name": "waterdog",
	},
	{
		"id": 92,
		"name": "weimaraner",
	},
	{
		"id": 93,
		"name": "whippet",
	},
	{
		"id": 94,
		"name": "wolfhound",
	},
];

const ListWithArchive = withArchive(List);

function App() {
	return (
		<div className="App">
			<button onClick={doStuff}>tickle state </button>

			<p>List with archive</p>
			<ListWithArchive list={dogList} />
			<CounterContainer />
		</div>
	);
}

export default App;
