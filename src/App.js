import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/login"; // Import the Login component
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<Login /> {/* Use the Login component */}
			<Login /> {/* Use the Login component */}
		</div>
	);
}

export default App;
