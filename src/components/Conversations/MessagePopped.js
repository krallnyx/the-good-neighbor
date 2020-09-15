import React from 'react'
import { connect } from 'react-redux'
import MessageBox from './MessageBox'

const MessagePopped = (props) => {

  return (
    <div className="row">  
      <div className="col-12">
        <h4><span className="text-muted">About:</span> { props.request.title }</h4>
        <p>
          <span className="text-muted">To Requester: </span>{ props.request.user_full_name }
        </p>
        <p>
          <span className="text-muted">His/Her Request:</span> { props.request.description }
        </p>
       <MessageBox request={props.request} message={false}/>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.current_user
  }
}

export default connect(mapStateToProps)(MessagePopped)