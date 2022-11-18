import React from 'react'

function Insurance() {
  return (
    <React.Fragment>
        <div id="divInsuranceTab" className="bor mar20" >
                <div className="ad-m-acko">
				<div style={{background: "#E0D5FF",width: "100%",float: "left", padding: "10px 12px 4px 12px"}}>
				<div className="ml-h1-n" style={{position:"relative"}}>
                                    <div className="te1"><label className="pls"></label></div>
                                    <div className="te2">
                                        <input type="checkbox" ng-click="ApplyInsurance()" style={{display: "none"}} className=""/>
                                    </div>
                                    <div className="te3">
                                        <label className="ng-binding">Add Travel Insurance and Secure your Trip with  ACKO Travel Insurance for 
										<span className="insu_Rs">199</span>/Person
										
										</label>
                                
                                        <span style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>(Upon Selecting Travel Insurance ,You accept the  <a href="javascript:void(0);"> Terms and Conditions </a> of the travel insurance policy)</span>
                                    </div>
									<div className="inlogosec">
									<img width="55" src="/assets/images/acko-logo.png"/>
									</div>
                                </div>
                                <div className="ml-h2-n"><div className="" style={{display: "none"}}></div><div className="" ></div></div>
				</div>
                    <div className="tr-cn">
                        <div className="ml-h">
                            <div className="">
                                
                            </div>
                            <div className="mel1-d" style={{display: "none"}}>
                                
                                <div className="bag-m" style={{marginLeft:"1.5%"}}>
                                    <div className="insurance">

                                        <img alt="Flight" style={{padding: "7px 0 0",margin: "0 auto",display: "block"}} width="36" src="/assets/images/hospitalization-injury-v2.svg"/>
                                        <div className="ad-bg">Hospitalization</div>
                                        <div className="me-rs">
                                            <div className="me-rs2">Deductibles : INR 500</div>
                                        </div>
                                        <div className="s-mel-n">
                                            <div className="s-mel-n2"><label className="ng-binding">Sum Insured : INR 1,00,000</label></div>
                                        </div>
                                    </div><div className="insurance">

                                        <img alt="Flight" style={{padding: "7px 0 0",margin: "0 auto",display: "block"}} width="36" src="/assets/images/trip-cancellation-v2.svg"/>
                                        <div className="ad-bg">Trip Cancellation</div>
                                        <div className="me-rs">
                                            <div className="me-rs2">Deductibles : INR 500</div>
                                        </div>
                                        <div className="s-mel-n">
                                            <div className="s-mel-n2"><label className="ng-binding">Sum Insured : INR 20,000</label></div>
                                        </div>
                                    </div><div className="insurance">

                                        <img alt="Flight" style={{padding: "7px 0 0",margin: "0 auto",display: "block"}} width="36" src="/assets/images/trip-delay-v2.svg"/>
                                        <div className="ad-bg">Trip Delay</div>
                                        <div className="me-rs">
                                            <div className="me-rs2">Deductibles : 6 Hours</div>
                                        </div>
                                        <div className="s-mel-n">
                                            <div className="s-mel-n2"><label className="ng-binding">Sum Insured : INR 10,000</label></div>
                                        </div>
                                    </div>

                                    <a href="" ng-click="ShowMoreInsurance()" className="shweMore"><span className="shweNo"> +4 <span className="shweNoTxt">More</span></span></a>

                                    <a href="" ng-click="HideMoreInsurance()" className="shweMore" style={{display: "none"}}>
                                         <span className="shweNoTxt pdt56">Show Less</span>
                                    </a>
                                    <div className="clr"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="clr"></div>

                <div className="insurencediv">

                    <div className="insur-yes">


                        <label className="container-radio">
                            Yes, I want to secure my trip with insurance.
                            <input type="radio" id="chkInsurance" onclick="show_imsg();"/>
                            <span className="checkmark-radio"></span>
                        </label>

                    </div>

                    <div className="success_ins_msg" id="" style={{display: "inline-block"}}>More than 36% of our customers choose to secure their trip.</div>


                    <div className="insur-no">


                        <label className="container-radio">
                            No, I do not want to insure my trip
                            <input type="radio" value="" ng-click="ApplyInsurance()"/>
                            <span className="checkmark-radio"></span>
                        </label>


                    </div>
                    <div className="warning_ins_msg" style={{display: "inline-block"}}><b><span className="ng-binding">Ms. VITI</span></b>  missed the connecting flight but compensated with Rs.2000. Thanks to the travel insurance.</div>

                    <div className="error_ins_msg" style={{display: "none"}}><b><span>NOTE:</span></b> Please select Yes or No to continue.</div>

                </div>

            </div>  
    </React.Fragment>
  )
}

export default Insurance