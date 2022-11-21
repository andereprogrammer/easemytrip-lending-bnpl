import React from 'react'
import  ReactDOM  from 'react-dom';


function AiBot() {
  const close=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('foraibot'))
  }
  return (
   <React.Fragment>
     <div className="eb_widget_box" id='aibot'>
      <div className="eb_widget_chat_box">
        <div className="eb_widget_chat_box_header">
          <img className="" src="/assets/images/bot-online.png" />
          <div className=""></div>
          <div
            id="eb_top_box_header_minimize"
            className="eb_top_box_header_minimize"
          >
            -
          </div>
          <div className="eb_top_box_header_close" >×</div>
        </div>
        <div className="eb_widget_chat_window">
          <div
            className="eb_widget_display_chat_messages"
            id="eb_widget_display_chat_messages"
          >
            <div className="eb-message-box eb-left">
              <img className="eb-message-user-icon" src="/assets/images/bot-online.png" />
              <div className="eb-bubble eb-you">Hi! How can we help you?</div>
            </div>
          </div>
          <div className="eb_widget_input_chat_message">
            <textarea
              placeholder="Write a message here."
              className="eb_widget_input_chat_message_input"
            ></textarea
            ><img
              src="/assets/images/send.png"
              className="eb_widget_send_input_message"
            />
          </div>
        </div>
      </div>
      <img src="/assets/images/bot-image.png" style={{
            width: 70
      }} className="" />
      <div className="eb_widget_header">
        <div className="" style={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 10
        }} onClick={close}>X</div>
        <div className="eb_widget_welcome_text" style={{
             display: 'flex',
             alignItems: 'center',
             textAlign: 'left',
             height: 10,
             fontWeight: 700,
             justifyContent: 'center'
        }}>
          Hey! Got any questions? Don&apos;t worry we are here for you.
        </div>
      </div>
      <img src="/assets/images/widget_icon.png" style={{
            width: 70,
            float: 'right'
      }} className="" />
    </div>
   </React.Fragment>
  )
}

export default AiBot