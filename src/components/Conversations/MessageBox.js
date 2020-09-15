import React from 'react'
import Schema from 'form-schema-validation'
import { Form, TextareaField, SubmitField } from 'react-components-form'
import { connectBack } from './../../tools/axiosURL'
import { connect } from 'react-redux'
import { setModal, submitMessage, updateRequest } from './../../tools/actions'

const MessageBox = (props) => {


  const messageSchema = new Schema({
    message: {
      type: String,
      validators: [
        {
          validator: (value) => {
            if(value === undefined || value === '') {
              return false;
            }
          },
          errorMessage: 'A message is required'
        }
      ]
    },
  })

  const submitMethod = (model) => {
    if (props.start) {
      let messageInfo = {
        message: {
          conversation_id: props.messages[0].conversation_id,
          from_id: props.currentUser.id,
          to_id: (props.messages[0].to_id === props.currentUser.id) ? props.messages[0].from_id : props.messages[0].to_id ,
          body: model.message
        }
      }
      clearFormData()
      props.submitMessage(messageInfo)
    } else {
      let conversationInfo = {
        conversation: {
          request_id: props.request.id,
          to_id: props.request.user_id,
          subject: props.request.title,
          body: model.message
        }
      }
      clearFormData()
      submitConversation(conversationInfo)
    }
  }

  const clearFormData = () => {
    document.getElementById('form').reset()
    document.querySelector('textarea[name="message"]').innerHTML = ''
    let event = new Event('change', { bubbles: true })
    document.querySelector('textarea[name="message"]').dispatchEvent(event)
  }

  const submitConversation = (conversationInfo) => {
    connectBack.post('conversations/', conversationInfo, {
      headers: { 
        'Authorization': props.currentUser.token
      }
    })
    .then( response => {
      props.setModal({open: false})
      let requests = props.requests.filter( request => {
        if(conversationInfo.conversation.request_id === request.id && request.start_count === 4) {
          return null
        }
        window.location.reload(false);
        return request  
      })
      props.updateMapRequest(requests)
    })
    .catch( error => {
      console.log(error)
    })
  }

  return (
    <div> 
      <Form
      schema={messageSchema}
      onSubmit={submitMethod}
      >
        <div className="form-group">
          <TextareaField className="form-control" name="message" placeholder="Your message"></TextareaField>
        </div>
        <div id="submit" className="text-center">
          <SubmitField className="btn btn-primary" value="Send Message"/>
        </div>
      </Form>
    </div>

    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) },
    submitMessage: (val) => { dispatch(submitMessage(val)) },
    updateMapRequest: (requests) => { dispatch(updateRequest(requests)) }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.current_user,
    requests: state.requests
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)