import React from 'react'
import  axios  from 'axios';
import  ReactDOM  from 'react-dom';

function LoginModal() {

    let [inputData, setInputData] = React.useState({
        email: "",
        mobileNumber:"",
        lastName:""
      })
      const [customerDetails, setCustomerDetails] = React.useState({ email: "",mobileNumber:"",lastName:""
    })
    const [inputValidation, setInputValidation] = React.useState({emailError: "",mobileNumberError:"",lastNameError:""
    })

    const handleDetails = (e) => {
        let {name,value}=e.target
       
        if (name === "mobileNumber") {
            setCustomerDetails({ ...customerDetails, mobileNumber: value });
            let mobileNumberRegex = /^[6-9]\d{9}$/;
      
            if (value.match(mobileNumberRegex)) {
              setInputData({ ...inputData, [name]: value.trim() });
              setInputValidation({ ...inputValidation, mobileNumberError: "" });
            } 
            else {
              setInputData({ ...inputData, [name]: "" });
              
            }
          }

    if (name === "email") {
        setCustomerDetails({ ...customerDetails, email: value });
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
        if (value.match(emailRegex)) {
          setInputData({ ...inputData, [name]: value.trim() });
          setInputValidation({ ...inputValidation, emailError: "" });
        } 
        else {
          setInputData({ ...inputData, [name]: "" });
         
        }
      }
      if (name === "lastName") {
        setCustomerDetails({ ...customerDetails, lastName: value });
        let lastNameRegex = /^[a-zA-Z ]+$/;
  
        if (value.match(lastNameRegex)) {
          setInputData({ ...inputData, [name]: value.trim() });
          setInputValidation({ ...inputValidation, lastNameError: "" });
        } 
        else {
          setInputData({ ...inputData, [name]: "" });
          
        }
      }

    }
    const handleBlur = (e) => {
        let {name,value}=e.target
        if (name === "lastName") {
      
            let lastNameRegex = /^[a-zA-Z ]+$/;
      
            if (!(value.match(lastNameRegex))) {
              setInputData({ ...inputData, [name]: "" });
              setInputValidation({
                ...inputValidation,
                lastNameError: "Invalid format",
              });
            }
          }
          if (name === "mobileNumber") {
      
            let mobileNumberRegex = /^[6-9]\d{9}$/;
      
            if (!(value.match(mobileNumberRegex))) {
              setInputData({ ...inputData, [name]: "" });
              setInputValidation({
                ...inputValidation,
                mobileNumberError: "Invalid format",
              });
            }
          }
          if (name === "email") {
      
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
            if (!(value.match(emailRegex))) {
              
              setInputData({ ...inputData, [name]: "" });
              setInputValidation({
                ...inputValidation,
                emailError: "Invalid format",
              });
            }
          }
    }
    function createUser(){
        axios.post('https://stage-paymentgateway.cashe.co.in/cashePartners/createNewUser',{
            emailId:customerDetails.email,
            mobileNumber:customerDetails.mobileNumber,
            customerNameAsPerPan:customerDetails.lastName,
            "consentToTriggerPrefil":"YES"
        },{ headers: { Authorization: `4q0wP2ima10H4oSWOUW4vA==` }}).then((res)=>{
            console.log(res)
        })
    }
    const close =()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('loginmodal'))
    }
  return (
   <React.Fragment>
    <div style={{
        width: "100%",
        zIndex: 9999,
        position: "absolute",
        opacity: 1,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)"
    }}>
    <div className="main_frm_fv1">
            <div className="cntnt_f2_v1">
                <div className="fr_rules2_v1">Login or Create an account</div>
                <div className="fr_rules_v1"> <i className="cr_hp_v1" onClick={close}></i> </div>
                <div className="clr"></div>
            </div>
            <div className="cntnt_f4_v1">
                <div className="se_m_v1">
                    {/* <div className="mob-h_v1">Email ID  </div>
                    <div className="clr"></div>
                    <div className="m_inp_v1">
                        <input type="text"
                        name='email'
                        
                        onBlur={handleBlur}
                        onChange={handleDetails}
                        autocomplete="off" value={customerDetails.email} placeholder="Enter email ID" className=""/>
                    </div> */}
                    <div className="mob-h_v1">Mobile Number </div>
                    <div className="clr"></div>
                    <div className="m_inp_v1">
                        <div className="intl-tel-input">
                            <div className="flag-dropdown f16">
                                <div className="selected-flag"><div className="flag in"><div className="down-arrow"></div></div></div>
								<span className="ctycode">+91</span>
                                <div className="" style={{display:"none"}}>
                                    <ul className="country-list" style={{display:"none"}}/>
                                    <li className="country" data-country-code="af"/><div className="flag af"></div>
                                </div>
                            </div>
                        </div>
                        <input 
                        type="text" 
                        autocomplete="off" 
                        value={customerDetails.mobileNumber}
                        name="mobileNumber"
                        onBlur={handleBlur}
                        onChange={handleDetails}
                        placeholder="Enter mobile number"
                        className=""/>
                    </div>
                    <div className="mob-h_v1">Name</div>
                    <div className="clr"></div>
                    <div className="m_inp_v1">
                        <input type="text"
                         autocomplete="off"
                         onBlur={handleBlur}
                         onChange={handleDetails}
                         name='lastName'
                         value={customerDetails.lastName}
                         placeholder="Enter name as per PAN Card"
                         className=""/>
                    </div>
                    <div className="i-eml">* Enter a valid Phone Number</div>
                    <div className="i-eml">* Enter a valid Email</div>
                    <div className="i-eml">* Enter a valid Email or Phone Number</div>
                    <div className="clr"></div>
                    <div className="sign-inn-v1">
					<div style={{display: "none"}}><div style={{width: 304, height: 78}}><div><iframe src="https://www.google.com/recaptcha/enterprise/anchor?ar=2&amp;k=6Lcn060cAAAAANe10P0jD-4soknaekAASxTwcZV6&amp;co=aHR0cHM6Ly9mbGlnaHQuZWFzZW15dHJpcC5jb206NDQz&amp;hl=en&amp;v=Km9gKuG06He-isPsP6saG8cn&amp;size=normal&amp;cb=lsn91mq1avjc" width="304" height="78" name="a-u3732alsi01e" scrolling="no"></iframe></div><textarea name="g-recaptcha-response" className="" style={{width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: 0, resize: "none", display: "none"}}></textarea></div></div>
                        <input className="buttonLogin_v1" type="button" value="Create" onClick={()=>createUser()} id="shwotp" />
                    </div>
                    

                    <div className="p2_v1">By logging in, I understand &amp; agree to EaseMyTrip <span style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}><a href="https://www.easemytrip.com/terms.html" style={{color:"#2196f3",textDecoration:"none"}}>terms of use</a> and <a href="https://www.easemytrip.com/privacy-policy.html" style={{color:"#2196f3",textDecoration:"none"}}>privacy policy</a></span> </div>


                </div>
            </div>
        </div>  
    </div>
    
   </React.Fragment>
  )
}

export default LoginModal