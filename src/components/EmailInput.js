import React from 'react'

function EmailInput() {
  return (
   <React.Fragment>
    <div className="con-m">
                    <div className="" style={{
                            fontSize: 16,
                            padding: 10,
                            textAlign: "left"
                    }}>Contact Information <span style={{fontSize:12}}>Your ticket will be sent to this email address</span></div>
                    <div className="clr"></div>
                    <div className="alert error_case" style={{display:"none"}}>
                        <span className="pull-left">
                            <img src="/assets/images/error-icon.png" height="20px" width="20px"/>
                        </span>
                        <span style={{marginLeft:10}}>Please enter a valid email Id</span>
                        <button className="close pull-right" type="button" aria-hidden="true">×</button>
                    </div>
                    <input type="email" className="email_put" name="txtEmailId" value={"akhilhalgeri@decentro.tech"} id="txtEmailId" placeholder="Enter Email Address" />
						   <div className="clr"></div>
                    <label className="ear-int">Please enter your email address *</label>
                </div> 
   </React.Fragment>
  )
}

export default EmailInput