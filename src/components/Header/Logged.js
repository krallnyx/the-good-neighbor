import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios'
import { logout, setCurrentLocation } from '../../tools/actions'


class Logged extends React.Component {

	componentDidMount () {
		if (!this.props.currentLocation) { 
			console.log('will have to search for geolocation')
			this.getCurrentLocation()
		} else {
			console.log('already got geolocation')
    	}
	}

	getPosition = (position) => {
	let addressName = null
    const googleGeoCoding = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyAVr5FG_sBx3vU0seFGE7wiSRIN9JHwY1k"
	
	axios.get(googleGeoCoding).then( response => {
		this.props.setUsersLocation({ name: 'unknown', lat: 51.505484, lng: -0.075337 })
      if (response.data.status === 'OK') {
        addressName = response.data.results[3].formatted_address
		this.props.setUsersLocation({ name: addressName, lat: position.coords.latitude, lng: position.coords.longitude })
		console.log('got geolocation')
		
      } else {
		console.log('no geolocation available')
		console.log(response.data.status)
		
        this.props.setUsersLocation({ name: 'unknown', lat: 51.505484, lng: -0.075337 })
      }
    })
    .catch(error => {
      console.log('Geocoding error:', error)
	})
  }

  getCurrentLocation = () => {
    if ("geolocation" in navigator) {
		console.log('trying to get geolocation')
		this.props.setUsersLocation({ name: 'unknown', lat: 51.505484, lng: -0.075337 })
		// Forced location to London for HTTP (with HTTPS just remove the next line)
	  	navigator.geolocation.getCurrentPosition(this.getPosition)
	} else {
		console.log('Warning, Geolocation is not active')
    }
  }

	render (props) {
		return(
		<div>
        	<nav className="navbar navbar-expand-md bg-primary navbar-dark rounded-0 shadow-lg">
    			<a className="navbar-brand" href="/user/request">
					The Good Neighbor
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto mx-2 my-3">
						<li className="nav-item">
           		 			<NavLink className="text-white mx-3" to="/user/request" exact>All Requests</NavLink>
						</li>
						<li className="nav-item ">
            				<NavLink className="text-white mx-3" to="/user/myrequests" exact>My Requests</NavLink>
						</li>
            			<li className="nav-item">
            				<NavLink className="text-white mx-3" to="/user/messages" exact>Messages</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav">
		          		<li className="nav-item">
		            		<button onClick={this.props.logout} className="btn-primary rounded">Logout</button>
		          		</li>
		        	</ul>
				</div>
			</nav>
		</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => { dispatch(logout()) },
		setUsersLocation: (val) => { dispatch(setCurrentLocation(val)) }
	}
}

const mapStateToProps = state => {
	return {
		currentLocation: state.currentLocation,
		auth: state.auth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logged)