import React from 'react'
import { connect } from 'react-redux'
import { setRequest, setModal } from './../../tools/actions'
import RequestCard from './RequestCard'

class RequestsCardContainer extends React.Component {

  componentDidMount = () => {
    if (this.props.userRequest) { 
      this.props.getRequest() 
    }
  }

  offer = (id) => {
    let request = this.props.requests.filter( request => request.id === id)
    this.props.setModal({open: true, type: 'conv', data: request[0]})
  }

  

  render(props) {
    let requests
    requests = (this.props.userRequest) ? this.props.currentUserRequests : this.props.requests
  
    requests = requests.map((request, index) => {
          
            return (
            <div key={request.id} className="col-12 pt-3">
              <RequestCard
              offer={ this.offer.bind(this, request.id) }
              request={request} />
            </div>
            )
          })  
        

    if(requests.length === 0 ) {
      requests = (
        <div className=" col-12 text-center pt-5 text-primary">
        <p className="">There aren't any requests in your area. <br/> Drag your map around to find requests near you</p>
        </div>
        )
    }

    return(
      <div className="container-fluid">
            <div className="row">
                {requests}
            </div>
      </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    currentUserRequests: state.currentUserRequests,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) },
    getRequest: (val) => { dispatch(setRequest(val)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestsCardContainer)