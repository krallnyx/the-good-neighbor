import React from 'react'
import Map from '../Map/Map'
import Pop from '../../tools/pop'
import { connect } from 'react-redux'
import { connectBack } from '../../tools/axiosURL'
import RequestsCardContainer from './../Requests/RequestsCardContainer'
import { Link } from 'react-router-dom'

class AllRequests extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  statUser: 0,
		  statFulfilled: 0,
		  statUnfulfilled: 0,
		  isActive: true
		}
	  }
	
	  handleShow = () => {
		this.setState({isActive: true});
	  };
	
	  handleHide = () => {
		this.setState({isActive: false});
	  };

	  handleMap = () => {
		this.setState({isActive : !this.state.isActive});
	  };


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


	render() {

		return (
			<div>
			<section>
				<div className="container-fluid">
					<div className="row text-primary text-center">
					<div className="col-7 h3 mt-2">Requests from others in your area :</div>
						<Link to="/user/createrequest" className="btn btn-primary col-3 mt-3">Create a new Request</Link>
						<div className="col-7">(If you can't see any, try to zoom out)</div>
						<div className="col-12">
							<Pop />
						</div>
						<div className="btn btn-primary mx-auto mt-3 d-md-none" onClick={ this.handleMap }>{(this.state.isActive === true) ? <span className="">Hide the Map</span> : <span className="">Show the Map</span>}</div>
						{this.state.isActive ? 
							<div className="col-12 col-md-7 mt-3 map">
								<Map/>
							</div>
						 : null }
             			
						<div className="col-12 col-md-5 p-0 map-request">
							<section className="map-request-container">
								<div className="container lh-1-5 p-1 pb-6 mb-7">
									<RequestsCardContainer userRequest={false}/>
								</div>
							</section>
						</div>
						<footer className="text-white bg-dark col-12 text-center mt-2 pt-2 pb-5">Registered Users: {this.state.statUser.users}, Requests already fulfilled: {this.state.statFulfilled.fulfilled}, Requests unfulfilled: {this.state.statUnfulfilled.unfulfilled} </footer>
					</div>
				</div>
			</section>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRequests)