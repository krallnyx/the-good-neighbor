import React from 'react'
import NotLogged from '../Header/NotLogged'
import Logged from '../Header/Logged'
import { Route } from 'react-router-dom'

const Header = (props) => {
	return (
		<div>
			<Route path="/(|sign-in|sign-up)" exact component={NotLogged} />
			<Route path="/user/" component={Logged} />
		</div>
		)
}

export default Header