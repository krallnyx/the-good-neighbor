import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { initiate } from '../../tools/actions'


class LoggedRoute extends React.Component {

	render (props) {
		const {auth, component: Component} = this.props;
		let okPath = false;

		if(this.props.path === '/sign-in' || this.props.path === '/sign-up') {
			okPath = true
		}
		if (!okPath && auth) {
			this.props.checkAuthorize()
		}

		if (!auth && !okPath) {
			return (<Route render={(props) => <Redirect to={{pathname: '/sign-in', state: {from:this.props.location} }}/> } />)
		} else if (auth && okPath) {
			let lastViewedPage = '/user/request'
			if (typeof this.props.location.state !== 'undefined') {
				if (typeof this.props.location.state.from.pathname !== 'undefined'){
					 lastViewedPage = this.props.location.state.from.pathname
					 lastViewedPage = (lastViewedPage === '/user/profile') ? '/user/myrequests' : lastViewedPage
				}
			}
			return (<Route render={(props) => <Redirect to={{pathname: lastViewedPage, state: {from:this.props.location} }}/> } />)
		} else {
			return (<Route render={() => <Component/>} />)
		}
	}
	
}

const mapDispatchToProps = dispatch => {
	return {
		checkAuthorize: () => { dispatch(initiate()) }
	}
}

export default connect(null, mapDispatchToProps)(LoggedRoute)