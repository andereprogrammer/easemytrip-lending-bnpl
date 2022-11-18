import React from 'react'
import { useHistory } from "react-router-dom";

function FlightDetails(props) {
    let flight = props.flights
    const history = useHistory()
  return (
    <React.Fragment>
        <div className="row no-margn" arrtm="00:40" stop="1" aircode="I5" data-ng-repeat="(segID,s) in dataToBindOutbound |orderBy : CustomerOrderByOneWay : reverse ">
                              
                            
                                                       
                                                       <div className="col-md-12 col-sm-12 main-bo-lis pad-top-bot">
                                                       
                                                           <div className="row_flight">
                                                               <div className="col-md-2 col-sm-2 col-xs-4">
                                                                   <div className="row">
                                                                   
                                                                       
                                                                       <div className="col-md-5 col-sm-5" style={{padding: "0 6px 0 24px"}}>
                                                                     <div className=""><img alt="Flight" src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png" className=""/></div>
                                                                       </div>
                                                                       <div className="col-md-7 col-sm-7 padd-lft">
                                                                           <span className="txt-r4">AirAsia</span> <br className=""/>
                                                                           <span className="txt-r5"><span className="ng-binding snipcss0-6-11-12">I5</span>-<span className="ng-binding snipcss0-6-11-13">857</span></span><br className=""/>
                                                                           <span className="txt-r5" style={{display:"none"}}>ECONOMY</span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="col-md-2 col-sm-2 col-xs-4 top5">
                                                                   <span className="txt-r2-n">{flight.departureTime}</span><br className=""/>
                                                                   <span className="txt-r3-n">Delhi</span>
                                                               </div>
                                                               <div className="col-md-2 col-sm-2 col-xs-5 non-st">
                                                                   <span className="dura_md">{flight.travel}</span>
                                                                   <div className="arrow-md-lm"></div>
                                                                   
                                                                   <span className="dura_md2">1-stop
                                                                   
                                                                   </span>
                                                                   
                                                               </div>
                                                               <div className="col-md-2 col-sm-2 col-xs-3 top5">
                                                                   <span className="txt-r2-n">{flight.arrivalTime}</span><br className=""/>
                                                                   <span className="txt-r3-n">Mumbai</span>
                                                               </div>
                   
                                                               <div className="col-md-2 col-sm-2 col-xs-5 cle" style={{position:"relative"}}>
                                                  
                   
                                                                   
                                                                   <div className="row">
                                                                       <div className="col-md-1 col-sm-1 col-xs-2 red_Rs"></div>
                              <div className="col-md-8 col-sm-8 col-xs-9 txt-r6-n" id="spnPrice1">{flight.price}</div>
                                                                       
                                                                   </div>
                                                                   
                                                                   <div className="cross-pr-grid" style={{display: "none"}}>
                                                                       <div className="cross-pr-ru"><span className="black_Rs"> </span></div>
                              <div className="cross-pr-txt" ng-bind="CurrencyDisplayRate(s.lstFr[0].TF) | currency : '':0">4,718</div>
                                                                   </div>
                                                                   
                                                    
                                                                   
                                                                   
                           
                   
                                                                   
                                                                   <a className="morefrebt" style={{display:"block"}} ng-if="s.lstFr!=null ">+ More Fare</a>
                                                                   <div className="fareSummary snipcss0-3-28-37" style={{display: "none",zIndex: 1000,position: "absolute",backgroundColor: "white",borderStyle: "solid",borderWidth: 1,borderColor: "rgb(35, 157, 222)",fontSize: 12,color: "rgb(0, 0, 0)",width: 250, right:0 }}>
                   
                                                                   </div>
                                                               </div>
                                                               <div className="col-md-2 col-sm-2 col-xs-6 txt-al-rt">
                                                                   <span className="txt-r7"></span>
                                                                   
                                                                   <button type="button" className="btn book-bt-n ng-scope snipcss0-3-38-40" onClick={()=>history.push('/Review')}>Book Now</button>
                                                                   <button type="button" ng-if="IsReschedule==false &amp;&amp; s.lstFr!=null &amp;&amp; s.lstFr.length>1" className="btn viewfarebtn" style={{display:"none"}}> View Fare</button>
                                                               </div>
                                                           </div>
                                                           <div className="row">
                                                               
                                                               <div className="full-str" style={{padding: "3px 6px",color: "#3a3a3a",fontSize: 13,background: "#fffbed",float: "left",width: "auto",margin: "0 0 7px 15px",border: 0,borderLeft: "3px solid #efdc9c"}} ng-show="s.lstFr[0].ICPS==false">Use Promo Code: BOOKNOW to get flat Rs.351 OFF on this flight</div>
                                                           </div>
                                                           
                                                           <div className="loaman_mfare" style={{display:"none"}}>
                                                               <div className="loader_mfare"></div>
                                                               <div className="pl-wt-mfare">Please wait while more fare is loading...</div>
                                                           </div>
                                                           <div className="corulmain" style={{display:"none"}}>
                                                           <div className="dmflex">
                                                               <div className="corboxuli">
                                                                   
                                                                   <label className="container-heduredi">
                                                                       <div className="hedule">Low Fare</div>
                                                                       <div className="heduredi">
                                                                           <div className="clr"></div>
                                                                           <div className="nw-far-oth">
                                                                               <input type="radio" ng-checked="true" fr="0" name="fr1" className="ng-scope snipcss0-7-54-55"/>
                                                                               
                                                                               <span className="checkmark-heduredi"></span>
                                                             <div className="crossmn">
                                                                                   
                                                            </div>
                                      <div className="price-tbe">
                                      <span className="reuinrli blacknew_Rs"></span>
                                      
                                      <span className="pricr-nerw" ng-if="fr.ICPS==false">4718</span>
                                                                               </div>
                   
                                                                           </div>
                                                                       </div>
                                                                       <ul className="">
                                                                           <li className="ng-scope snipcss0-6-61-62">
                                                                               <i className="tickicon snipcss0-7-62-63"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Cabin baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-61-65">
                                                                               <i className="tickicon snipcss0-7-65-66"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Check-in baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-61-68">
                                                                               <i className="tickicon snipcss0-7-68-69"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Cancellation fees apply</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-61-71">
                                                                               <i className="tickicon snipcss0-7-71-72"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Date change chargeable</span>
                   
                                                                           </li>
                   
                   
                                                                       </ul>
                                                                   </label>
                                                               </div><div className="corboxuli">
                                                                   
                                                                   <label className="container-heduredi">
                                                                       <div className="hedule">Easy Refund</div>
                                                                       <div className="heduredi">
                                                                           <div className="clr"></div>
                                                                           <div className="nw-far-oth">
                                                                               
                                                                               <input type="radio" s="1" id="fr11" onClick="SelectOptionAndFareUpdate('fr',s,fr,frid)" className=""/>
                                                                               <span className="checkmark-heduredi"></span>
                                                             <div className="crossmn">
                                                                                   
                                                            </div>
                                      <div className="price-tbe">
                                      <span className="reuinrli blacknew_Rs"></span>
                                      
                                      <span className="pricr-nerw" ng-if="fr.ICPS==false">5117</span>
                                                                               </div>
                   
                                                                           </div>
                                                                       </div>
                                                                       <ul className="">
                                                                           <li className="ng-scope snipcss0-6-86-87">
                                                                               <i className="tickicon snipcss0-7-87-88"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Cabin baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-86-90">
                                                                               <i className="tickicon snipcss0-7-90-91"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Check-in baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-86-93">
                                                                               <i className="tickicon snipcss0-7-93-94"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Date change chargeable</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-86-96">
                                                                               <i className="tickicon snipcss0-7-96-97"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Full refund of upto ₹5000 (over and above airline refund) per person per route if you cancel</span>
                   
                                                                           </li>
                   
                   
                                                                       </ul>
                                                                   </label>
                                                               </div><div className="corboxuli">
                                                                   
                                                                   <label className="container-heduredi">
                                                                       <div className="hedule">Premium Flex</div>
                                                                       <div className="heduredi">
                                                                           <div className="clr"></div>
                                                                           <div className="nw-far-oth">
                                                                               
                                                                               <input type="radio" s="1" id="fr12" onClick="SelectOptionAndFareUpdate('fr',s,fr,frid)" className=""/>
                                                                               <span className="checkmark-heduredi"></span>
                                                             <div className="crossmn">
                                                                                   
                                                            </div>
                                      <div className="price-tbe">
                                      <span className="reuinrli blacknew_Rs"></span>
                                      
                                      <span className="pricr-nerw" ng-if="fr.ICPS==false">5244</span>
                                                                               </div>
                   
                                                                           </div>
                                                                       </div>
                                                                       <ul className="">
                                                                           <li className="ng-scope snipcss0-6-111-112">
                                                                               <i className="tickicon snipcss0-7-112-113"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Cabin baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-111-115">
                                                                               <i className="tickicon snipcss0-7-115-116"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Check-in baggage included</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-111-118">
                                                                               <i className="tickicon snipcss0-7-118-119"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Cancellation fees apply</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-111-121">
                                                                               <i className="tickicon snipcss0-7-121-122"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Free date change allowed</span>
                   
                                                                           </li><li className="ng-scope snipcss0-6-111-124">
                                                                               <i className="tickicon snipcss0-7-124-125"></i>
                                                                               <span className="fremrtxt" ng-className="(f=='No Meals' || f=='Gst Details Mandatory'|| f=='Defence Forces Valid photo ID Mandatory')?'redcolor':''">Free seats available</span>
                   
                                                                           </li>
                   
                   
                                                                       </ul>
                                                                   </label>
                                                               </div>
                                                            </div>
                                                           </div>
                                                           
                                                           <div className="clr"></div>
                                                           
                                                           
                                                           
                                                           <div className="clr"></div>
                                                           
                                                           
                                                           <div className="row light_bg">
                                                               <div className="col-md-6">
                                                                   <div id="0" className="d-up"> Flight Detail</div>
                                                  
                                                               </div>
                                                               <div className="col-md-6">
                                                              <div className="refundlist" style={{display:"none"}}> REFUNDABLE</div>
                                                              
                                                                   <div className="bagage_pnl">
                                                                       
                                                                       
                                                                   </div>
                                                                   <div className="bagage_pnl" style={{display:"none"}}>
                                                                       
                                                                       
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           
                                                       </div>
                                                       <div style={{display:"none"}}>
                                                           <img src="/assets/images/zero-convience-strip1.png"/>
                                                           
                                                       </div>
                                                       
                  
                                                       <div onClick="LoadMore();" style={{cursor:"pointer",color:"#2d67b2",marginBottom:11,padding :"5px 1%",fontSize: 15,fontWeight: "bold",float :"left",width :"100%",textAlign: "center",background: "#a9dee4",display:"none"}}> Load More</div>
                                                      
                                                       <div className="ng-hide"> No Record found</div>
                                                       
                                                   </div> 
    </React.Fragment>
  )
}

export default FlightDetails