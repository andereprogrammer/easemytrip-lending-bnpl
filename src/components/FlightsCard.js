import React from 'react'

function FlightsCard() {
  return (
    <React.Fragment>
        <div className="bor pdb10" style={{marginBottom:20}}>
                            <div className="fd-h"><span>Flight Detail</span></div>
                            <div className="tr-cn" style={{display:"block"}}>
                                <div className="ng-scope">
                                    <div className="ng-scope">
                                        <div className="tr-cn-m">
                                            <div className="dprtBg" >Depart</div>
                                            
                                            <div className="fli-d-m">
                                                
                                                <div className="clr"></div>
                                                <div ng-if="lID == 0" className="fd-des">
                                                    <span className="ng-binding">Delhi - Mumbai</span> |<span className="ng-binding">Mon-21Nov2022</span>
                                                    <span style={{color:"black"}} className="ng-binding"></span>
                                                </div>
                                                <div className="fli1">
                                                    <div className="fli1-m">
                                                        <div className="fli1-m-l"><img alt="Flight" width="28" src="/assets/images/I5.png"/></div>
                                                        <div className="fli1-m-r"><span className="ng-binding">AirAsia</span><span className="ng-binding">I5-857</span>
														<span className="cabinmsg" style={{display:"none"}}>(Economy)</span>
														</div>
                                                    </div>
                                                    <span style={{display:"block"}} className="fretype ng-binding ng-scope">Low Fare</span>
                                                </div>
                                                <div className="fli-d-r">
                                                    <div className="fli2">
                                                        <div className="fli-cm"><span> <strong className="ng-binding">19:05</strong> </span></div>

                                                        <div className="air-dt">
                                                            <div className="flc600"><span className="ng-binding">Delhi</span> (<span className="ng-binding">DEL</span>)</div>
                                                            <span className="ng-binding">Mon-21Nov2022</span>
                                                            <span ng-bind="'Terminal - '+l.depTer" className="">Terminal - 3</span>
                                                        </div>
                                                    </div>
                                                    <div className="fli3">
                                                        <div className="stp"><span className="ng-binding">02h 40m</span>  </div>
                                                        <div className="lin2 lindvd"><div className="fli-i"></div></div>
                                                        <div className="clr"></div>
                                                        <div className="ref"><span ng-className="(b.Refundable!='Refundable') ?'redRef':''" className="ng-binding ng-scope">Refundable</span></div>
                                                    </div>
                                                    <div className="fli4">
                                                        <div className="fli-cm1"><span> <strong className="ng-binding">21:45</strong> </span></div>

                                                        <div className="air-dt1">
                                                            <div className="flc600"><span className="ng-binding">Bangalore</span> (<span className="ng-binding">BLR</span>)</div>

                                                            <span className="ng-binding">Mon-21Nov2022</span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{display:"none"}}>
                                                </div>
                                                <span>
                                                    <div style={{display:"none"}} className="">
                                                        <div ng-if="jID==ji" className="">
                                                            <div className="ng-scope">
                                                                <div className="ng-scope">
                                                                    <div className="amntyBg" ng-if="ld.airCode.trim()+''+ld.fltNum.trim()==a.FlightNo &amp;&amp; a.FlightDepcode==ld.org.split('|')[0] &amp;&amp;  a.FlightArrcode==ld.dest.split('|')[0]">
                                                                        <span className="tbamnty">Amenities</span>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">Seat(Pitch:70 cm,Width:NaN cm,Angle:) </span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-food-60x60.png"/></span><span className="ameTxt">Free Meal.</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-wi-fi-60x60.png"/></span><span className="ameTxt">Wi-Fi</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-plug-60x60.png"/></span><span className="ameTxt">Power Outlets</span></div>

                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-video-60x60.png"/></span><span className="ameTxt">On demand entertainment</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-seat-60x60.png"/></span><span className="ameTxt">3-3 seat layout Seat Layout</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-aircraft-60x60.png"/></span><span className="ameTxt">A320neo (narrowbody) <span className="ng-binding ng-scope"> (Narrow Body)</span></span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"none"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">28" seat pitch inch Legroom </span></div>
                                                                        
                                                                    </div>

                                                                </div><div className="ng-scope">
                                                                    <div className="amntyBg" ng-if="ld.airCode.trim()+''+ld.fltNum.trim()==a.FlightNo &amp;&amp; a.FlightDepcode==ld.org.split('|')[0] &amp;&amp;  a.FlightArrcode==ld.dest.split('|')[0]">
                                                                        <span className="tbamnty">Amenities</span>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">Seat(Pitch:70 cm,Width:NaN cm,Angle:) </span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-food-60x60.png"/></span><span className="ameTxt">Free Meal.</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-wi-fi-60x60.png"/></span><span className="ameTxt">Wi-Fi</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-plug-60x60.png"/></span><span className="ameTxt">Power Outlets</span></div>

                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-video-60x60.png"/></span><span className="ameTxt">On demand entertainment</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-seat-60x60.png"/></span><span className="ameTxt">3-3 seat layout Seat Layout</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-aircraft-60x60.png"/></span><span className="ameTxt">A320 (narrowbody) <span className="ng-binding ng-scope"> (Narrow Body)</span></span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"none"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">28" seat pitch inch Legroom </span></div>
                                                                        
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </span>
                                            </div><div className="fli-d-m">
                                                <div className="layover" style={{display:"block"}}>
                                                    <span><strong style={{fontWeight:600}} className="">1h :5m</strong> Layover in <strong style={{fontWeight:600}} className="">Bangalore (BLR)</strong></span>

                                                </div>
                                                <div className="clr"></div>
                                                
                                                <div className="fli1">
                                                    <div className="fli1-m">
                                                        <div className="fli1-m-l"><img alt="Flight" width="28" src="/assets/images/I5.png"/></div>
                                                        <div className="fli1-m-r"><span className="ng-binding">AirAsia</span><span className="ng-binding">I5-334</span>
														<span className="cabinmsg" style={{display:"none"}}>(Economy)</span>
														</div>
                                                    </div>
                                                    <span style={{display:"block"}} className="fretype ng-binding ng-scope">Low Fare</span>
                                                </div>
                                                <div className="fli-d-r">
                                                    <div className="fli2">
                                                        <div className="fli-cm"><span> <strong className="ng-binding">22:50</strong> </span></div>

                                                        <div className="air-dt">
                                                            <div className="flc600"><span className="ng-binding">Bangalore</span> (<span className="ng-binding">BLR</span>)</div>
                                                            <span className="ng-binding">Mon-21Nov2022</span>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="fli3">
                                                        <div className="stp"><span className="ng-binding">01h 50m</span>  </div>
                                                        <div className="lin2 lindvd"><div className="fli-i"></div></div>
                                                        <div className="clr"></div>
                                                        <div className="ref"><span ng-className="(b.Refundable!='Refundable') ?'redRef':''" className="ng-binding ng-scope">Refundable</span></div>
                                                    </div>
                                                    <div className="fli4">
                                                        <div className="fli-cm1"><span> <strong className="ng-binding">00:40</strong> </span></div>

                                                        <div className="air-dt1">
                                                            <div className="flc600"><span className="ng-binding">Mumbai</span> (<span className="ng-binding">BOM</span>)</div>

                                                            <span className="ng-binding">Tue-22Nov2022</span>
                                                            <span ng-bind="'Terminal - '+l.arrTer" className="">Terminal - 1</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{display:"none"}}>
                                                </div>
                                                <span>
                                                    <div style={{display:"none"}} className="">
                                                        <div ng-if="jID==ji" className="">
                                                            <div className="ng-scope">
                                                                <div className="ng-scope">
                                                                    <div className="amntyBg" ng-if="ld.airCode.trim()+''+ld.fltNum.trim()==a.FlightNo &amp;&amp; a.FlightDepcode==ld.org.split('|')[0] &amp;&amp;  a.FlightArrcode==ld.dest.split('|')[0]">
                                                                        <span className="tbamnty">Amenities</span>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">Seat(Pitch:70 cm,Width:NaN cm,Angle:) </span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-food-60x60.png"/></span><span className="ameTxt">Free Meal.</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-wi-fi-60x60.png"/></span><span className="ameTxt">Wi-Fi</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-plug-60x60.png"/></span><span className="ameTxt">Power Outlets</span></div>

                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-video-60x60.png"/></span><span className="ameTxt">On demand entertainment</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-seat-60x60.png"/></span><span className="ameTxt">3-3 seat layout Seat Layout</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-aircraft-60x60.png"/></span><span className="ameTxt">A320neo (narrowbody) <span className="ng-binding ng-scope"> (Narrow Body)</span></span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"none"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">28" seat pitch inch Legroom </span></div>
                                                                        
                                                                    </div>

                                                                </div><div className="ng-scope">
                                                                    <div className="amntyBg" ng-if="ld.airCode.trim()+''+ld.fltNum.trim()==a.FlightNo &amp;&amp; a.FlightDepcode==ld.org.split('|')[0] &amp;&amp;  a.FlightArrcode==ld.dest.split('|')[0]">
                                                                        <span className="tbamnty">Amenities</span>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">Seat(Pitch:70 cm,Width:NaN cm,Angle:) </span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-food-60x60.png"/></span><span className="ameTxt">Free Meal.</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-wi-fi-60x60.png"/></span><span className="ameTxt">Wi-Fi</span></div>
                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-plug-60x60.png"/></span><span className="ameTxt">Power Outlets</span></div>

                                                                        <div className="icon-amenity-nw"><span className="amImg2"><img src="/assets/images/amenities-video-60x60.png"/></span><span className="ameTxt">On demand entertainment</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-seat-60x60.png"/></span><span className="ameTxt">3-3 seat layout Seat Layout</span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"block"}}><span className="amImg2"><img src="/assets/images/amenities-aircraft-60x60.png"/></span><span className="ameTxt">A320 (narrowbody) <span className="ng-binding ng-scope"> (Narrow Body)</span></span></div>
                                                                        <div className="icon-amenity-nw" style={{display:"none"}}><span className="amImg2"><img src="/assets/images/amenities-legroom-60x60.png"/></span><span className="ameTxt">28" seat pitch inch Legroom </span></div>
                                                                        
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </span>
                                            </div>




                                            <div className="fare-family-text" style={{display:"block"}}>
                                                
                                            </div>
                                            <div className="fare-family-text" style={{display:"none"}}>
                                                <div className="ap_btm5 faretype">Fare Type Selected: <span className="boldText">ECO STANDARD</span></div>
                                                <div className="ap_btm5" style={{color: "rgb(203, 57, 4)"}}>
                                                    Cancellation chargeable | Date change chargeable | No show chargeable
                                                </div>
                                                <div className="">
                                                    To enjoy added benefits like Free Cancellation, Free Date change, Zero No show charges upgrade your booking
                                                </div>
                                            </div>
                                            

                                            <div className="alert-infmt" style={{display:"none"}}>
                                                <img src="/assets/images/info-icon.svg" width="15" style={{marginRight:2,verticalAlign: "bottom"}}/> You have selected Hand Baggage Only fare on the sector New Delhi - Mumbai. Check-In baggage needs to be purchased separately with this ticket.
                                            </div>
                                            
                                            <div className="fli-amenities" style={{display:"none"}}>
                                                <div className="make_flex space_between"> <span> <span className="ftn12">Amenities</span> <span className="malt5 mart5">|</span> <span className="mart5 ficon-1 opct35"></span> <span className="mart5 ficon-2"></span> <span className="mart5 ficon-3 opct35"></span> <span className="mart5 ficon-4 opct35"></span> <span className="mart5 ficon-5"></span> <span className="mart5 ficon-6"></span> </span> <a className="showmore">SHOW MORE</a> </div>
                                                <div className="moreAmenities" style={{display:"block"}}>
                                                    <div className="cmlft">
                                                        <span className="amntl">Comfort</span>
                                                        <ul>
                                                            <li className="wd100"><span className="mart5 ficon-7"></span> Seat(Pitch:75 cm)</li>
                                                            <li className="wd100"><span className="mart5 ficon-2"></span> Paid Meal</li>
                                                            <li className="wd100"><span className="mart5 ficon-1 opct35"></span> Wi-fi</li>

                                                        </ul>
                                                    </div>
                                                    <div className="amlft">
                                                        <span className="amntl">Amenities</span>
                                                        <ul>
                                                            <li><span className="mart5 ficon-1 opct35"></span> Wi-fi</li>
                                                            <li><span className="mart5 ficon-3 opct35"></span> Power Outlets</li>
                                                            <li><span className="mart5 ficon-4 opct35"></span> On demand entertainment</li>
                                                            <li><span className="mart5 ficon-5"></span>A320(Narrow Body)</li>
                                                            <li><span className="mart5 ficon-6"></span>3-3 Seat Layout Seat Layout </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="" style={{display:"block"}}>
                                                <div className="tab_trvlr2">
                                                    <a className="" onclick="tabHightLight(this.id)">Fare Rules</a>
                                                    <a className="" onclick="tabHightLight(this.id)">Baggage</a>
                                                    
                                                    <span style={{float: "right",color: "green",fontSize: 14,marginBottom: -1}} className=""></span>
                                                </div>

                                                



                                                
                                                
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="alert-infmt-nw" style={{display:"none"}}><img src="/assets/images/info-icon.svg" width="15" style={{marginRight:2,verticalAlign: "bottom"}}/><strong>Visa Info:</strong> All visa rules on our website are just indicative &amp; are updated with best of our efforts.</div>

                        </div>
    </React.Fragment>
  )
}

export default FlightsCard