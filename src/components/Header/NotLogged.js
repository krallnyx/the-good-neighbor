import React from 'react'
import { NavLink } from 'react-router-dom'

const NotLogged = (props) => {


	return(
		<div>
        	<nav className="navbar navbar-expand-md bg-primary navbar-dark rounded-0 shadow-lg">
    			<a className="navbar-brand" href="/">
					The Good Neighbor
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto mx-2 my-3">
						<li className="nav-item ">
            				<NavLink className="text-white mx-4" to="/" exact>Home</NavLink>
						</li>
						<li className="nav-item">
           		 			<NavLink className="text-white mx-4" to="/sign-in" exact>Login</NavLink>
						</li>
            			<li className="nav-item">
            				<NavLink className="text-white mx-4" to="/sign-up" exact>Register</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		)
}

export default NotLogged