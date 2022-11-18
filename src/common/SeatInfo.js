import React from 'react'

function SeatInfo() {
  return (
   <React.Fragment>
    <div className="wid-30">
                                        <ul id="tabsAddons3">
                                            <li className="ng-scope"><a className="bdr_btm bdr_active" id="bdr0" onClick="SeatPnl(id)">DEL - BLR</a></li><li className="ng-scope"><a className="bdr_btm" id="bdr1" onClick="SeatPnl(id)">BLR - BOM</a></li>
                                            
                                        </ul>
                                        <div className="container_Addons3" id="ca0" style={{display:"block"}}>
                                            <div className="fli_col">
                                                <div className="fli-lft"><img width="28" src="/assets/images/I5.png"/></div>
                                                <div className="fli-rit"><span className="">AirAsia</span> <span className="">I5  857</span></div>
                                            </div>
                                            <div className="clr"></div>
                                            <div className="travlr_col">

                                                <div className="adltSec higbg" onClick="changePaxSeat('Adult',pxTypeID+1,$event,ca.Origin +'_'+ ca.Destination)">
                                                    <div className="new-t">Adult 1</div>
                                                    <input type="radio" style={{display:"none"}} name="PaxDEL_BLR" value="1"/>
                                                    <div className=""></div>
                                                    <div className="t-right-new"></div>
                                                    <div style={{display:"none"}} className="t-nw-cut-p"> Rs. 1582</div>
                                                    
                                                    <div className="clr"></div>
                                                </div>
                                                
                                                <div className="seat_cost2">
                                                    <div className="fr-col-2 f-600">Total Fare</div>
                                                    <div className="fr-col-2 f-600 t-right">Rs <span className="ng-binding">0</span></div>
                                                </div>
                                            </div>

                                            <div className="clr"></div>
											<div className="offr_seat" style={{display:"none"}}>
												<img src="/assets/images/CheckOut?CSU=&amp;SearchID=3n3jiwyeypd&amp;ft=19&amp;Ift=19&amp;bc=&amp;ISWL=&amp;curr=INR&amp;lang=&amp;CCODE=IN"/> <span className="offer">10% off on seats with</span> <strong>EMT Plus</strong>
												</div>
                                            <div className="seatSectn mrel" style={{display:"none"}}>
                                                <div className="seat_ttl"><img src="/assets/images/window-seat-icon.png" style={{verticalAlign:" bottom",marginRight:2}}/>Seat Type</div>
                                                <div className="seat_block">
                                                    <i className="st-avl-1"></i><span className="st_txt">Available Seat</span>
                                                </div>
												<div className="seat_block" style={{display:"none"}}>
                                               <i className="st-info-spicemax"></i><span className="st_txt">SpiceMAX</span>
											   <img src="/assets/images/info-icon-n2.svg" width="14" height="14" style={{marginLeft: 2,cursor:"pointer"}}/>                                              
											   <div className="spicemax-popup">
											    <span className="crossspc">×</span>    
												  <div className="spc-top">
													 <img width="45" src="/assets/images/spicemax-logo.svg"/>
													     
												  </div>
												  <div className="title-spicemax">Choose SpiceMax to enjoy the best experience</div>
												  <ul className="spicemax-nw-list">
													 <li>Extra Legroom</li>
													 <li>Priority Check-in</li>
													 <li>Priority Baggage Handling</li>
													 <li>Priority Boarding</li>
													 <li>Complimentary Meals and Beverage</li>
													 <li>Free Seats</li>
												  </ul>
											   </div>
											
											   
											   </div>
                                                <div className="seat_block">
                                                    <i className="st-ocu-1"></i><span className="st_txt">Occupied Seat</span>
                                                </div>
												<div className="seat_block" >
													<i className="st-exit-1 s_seat_exit"></i><span className="st_txt">Exit Row Seat</span>
												</div>

                                                <div className="seat_block">
                                                    <i className="st-slc-1"></i><span className="st_txt">Selected Seat</span>
                                                </div>
                                            </div>

				<div className="seatSectn mrel">	
					<div className="seat_ttl"><img src="/assets/images/window-seat-icon.png" style={{verticalAlign: "bottom",marginRight:2}}/>Seat Type</div>				
					<div className="mflex seat_typ_bx white-bg flx-wrp ">
                        <div className="mflex alg_cntr w25"><span className="w15 lightgreen-bg"></span><span>Free</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 lightblue-bg"></span><span className="ico_Rs">0-200</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 darkblue-bg"></span><span className="ico_Rs">201-400</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 pink-bg"></span><span className="ico_Rs">401-500</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 ornage-bg"></span><span className="ico_Rs">501-1200</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 red-bg"></span><span className="ico_Rs">1201-1399</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 purple-bg"></span><span className="ico_Rs">1400-1499</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 bgcolor-9"></span><span className="ico_Rs">1500-3000</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 bgcolor-10"></span><span className="ico_Rs">Above 3000</span></div>
                        <div className="mflex alg_cntr w25" style={{display:"none"}}><span className="w15 darkred-bg"></span>SpiceMAX <img src="/assets/images/info-icon-n2.svg" width="11" height="11" style={{marginLeft: 2}}/></div>
                    </div>
					<div className="mflex seat_typ_bx spc_btwn white-bg" style={{paddingTop:0}}>
                        <div className="mflex alg_cntr"><img src="/assets/images/extra-legroom.svg" width="26"/> <span className="f14_dv">Extra Legroom</span></div>
                        <div className="mflex alg_cntr"><img src="/assets/images/non-reclining.svg" width="26"/> <span className="f14_dv">Non Reclining</span></div>
                        <div className="mflex alg_cntr"><img src="/assets/images/exit-row-seat.svg" width="26"/> <span className="f14_dv">Exit Row Seats</span></div>
                    </div>
					
				</div>											
											
											

                                        </div><div className="container_Addons3" id="ca1" style={{display:"none"}}>
                                            <div className="fli_col">
                                                <div className="fli-lft"><img width="28" src="/assets/images/I5.png"/></div>
                                                <div className="fli-rit"><span className="">AirAsia</span> <span className="">I5  334</span></div>
                                            </div>
                                            <div className="clr"></div>
                                            <div className="travlr_col">

                                                <div className="adltSec higbg" onClick="changePaxSeat('Adult',pxTypeID+1,$event,ca.Origin +'_'+ ca.Destination)">
                                                    <div className="new-t">Adult 1</div>
                                                    <input type="radio" style={{display:"none"}} name="PaxBLR_BOM" value="1"/>
                                                    <div className=""></div>
                                                    <div className="t-right-new"></div>
                                                    <div style={{display:"none"}} className="t-nw-cut-p"> Rs. 1582</div>
                                                    
                                                    <div className="clr"></div>
                                                </div>
                                                
                                                <div className="seat_cost2">
                                                    <div className="fr-col-2 f-600">Total Fare</div>
                                                    <div className="fr-col-2 f-600 t-right">Rs <span className="ng-binding">0</span></div>
                                                </div>
                                            </div>

                                            <div className="clr"></div>
											<div className="offr_seat" style={{display:"none"}}>
												<img src="/assets/images/CheckOut?CSU=&amp;SearchID=3n3jiwyeypd&amp;ft=19&amp;Ift=19&amp;bc=&amp;ISWL=&amp;curr=INR&amp;lang=&amp;CCODE=IN"/> <span className="offer">10% off on seats with</span> <strong>EMT Plus</strong>
												</div>
                                            <div className="seatSectn mrel" style={{display:"none"}}>
                                                <div className="seat_ttl"><img src="/assets/images/window-seat-icon.png" style={{verticalAlign: "bottom",marginRight:2}}/>Seat Type</div>
                                                <div className="seat_block">
                                                    <i className="st-avl-1"></i><span className="st_txt">Available Seat</span>
                                                </div>
												<div className="seat_block" style={{display:"none"}}>
                                               <i className="st-info-spicemax"></i><span className="st_txt">SpiceMAX</span>
											   <img src="/assets/images/info-icon-n2.svg" width="14" height="14" style={{marginLeft: 2,cursor:"pointer"}}/>                                              
											   <div className="spicemax-popup">
											    <span className="crossspc">×</span>    
												  <div className="spc-top">
													 <img width="45" src="/assets/images/spicemax-logo.svg"/>
													     
												  </div>
												  <div className="title-spicemax">Choose SpiceMax to enjoy the best experience</div>
												  <ul className="spicemax-nw-list">
													 <li>Extra Legroom</li>
													 <li>Priority Check-in</li>
													 <li>Priority Baggage Handling</li>
													 <li>Priority Boarding</li>
													 <li>Complimentary Meals and Beverage</li>
													 <li>Free Seats</li>
												  </ul>
											   </div>
											
											   
											   </div>
                                                <div className="seat_block">
                                                    <i className="st-ocu-1"></i><span className="st_txt">Occupied Seat</span>
                                                </div>
												<div className="seat_block">
													<i className="st-exit-1 s_seat_exit"></i><span className="st_txt">Exit Row Seat</span>
												</div>

                                                <div className="seat_block">
                                                    <i className="st-slc-1"></i><span className="st_txt">Selected Seat</span>
                                                </div>
                                            </div>

				<div className="seatSectn mrel">	
					<div className="seat_ttl"><img src="/assets/images/window-seat-icon.png" style={{verticalAlign: "bottom",marginRight:2}}/>Seat Type</div>				
					<div className="mflex seat_typ_bx white-bg flx-wrp ">
                        <div className="mflex alg_cntr w25"><span className="w15 lightgreen-bg"></span><span>Free</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 lightblue-bg"></span><span className="ico_Rs">0-200</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 darkblue-bg"></span><span className="ico_Rs">201-400</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 pink-bg"></span><span className="ico_Rs">401-500</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 ornage-bg"></span><span className="ico_Rs">501-1200</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 red-bg"></span><span className="ico_Rs">1201-1399</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 purple-bg"></span><span className="ico_Rs">1400-1499</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 bgcolor-9"></span><span className="ico_Rs">1500-3000</span></div>
                        <div className="mflex alg_cntr w25"><span className="w15 bgcolor-10"></span><span className="ico_Rs">Above 3000</span></div>
                        <div className="mflex alg_cntr w25" style={{display:"none"}}><span className="w15 darkred-bg"></span>SpiceMAX <img src="/assets/images/info-icon-n2.svg" width="11" height="11" style={{marginLeft: 2}}/></div>
                    </div>
					<div className="mflex seat_typ_bx spc_btwn white-bg" style={{paddingTop:0}}>
                        <div className="mflex alg_cntr"><img src="/assets/images/extra-legroom.svg" width="26"/> <span className="f14_dv">Extra Legroom</span></div>
                        <div className="mflex alg_cntr"><img src="/assets/images/non-reclining.svg" width="26"/> <span className="f14_dv">Non Reclining</span></div>
                        <div className="mflex alg_cntr"><img src="/assets/images/exit-row-seat.svg" width="26"/> <span className="f14_dv">Exit Row Seats</span></div>
                    </div>
					
				</div>											
											
											

                                        </div>
                                    </div> 
   </React.Fragment>
  )
}

export default SeatInfo