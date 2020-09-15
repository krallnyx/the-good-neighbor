import React from 'react'
import MessageBox from './MessageBox'


const allMessages = (props) => {
  return(
    <div className="">
    {
     props.messages.length > 0  ? <MessageBox start={true} messages={props.messages} /> : null
    }
    {
      props.messages.map( msg => ( 
        <div key={msg.id}  className="media border">
          <div className="text-primary media-body">
          <div className="text-primary"><u>On the {msg.created_at.replace('T', ' at ').substring(0, 19)}, {msg.from_full_name} said:</u></div>
            <div className="">{msg.body}</div>
          </div>
        </div>
      ))
    }
    
    </div>
    )
}

export default allMessages