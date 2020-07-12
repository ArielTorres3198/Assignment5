import React, { Component } from 'react';
import axios from 'axios';

class City extends Component {
	constructor(props){
		super(props);
		this.state = {
			cityName: '',
			cityExists: false,
			cityData: [],
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const data = this.state
		console.log(data)	
	}

	handleInputChange = (event) => {
		event.preventDefault()
		this.setState({
			cityName: event.target.value
		})
	}

	handleSearch = async () => {
		try {
			let res = await axios.get('http://ctp-zip-api.herokuapp.com/city/'+this.state.cityName.toUpperCase());
			this.setState({cityData: res.data, cityExists: true});
			} catch (error) {
				this.setState({cityExists: false});
			}
		}

	cityResults = () => {
		return (
		    this.state.cityData.map((value,index) => 
				<div id = "box">
					{value}
		        </div>)
		)
	} 

	render() {
		return (
			<div>
				<div id = 'center'>
					<h1 id='headers'>City Search</h1>
					<form onSubmit={this.handleSubmit}>
						<p>
						<b>City: </b>
						<input id='inputbox' type='text' placeholder='Try NYC' value={this.state.cityName} onChange={this.handleInputChange}/>
						<button id='button'onClick={this.handleSearch}>Search</button>
						</p>
					</form>
				</div>
				<center style = {{marginTop: '30px'}}>
					{this.cityResults()}
				</center>
			</div>
		)
	}
}

export default City;
