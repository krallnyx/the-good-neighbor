import React from 'react'
import { connect } from 'react-redux'
import { connectBack } from '../../tools/axiosURL'
import Schema from 'form-schema-validation'
import { Form, TextField, TextareaField, SubmitField, SelectField } from 'react-components-form'
import Script from 'react-load-script';
import { withRouter } from 'react-router-dom'



const CreateRequest = (props) => {

	let coordinates = {
		lat: null,
		lng: null
	}

	const requestSchema = new Schema({
		title: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Title is required'
				}
			]
		},
		location: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Location is required'
				}
			]
		},
		description: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Description is required and should be under 300 characters.'
				}
			]
		},
		category: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Category is required'
				}
			]
		}
	})

	const loadingAddress = (load, display) => {
		let loadingMap = document.getElementsByClassName('loading')
		let submitBtn = document.querySelector('#submit>div button');
		for(let i=0; i<loadingMap.length; i++) {
			loadingMap[i].style.display = display
		}
		submitBtn.disabled = load
	}

	const getAddressLocations = () => {
		let formattedAddress = document.getElementById('formattedAddress')
		let address = document.querySelector('[name="location"]').value;

		if (address !== '') {
			let service = new window.google.maps.places.PlacesService(document.createElement('div'));
				service.textSearch({ 'query': address}, function(results, status) {
					if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				    formattedAddress.innerHTML = "<span style='color:blue;'>Recognized name:</span> " + results[0].formatted_address
						coordinates.lng = results[0].geometry.location.lng()
						coordinates.lat = results[0].geometry.location.lat()
						loadingAddress(false, "none")
				  } else if ( status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
						formattedAddress.innerHTML = "<span style='color:red;'>Not a valid address</span>"
						loadingAddress(true, "none")
					}
				})
		}
	}

	const submitMethod = (model) => {
		getAddressLocations();
		let requestInfo = {
			request: {
				user_id: props.currentUser.id,
				title: model.title,
				location: model.location,
				latitude: coordinates.lat,
				longitude: coordinates.lng,
				description: model.description,
				category: model.category
			}
		}
		submitRequest(requestInfo)
	}

	const submitRequest = (requestInfo) => {
		connectBack.post('requests/', requestInfo, {
			headers: { 
				'Authorization': props.currentUser.token
			}
		})
		.then( response => {
			props.history.push({pathname: '/user/myrequests'});
		})
		.catch( error => {
			console.log("error")
		})
	}

	const categoryOption = [
		{ label: "Select the Type of Need you have", value: "" },
		{ label: "Material", value: "material" },
		{ label: "Service", value: "service" }
	]

	return(
		<div>
		<Script attributes={{ id: 'google'}} url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVr5FG_sBx3vU0seFGE7wiSRIN9JHwY1k&libraries=places"/>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="text-primary mt-5">Submit your Request for help</h1>
					</div>
					<div className="col-md-6 col-sm-10 col-12 mx-auto">
						<Form
						schema={requestSchema}
						onSubmit={submitMethod}
						className="text-primary"
						>
							<div className="form-group">
								<label htmlFor="title">Request's title <span className="text-danger">*</span></label>
								<TextField name="title" type="text" className="form-control" placeholder="Ex: Dog walking"></TextField>
							</div>
							<div className="form-group" onBlur={ getAddressLocations } onFocus={ getAddressLocations }>
								<label htmlFor="location">Location <span className="text-danger">*</span></label>
								<TextField type="text" className="form-control" name="location" placeholder="Ex: 28 Queen Street, Cambridge, uk"></TextField>
								<img className="loading" src="/img/loading.gif" alt="loading" style={{ display: "none"}}/>
								<p id="formattedAddress" />
							</div>
							<div className="form-group">
								<label htmlFor="description">Description <span className="text-danger">*</span></label>
								<TextareaField className="form-control" name="description" placeholder="Describe your request in less than 300 characters"></TextareaField>
							</div>
							<div className="form-group">
								<label htmlFor="category">Category <span className="text-danger">*</span></label>
								<SelectField name="category" id="category" className="form-control" options={categoryOption}></SelectField>
							</div>
							<div className="text-muted">
								Warning, after Submitting, a request can't be edited, it can only be deleted or de-activated. This is to avoid the "but you agreed to do that" issue.
							</div>
							<div id="submit" className="text-center">
								<SubmitField className="btn btn-primary rounded-0" value="Submit"/>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
		)
}


const mapStateToProps = (state) => {
	return {
		currentUser: state.current_user
	}
}

export default withRouter(connect(mapStateToProps, null)(CreateRequest))