import React,{useEffect,useState} from 'react'

function MobileNum() {
  let [actualMobile,setActualMobile] = useState("Enter your number");
  let [actualMobileValue,setActualMobileValue] = useState("");

  
  useEffect(()=>{
    if(localStorage.getItem("mobile") !== null){
      setActualMobile('Mr '+ localStorage.getItem("mobile"))
      setActualMobileValue(localStorage.getItem("mobile"))

    }

  },[])
  return (
    <React.Fragment>
        <div className="con-m2n">
                    <div className="">Contact Details</div>
                    <div className="clr"></div>
                    <div className="alert error_case" style={{marginLeft: "2%", width: "96%",marginBottom: -12,display:"none"}}>
                        <span className="pull-left">
                            <img src="/assets/images/error-icon.png" height="20px" width="20px"/>
                        </span>
                        <span style={{marginLeft:10}} ng-bind="errorMessage" className=""></span>
                        <button className="close pull-right" type="button" aria-hidden="true">×</button>
                    </div>
                    <div className="mo-u">Your Mobile number will be used only for sending flight related communication</div>
                   {/* <input id="txtCPhone" style="width:74%;" type="text" value="" ng-model="MobileNumber" placeholder="Mobile Number" className="inp inp-m cln_im1"  maxlength="10" required> */}
                    <div className="mb-m">
                        <div className="mob-l"><div className="cod"><input onblur="return ValidateNumbers(this.value)" ng-model="txtCountryCode" type="tel" value="+91" className=""/></div></div>
                        <div className="mob-r"><input style={{width:"100%"}} type="text" value={actualMobileValue}  ng-model="MobileNumber"  placeholder="Mobile Number" className="inp" autocomplete="none"/></div>
                    </div>
                  

                </div> 
    </React.Fragment>
  )
}

export default MobileNum