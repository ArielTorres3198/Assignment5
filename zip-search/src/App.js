import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ZipCode from './Components/ZipCode'

class App extends Component {
	render() {
		return (
			<div className="App">
				<ZipCode />
			</div>
		);
	}
}

export default App;
