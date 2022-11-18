import React from 'react'

function SideBarFlight() {
  return (
   <React.Fragment>
    <div className="sidebar">
            <div className="fd-r">
                <div className="">
                    <div className="bor">
                        <div className="prc-mm">
                            <div className="prc-h"><span>Price Summary</span></div>
                            <div className="prc-h2" ng-bind="NoAdt">1</div>
                            <div className="prc-h3" style={{width:"13%"}}>0</div>
                            <div className="prc-h4" ng-bind="NoInf">0</div>
                        </div>
                        <div className="prm" style={{display: "block"}}>
                            <div className="pr">
                                <div className="pr-l">Adult x 1</div>
                                <div className="pr-Rs"><span className="ng-binding">5472</span></div>
                            </div>
                            
                            <div className="pr">
                                <div className="pr-l-n">Total Taxes +</div>
                                <div className="pr-l-nn">Total Taxes -</div>
                                <div className="pr-Rs"><span className="ng-binding">742</span></div>
                            </div>
                            <div className="pr-dd">
                                <div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">CUTE</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">75</span></div>
                                </div><div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">ASF</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">236</span></div>
                                </div><div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">PSF</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">91</span></div>
                                </div><div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">UDF</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">62</span></div>
                                </div><div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">CGST</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">139</span></div>
                                </div><div className="pr-d" ng-if="ft.key!=''">
                                    <div className="pr-dl">SGST</div>
                                    <div className="pr-dr-Rs"><span className="ng-binding">139</span></div>
                                </div>
                            </div>
                            
                            

                            
                            

                            <div className="pr-dd-am">
                                
                                
                                
                                
                            </div>
                            
                            
                            
                            
                            
                            


                            
                            <div className="pr ng-hide">
                                <div className="pr-l">
                                    <label className="ctr_cbox">
                                        <span className="htlpricecol">EasyStays@ Rs  </span>
                                        <input onClick="AddHotel()" type="checkbox"/>
                                        <span className="cmark_cbox"></span>
                                    </label>
                                </div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            

                            <div className="pr" style={{borderBottom:0}}>
                                <div className="pr-l1">Grand Total</div>
                                <div className="pr-r1_Rs">
                                    <span ng-bind="CurrencyDisplayRate(totalFare+ConvenienceFeeDisp+InsuranceAmtWithPax+AddOnTotalAmount+TotalSeatAmount+PubReliefFund+FreeCancellationAmount+ZeroInsAmt-TotalCreditSellBlance-TotalGiftCardBlance+ExtraSeatFare+TotalAddonHotelPrice) | currency :'':0" className="">6,214</span>
                                    <img src="/assets/images/bk_loader.gif" id="recheckImage" style={{display: "none", float: "left", marginTop: 15}}/>
                                </div>
                            </div>
							
					 
							
                            
							
							<div className="pr ng-hide" style={{display:"block",background: "#f9fff2"}} ng-show="CouponCodeRes.CashBackAmount>0">
                                <div className="pr-l">EMT Cashback </div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
		<div className="ng-hide">
                            <div className="pr " style={{borderTop: "1px solid #e5e3e3"}}>
                                <div className="pr-l-n">Commission Details (<span className="">+</span>)</div>
                            </div>
							
                            <div className="pr">
                                <div className="pr-l-n">STF(+)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            <div className="pr">
                                <div className="pr-l-n">TDS(+)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            <div className="pr">
                                <div className="pr-l-n">ServiceFee(+)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            <div className="pr">
                                <div className="pr-l-n">Cash Back(-)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            <div className="pr">
                                <div className="pr-l-n">Markup Agent (-)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
                            <div className="pr">
                                <div className="pr-l-n">TransactionFees(-)</div>
                                <div className="pr-Rs"><span className="ng-binding">0</span></div>
                            </div>
						<div className="pr" style={{borderBottom:0}}>
                                <div className="pr-l1">Net Fare</div>
                                <div className="pr-r1_Rs">
                                    <span className="ng-binding">6214</span>
                                    <img src="/assets/images/bk_loader.gif" id="recheckImage" style={{display: "none", float: "left", marginTop:15}}/>
                                </div>
                            </div>
</div>							
						

                        </div>
                    </div>
                    <div className="bor mar20 pr" style={{margin: "10px 0px 0px", background: "rgb(255, 249, 219)", width: "100%", display: "none"}}>
                        <p style={{fontSize:11, color:"#000000 !important"}} className="">
                            <span className="ng-scope"> Oops! Your fare has been increased from </span>
                            
                            Rs. <span ng-bind="RePriceOldFare | currency : '':0" className="">0</span> to  Rs.<span className="ng-binding">0</span> .
                        </p>
                    </div>
                    <input type="hidden" value="1"/>
                    <div className="bor mar20 coup" >
                        <div className="prc-h1 prc-cup "> Have a coupon code / Gift Voucher No ? </div>
                        <div className="cpn" style={{display: "none"}}>
                            <div className="cpn-l">
                                <input ng-keypress="ClearCoupon()" type="text" value="" placeholder="Enter Coupon Code" className=""/>

                                
                            </div>
                            <div className="cpn-r"><div className="apl">Apply</div></div>
                        </div>
                        

                        <div className="cpn" style={{display: "block", marginBottom: 5}}>
                            <div className="cpn-l">
                                <span className="inpt_stl" ng-model="CouponCode">EMTNCF</span>
                            </div>
                            <div className="cpn-r"><div className="cancl">Clear <span className="cp_cross">×</span></div></div>
                        </div>
                        <p ng-bind="CouponMsg" className="">Congratulations! Zero Convenience Coupon has been applied successfully. You have saved Rs.300 per passenger per sector as convenience fees.</p>
                        <p className="cdshl" style={{color: "#856404!important",fontSize: ".66em",marginTop:3,display:"none",marginBottom:5}}><b>Note:</b> In Case of Credit shell, Discount will not be applicable.</p>

                        <div className="cpn_dvd" style={{display:"block"}}></div>
                        <div className="clr"></div>
                        <div className="coupn_inr">
                                        <div className="coupn_scrl">
                                            
                                            <div className="coupn_col" ng-if="cpnLst.IsPaymentPage==IsPaymentPage">

                                                <label className="coupn_radio">
                                                    <div className="coupn_ttl" ng-bind="cpnLst.CouponCode">EMTNCF</div>
													
                                                    <div className="coupn_para">ZERO Convenience Fees</div>
                                                    
                                                    
                                                    <input type="radio" id="rdoCpnEMTNCF" onClick="ChangeCoupon(cpnLst.CouponCode)"/>


                     <span className="coupn_checkmark" ng-className="((cpnLst.IsEmail!=IsLoginUser||cpnLst.IsEmail==false)?'coupn_checkmark':'')"></span>
													

                                                </label>
                                            </div><div className="coupn_col" ng-if="cpnLst.IsPaymentPage==IsPaymentPage">

                                                <label className="coupn_radio">
                                                    <div className="coupn_ttl" ng-bind="cpnLst.CouponCode">BOOKNOW</div>
													
                                                    <div className="coupn_para">Use this coupon and get Rs.351 OFF on your flight booking.</div>
                                                    
                                                    
                                                    <input type="radio" id="rdoCpnBOOKNOW" onClick="ChangeCoupon(cpnLst.CouponCode)"/>


                     <span className="coupn_checkmark" ng-className="((cpnLst.IsEmail!=IsLoginUser||cpnLst.IsEmail==false)?'coupn_checkmark':'')"></span>
													

                                                </label>
                                            </div><div className="coupn_col" ng-if="cpnLst.IsPaymentPage==IsPaymentPage">

                                                <label className="coupn_radio">
                                                    <div className="coupn_ttl" ng-bind="cpnLst.CouponCode">EMTLOUNGE</div>
													
                                                    <div className="coupn_para">Get free access to lounge worth Rs.1400 per passenger</div>
                                                    <a href="#" style={{display:"block"}} onClick="CouponTNCPop(cpnLst.TermCondition)" className="tcnd"> T&amp;C Apply</a>
                                                    
                                                    <input type="radio" id="rdoCpnEMTLOUNGE" onClick="ChangeCoupon(cpnLst.CouponCode)"/>


                     <span className="coupn_checkmark" ng-className="((cpnLst.IsEmail!=IsLoginUser||cpnLst.IsEmail==false)?'coupn_checkmark':'')"></span>
													

                                                </label>
                                            </div><div className="coupn_col" ng-if="cpnLst.IsPaymentPage==IsPaymentPage">

                                                <label className="coupn_radio">
                                                    <div className="coupn_ttl" ng-bind="cpnLst.CouponCode">FREEFLIGHT</div>
													
                                                    <div className="coupn_para">Win Free flight tickets worth Rs.5000</div>
                                                    <a href="#" style={{display:"block"}} onClick="CouponTNCPop(cpnLst.TermCondition)" className="tcnd"> T&amp;C Apply</a>
                                                    
                                                    <input type="radio" id="rdoCpnFREEFLIGHT" onClick="ChangeCoupon(cpnLst.CouponCode)"/>


                     <span className="coupn_checkmark" ng-className="((cpnLst.IsEmail!=IsLoginUser||cpnLst.IsEmail==false)?'coupn_checkmark':'')"></span>
													

                                                </label>
                                            </div>
                                            <div className="coupn_col" style={{display:"none"}}>
                                                <label className="coupn_radio">
                                                    <div className="coupn_ttl">EASEDAY</div>
                                                    <div className="coupn_para">Use code EASEFLY and get instant discount of up to Rs. 2000 </div>
                                                    <input type="radio" name="radio"/>
                                                    <span className="coupn_checkmark"></span>
                                                    <a href="#" style={{display:"none"}} onClick="CouponTNCPop(cpnLst.TermCondition)" className="tcnd">T&amp;C Apply</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                    </div>
                    <div className="clr"></div>
                </div>
                <div className="clr"></div>

                <div className="con" style={{display: "block"}} onClick="VerifyTravellerEmail()">
                    <span style={{width:"100%"}} className="co">Continue Booking</span>
                </div>

                <div className="con" style={{display: "none"}}>

                    <span style={{width:"100%"}} className="co">Continue Booking</span>
                </div>
				
				   <div className="con" style={{display: "none"}}>

                    <span style={{width:"100%"}} className="co">Continue Booking</span>
                </div>

            </div> 
   </React.Fragment>
  )
}

export default SideBarFlight