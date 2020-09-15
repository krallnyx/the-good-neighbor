import React from 'react';

const RequestCard = (props) => {

	return (
		<div className="shadow">
			<div  className="text-primary rounded">
				<h5 className="font-weight-bold my-0">{ props.request.title }</h5>
				<div className="">
                    <span className="mr-2">{ props.request.location }</span>
                    <span className="mr-2">{(props.request.status === 'fulfilled') ? <span className="text-success">Fulfilled</span> : <span className="text-muted">Unfulfilled</span>}</span>
					<span className="mr-2">{(props.request.category === 'service') ? <span className="text-service px-1 rounded">Service</span> : <span className="text-material px-1 rounded">Material</span>}</span>
					
				</div>
                <hr/>
				<p>{ props.request.description }</p>
			</div>
			<div className="">
				<button onClick={props.offer} className="btn btn-primary mb-1" data-toggle="modal" data-target="#poppedModal">Offer to help</button>
			</div>
		</div>
		)
}

export default RequestCard