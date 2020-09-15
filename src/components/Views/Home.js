import React from 'react';
import { connectBack } from '../../tools/axiosURL'

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		  statUser: 0,
		  statFulfilled: 0,
		  statUnfulfilled: 0,
		  intervalID: 0
		}
	  }

	componentDidMount () {
		// initial load of the stats
		this.getData();
		
		// reload every 5 seconds
		this.intervalID = setInterval(this.getData.bind(this), 5000);
	}
	componentWillUnmount() {
		console.log('Clearing Interval')
		clearInterval(this.intervalID);
	  }

	getData =() => {
		connectBack.get('users/count', {
		})
		.then( response => {
			this.setState({statUser: response.data})
			this.setState({statFulfilled: response.data})
			this.setState({statUnfulfilled: response.data})
			console.log('getting stats')
		})
		.catch( error => {
			console.log('CountUsers ', error)
		})
	}

	render (props) {
		return(       
      		<div className="container text-primary">
				<div className="row">
					<div className="col-12 text-center mt-5"><h1>The Good Neighbor</h1></div>
					<div className="col-12 text-center mt-1 mb-5"><h3>An aid platform for your neighborhood</h3></div>
					<div className="col-12 text-white text-center bg-primary">Are you happy to give a hand to someone near you ?</div>
					<div className="col-12 text-white text-center bg-primary">Do you need help for anything ?</div>
					<div className="col-12 text-white text-center bg-primary shadow">The Good Neighbor is the place you are looking for !</div>
				</div>
				<div className="row">
					<div className="col-12 text--primary mt-5 mb-3 text-center border">
						We currently have {this.state.statUser.users} users registered on the platform. We are grateful for the {this.state.statFulfilled.fulfilled} already fulfilled requests and there is still {this.state.statUnfulfilled.unfulfilled} requests unfulfilled.
					</div>
				</div>
        		<div className="row">
				<div className="col-12 text--primary mt-5 mb-3 h3 text-center">Examples of people that have used The Good Neighbor recently :</div>
          			<div className="col-12 col-md-5 offset-md-1 border text-center mb-5">
            			In Theale the Johnson's helped an ederly redecorating his garden.
            			<img src={require('../../media/gardening.jpg')} className="col-12 mx-0 mt-1" alt="gardening" /> 
          			</div>
          			<div className="col-12 col-md-5 offset-md-1 border text-center mb-5">
            			Sometimes all you need is someone to speak to.
            			<img src={require('../../media/family.jpg')} className="col-12 mx-0 mt-1" alt="Happy Family" /> 
          			</div> 
          			<div className="col-12 col-md-5 offset-md-1 border text-center mb-5">
            			In Staines, the Smith had kittens to take care of.
            			<img src={require('../../media/kittens.jpg')} className="col-12 mx-0 mt-1" alt="Kittens" /> 
          			</div> 
          			<div className="col-12 col-md-5 offset-md-1 border text-center mb-5">
            			In Billey, Adam was stuck home because of a surgery and wasn't able to get groceries.
            			<img src={require('../../media/stuck.jpg')} className="col-12 mx-0 mt-1" alt="Stuck Home" /> 
          			</div> 
        		</div>
      		</div>
		)
	}
}

export default Home