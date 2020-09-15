import React from 'react'
import RequestTable from './../Requests/RequestsTable'
import { Link } from 'react-router-dom'

class MyRequests extends React.Component {


	render (props) 
	{
		return (
		<div className="container-fluid">
				<Link to="/user/createrequest" className="btn btn-primary m-3 p-3 px-5">Create a new Request</Link>
				<RequestTable userRequest={true}/>
		</div>
		)
	}
}

export default MyRequests