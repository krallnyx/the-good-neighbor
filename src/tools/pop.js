import React from  'react'
import { connect } from 'react-redux'
import { setModal } from './actions'
import MessagePopped from './../components/Conversations/MessagePopped'

const Modal = (props) => {

  return(
    <div>
    { props.modal.open ? 
      <section className="modal fade" id="poppedModal" tabIndex="-1" role="dialog" aria-labelledby="poppedModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <MessagePopped request={props.modal.data} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </section>
       : null }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal)