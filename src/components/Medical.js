import React from 'react'

function Medical() {
  return (
    <React.Fragment>
        <div className="bor mar20" style={{display:"block"}}>
                        <div className="tr-covr covflex">
                            <div style={{marginRight: 7}}><img src="/assets/images/coverage-icon-v1.svg"/></div>
                            <div style={{width: "91%"}}>
                                <div className="">
                                    FREE Medical Refund Policy <img src="/assets/images/blueticknw.svg" style={{marginLeft: 5}}/>
                                
                            </div>
                            <span className="flco_sbhed">
                                Get full airline refund, if you cancel tickets due to illness or sickness. This &nbsp;service is provided at sickness. This service is
                            provided at <strong>ZERO additional charges</strong>.
                        </span>
                    </div>
                </div>
                <div style={{float: "right",position:"relative",display:"none"}}>
                    <img src="/assets/images/flight-coverage-img-v1.png"/>
                    <img src="/assets/images/new-ribbon.png" style={{position: "absolute",right: -1,top: 10}}/>
                </div>
                <div className="clr"></div>
                <div className="insurencediv">
                    <div className="insur-yes">
                        <label className="container-radio">
                     			Yes, I want to add Medical Refund Policy (FREE) to this flight
                            <input type="radio" id="chkMedicalYES" value=""/>
                            <span className="checkmark-radio"></span>
                        </label>
                    </div>

                    <div className="insur-no">
                        <label className="container-radio">
                            No, I don't wish to add Medical Refund Policy (FREE) to this flight
                            <input type="radio" id="chkMedicalNO" value="" checked=""/>
                            <span className="checkmark-radio"></span>
                        </label>
                    </div>
                </div>
            </div> 
    </React.Fragment>
  )
}

export default Medical