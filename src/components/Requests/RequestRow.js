import React from 'react';

const RequestRow = (props) => {
	let activeButton
	if (props.showActive) {
		let requestTimeUp = new Date(new Date(props.request.start_date).getTime() + 86400000)
		let now = new Date()
		if (props.request.start_count === 5 && now <= requestTimeUp && props.request.status !== 'fulfilled') {
			activeButton = <span className="">{ (props.request.active) ? <span className="text-shrink text-success">Active</span> : <span className="text-shrink text-warning">WIP for 24hrs</span> }
			</span> 
		} else { 
			activeButton = <span className="text-primary text-shrink" 
				onClick={props.active}>{ (props.request.active) ?  <span className="text-success">Active</span> :  <span className="text-danger">Inactive</span> }
			</span> 
		}
	}
	return (
		<tr className="row text-primary">
			<td className="col-1 border px-1">{ props.request.id }</td>
			<td className="col-1 border px-1">{(props.request.category === 'service') ? 'Service' : 'Material'} </td>
			<td className="col-2 mb-0 border px-1">{ props.request.title }</td>
			<td className="btn col-1 border px-1 text-primary" onClick={props.status}>{(props.request.status === 'fulfilled') ? <span className="text-shrink text-success">Fulfilled</span> : <span className="text-shrink-more">Unfulfilled</span>}<img src={require('../../media/change.png')} className="w-25 mr-1" alt="Change"/></td>
			<td className="btn col-1 border px-1"> {activeButton}<img src={require('../../media/change.png')}  onClick={props.active} className="w-25 ml-1" alt="Change"/></td>
			<td className="col-5 border px-1">{props.request.description}</td>
			<td type="button" onClick={props.delete} className="btn col-1 border px-1"><img src={require('../../media/delete.png')} className="w-25" alt="Recycle Bin"/></td>
		</tr>
		)
}

export default RequestRow