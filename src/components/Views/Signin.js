import React from 'react';
import { connectBack } from '../../tools/axiosURL'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';
import { NavLink } from 'react-router-dom'
import { login } from '../../tools/actions'

const Signin = (props) => {

	const loginSchema = new Schema({
		email:{
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: <div className="offset-2 text-danger">Email is required</div>
				},
				{
					validator: (value) => {
          	var emailTest = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
            if(!emailTest.test(value)) {
              return false;
            }
          },
					errorMessage: <div className="offset-2 text-danger">This is not a valid email</div>
				}
			]
		},    
		password: {
      type: String,
      validators: [
	      {
	          validator: (value) => {
	            if(value === undefined || value === '') {
	                return false;
	            }
	          },
	          errorMessage: <div className="offset-2 text-danger">Password is required</div>
	      },
	      {
	          validator: (value) => {
	            if(value.length <= 5) {
	                return false;
	            }
	          },
	          errorMessage: <div className="offset-2 text-danger">Password is too short</div>
	      }
    	]
    }
	})

	const submitMethod = (model) => {
	  console.log('form is valid')
	  let formInfo = { 
			user: {
    	email: model.email,
    	password: model.password
			}
		}
		loginUser(formInfo)
	}

	const loginUser = (formInfo) => {
	let notification = document.getElementById('notif')
	connectBack.post('users/login', formInfo)
		.then(response => {
			notification.innerHTML = response.data.status
			props.login(response.data)
		})
		.catch(error => {
			notification.innerHTML = error.response.data.error
		})
	}

	return( 
		<div>
			<div className="container">
				<div className="row">
					<img src={require('../../media/main.jpg')} className="offset-2  col-8 my-5" alt="Holding hands"/>
					<div className="col-12 text-center text-primary h4 my-4">Sign-in to your account</div>
					<Form
						schema={loginSchema}
						onSubmit={submitMethod} 
						className="col-12">
						<div>
							<p className="text-success" id="notif"></p>
						</div>
						<div className="form-group">
							<label className="offset-2 text-primary my-2">Email address:</label>
							<TextField name="email" className="form-control offset-2 col-8" placeholder="Enter your email" type="email"></TextField>
						</div>
						<div className="form-group">
							<label className="offset-2  text-primary my-2">Password:</label>
							<TextField name="password" className="form-control offset-2 col-8" type="password" placeholder="Enter a strong password"></TextField>
						</div>
						<SubmitField className="offset-4 col-3 submit btn btn-primary my-2" value="Submit" />
					</Form>
				</div>
				<div className="offset-2 my-2 text-primary">No account yet ? <NavLink className="text-primary" to="/sign-up" exact><u>Register</u></NavLink> instead.</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		login: (user) => { dispatch(login(user)) }
	}
}

const mapStateToProps = state => {
	return {
		getLoading: state.loading
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))