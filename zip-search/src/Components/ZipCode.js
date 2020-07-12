import React, { Component } from 'react';
import axios from 'axios';

class ZipCode extends Component {
	constructor(props){
		super(props);
		this.state = {
			zipName: '',
			zipExists: false,
			zipData: [],
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
			zipName: event.target.value
		})
	}

	handleSearch = async () => {
		try {
			let res = await axios.get('http://ctp-zip-api.herokuapp.com/zip/'+this.state.zipName);
			this.setState({zipData: res.data, zipExists: true});
			} catch (error) {
				this.setState({zipExists: false});
			}
		}

	zipResults = () => {
		return (
		    this.state.zipData.map(zip => 
				<div id = "box">
			        <div id = "boxhead">{zip.LocationText}</div>
			        	<div id='textleft'>
							<br></br>
							<ul>
								<li>State: {zip.State}</li>
								<li>Location: ({zip.Lat}, {zip.Long})</li>
								<li>Population (estimated): {zip.EstimatedPopulation}</li>
								<li>Total Wages: {zip.TotalWages}</li>
							</ul>
			       		</div> 
		        </div>)
		)
	} 

	render() {
		return (
			<div>
				<div id = 'center'>
					<h1 id='headers'>Zip Code Search</h1>
					<form onSubmit={this.handleSubmit}>
						<p>
						<b>Zip Code: </b>
						<input id='inputbox' type='text' placeholder='Try 10016' value={this.state.zipName} onChange={this.handleInputChange}/>
						<button id='button'onClick={this.handleSearch}>Search</button>
						</p>
					</form>
				</div>
				<center style = {{marginTop: '30px'}}>
						{this.zipResults()}
				</center>
			</div>
		)
	}
}

export default ZipCode;
