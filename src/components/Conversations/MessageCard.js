import React from 'react'
import AllMessages from './AllMessages'


const MessageCard = (props) => {

	return (
		<div>
			<div className="col-12 border mb-1">
				<div onClick={props.showMessages} className="">
					<div>
						<p className="text-primary h4 mb-3">{props.conversation.subject}</p>
						<span className="text-muted ml-1">{props.conversation.status}</span>
					</div>
					<button type="button" className="btn btn-primary mb-2">Show Conversation</button>
				</div>
                <AllMessages messages={props.messages} />
			</div>
		</div>
		)
}


export default MessageCard