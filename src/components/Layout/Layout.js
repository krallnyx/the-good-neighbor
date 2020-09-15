import React from 'react'
//Layout
import Header from './Header'
import Footer from './Footer'

//Any user Pages
import Body from './Body'
import Home from './../Views/Home'
import Signin from './../Views/Signin'
import Signup from './../Views/Signup'
import NotFound from './../Views/NotFound'

//User logged in Pages
import AllRequests from '../Views/AllRequests'
import Messages from './../Views/Messages'
import MyRequests from './../Views/MyRequests'
import CreateRequest from './../Views/CreateRequest'

import LoggedRoute from './LogRoute'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Layout extends React.Component {

	render() {
		let footer = null
		if (!this.props.getLoading) {
			footer = this.props.auth ? '' : <Footer/>
		}
		return (
				<div>
					<Header/>
						<Body>
							<Switch>
								<Route path="/" exact component={Home} />
								<LoggedRoute auth={this.props.auth} path="/sign-in" component={Signin}/>
								<LoggedRoute auth={this.props.auth} path="/sign-up" exact component={Signup}/>
								<LoggedRoute auth={this.props.auth} path="/user/request" component={AllRequests}/>
								<LoggedRoute auth={this.props.auth} path="/user/messages" component={Messages}/>
								<LoggedRoute auth={this.props.auth} path="/user/myrequests" exact component={MyRequests}/>
								<LoggedRoute auth={this.props.auth} path="/user/createrequest" exact component={CreateRequest}/>
								<Route component={NotFound} />
							</Switch>
						</Body>
						{ footer }
				</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		getLoading: state.loading
	}
}


export default withRouter(connect(mapStateToProps)(Layout))