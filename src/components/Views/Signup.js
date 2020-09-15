import React from 'react';
import { connectBack } from '../../tools/axiosURL'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';
import { NavLink } from 'react-router-dom'

	const Signup = (props) => {

		const loginSchema = new Schema({
		first_name:{
			type: String,
			validators: [
        {
            validator: (value) => {
              if(value === undefined || value === '') {
                  return false;
              }
            },
            errorMessage: <div className="offset-2 text-danger">First name is required</div>
        },
        {
            validator: (value) => {
              if(value.length >= 50) {
                  return false;
              }
            },
            errorMessage: <div className="offset-2 text-danger">First name is too long</div>
        }
      ]
		},
		last_name:{
			type: String,
			validators: [
        {
            validator: (value) => {
              if(value === undefined || value === '') {
                  return false;
              }
            },
            errorMessage: <div className="offset-2 text-danger">Last name is required</div>
        },
        {
            validator: (value) => {
              if(value.length >= 50) {
                  return false;
              }
            },
            errorMessage: <div className="offset-2 text-danger">Last name is too long</div>
        }
      ]
		},
    email:{
        type: String,
        validators: [
            {
                validator: (value) => {
                	var emailtest = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
                  if(!emailtest.test(value)) {
                      return false;
                  }
                },
                errorMessage: <div className="offset-2 text-danger">This is not a vaild email</div>
            },
            {
                validator: (value) => {
                    if(value === undefined || value === '') {
                        return false;
                    }
                },
                errorMessage: <div className="offset-2 text-danger">Email is required</div>
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
	});

	const submitMethod = (model) => {

    const image = document.querySelector("#image");
    let imageError = document.getElementById('imageError')
    imageError.innerHTML = '';
    if(!image.files[0]) {
       imageError.innerHTML = 'Government-approved ID is required'
      return
    }
    
    let formData = new FormData();
    formData.append("first_name", model.first_name)
    formData.append("last_name", model.last_name)
    formData.append("image", image.files[0], 'imageId')
    formData.append("email", model.email)
    formData.append("password", model.password)
		createUser(formData)
	}

	const createUser = (formInfo) => {
	let notification = document.getElementById('railsError')
	connectBack.post('users', formInfo)
		.then(response => {
			notification.innerHTML = response.data.message
			props.login(response.data)
		})
		.catch(error => {
			console.log('Error Sign up: ', JSON.stringify(error))
			notification.innerHTML = error.response.data.errors
		})
	}

	const errorMethod = (errors, model) => {
	}

		return(
		  <div>
				<div className="container">
					<div className="row">
            <img src={require('../../media/main.jpg')} className="offset-2 col-8 my-5" alt="Holding hands"/>
						<div className="col-12 text-center text-primary h4 my-3">Create an Account</div>
						<Form 
							className="col-12" 
							schema={loginSchema} 
							onError={errorMethod}
							onSubmit={submitMethod}>
							<div className="text-danger" id="railsError"></div>
							<div className="form-group">
								<label className="offset-2 col-8 text-primary my-2">First name<span className="text-danger">*</span></label>
								<TextField name="first_name" className="form-control offset-2 col-8" value="" type="text"></TextField>
							</div>
							<div className="form-group">
								<label className="offset-2 col-8 text-primary my-2">Last name<span className="text-danger">*</span></label>
								<TextField name="last_name" className="form-control offset-2 col-8" type="text"></TextField>
							</div>
							<div className="form-group">
								<label className="offset-2 col-8 text-primary my-2">Email address<span className="text-danger">*</span></label>
								<TextField name="email" className="form-control offset-2 col-8" type="email"></TextField>
							</div>
              <div className="form-group">
                <label className="offset-2 col-8 text-primary my-2">Government-approved ID<span className="text-danger">*</span></label>
                <input id="image" type="file" name="image" className="form-control offset-2 col-8" required/>
                <p className="text-danger offset-2 col-8" id="imageError"></p>
              </div>
							<div className="form-group">
								<label className="offset-2 col-8 text-primary my-3">Password<span className="text-danger">*</span></label>
								<TextField name="password" className="form-control offset-2 col-8" type="password"></TextField>
							</div>
							<SubmitField className="submit btn btn-primary offset-4 col-3" value="Submit" />
						</Form>
					</div>
        <div className="offset-2 col-8 my-3 text-primary">Already have an account ? <NavLink className="text-primary" to="/sign-in" exact><u>Log-in</u></NavLink> instead.</div>
				</div>		
		  </div>
		)
	}
	
const mapDispatchToProps = dispatch => {
	return {
		login: (user) => { dispatch({ type: 'SET_AUTH', payload: user }) },
		loading: (val) => { dispatch({ type: 'LOADING', payload: val })}
	}
}

export default withRouter(connect(null, mapDispatchToProps)(Signup))