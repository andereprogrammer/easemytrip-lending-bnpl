import React from 'react'



function SideBar() {
  return (
   <React.Fragment>
<div className="wrapper_sidebar">
        <div className="tp_fltr">
            <h2 className=""> FILTER <a href="#" style={{display:"none"}} className="">clear all</a> </h2>
        </div>
        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>

        <div className="prc_flt_n">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Popular Filters</div>
                <div className="arrow-down-flt"></div>
            </div>
            <div className="clr"></div>
            <div className="prc_val">
                <div className="row_flt">
                    <div className="wid70" style={{display:"none"}}>
                        <label className="check-box">
                            Refundable Fares 
                            <input type="checkbox" className="snipcss0-6-16-17"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="wid30" style={{display:"none"}}><span className="ft-10"><img src="/assets/images/b-inr.png" className="flt_rs snipcss0-6-20-21"/>2345</span></div>
                </div>
                <div className="row_flt">
                    <div className="wid70">
                        <label className="check-box">
                            Non Stop 
                            <input type="checkbox" data-role="none" className="snipcss0-6-24-25"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}><span className="ft-10"><img src="/assets/images/b-inr.png" className="flt_rs snipcss0-6-28-29"/>3345</span></div>
                </div>
                <div className="row_flt">
                    <div className="wid70">
                        <label className="check-box">
                            Morning Departure 
                            <input type="checkbox" data-role="none" className="snipcss0-6-32-33"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}><span className="ft-10"><img src="/assets/images/b-inr.png" className="flt_rs snipcss0-6-36-37"/>23345</span></div>
                </div>
                <div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            AirAsia
                            
                            <input type="checkbox" id="pAirAsia" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-40-41"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-44-45"/>
							4718
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            Air India
                            
                            <input type="checkbox" id="pAir India" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-48-49"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-52-53"/>
							4947
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            Indigo
                            
                            <input type="checkbox" id="pIndigo" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-56-57"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-60-61"/>
							5057
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            Vistara
                            
                            <input type="checkbox" id="pVistara" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-64-65"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-68-69"/>
							5241
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            GO FIRST
                            
                            <input type="checkbox" id="pGO FIRST" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-72-73"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-76-77"/>
							5409
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            SpiceJet
                            
                            <input type="checkbox" id="pSpiceJet" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-80-81"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-84-85"/>
							5502
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                  <div className="wid70">
                        <label className="check-box">
                            AkasaAir
                            
                            <input type="checkbox" id="pAkasaAir" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-88-89"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30" style={{display:"none"}}>
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-92-93"/>
							7240
                        </span>
                    </div>
                </div>
                <div className="clr"></div>
                <div className="ShowMore" style={{display:"none"}}><a href="#" className=""> More</a></div>
            </div>

        </div>
        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>

        <div className="prc_flt">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Price Range</div>
                <div className="arrow-down-flt pr1"></div>
            </div>
            <div className="prc_val">
                <div className="ui-content snipcss0-3-104-105">
                    <form action="" className="">
                        <div className="ft_price vbn4 snipcss0-5-106-107">
                            <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: 0, width: "100%"}}></div><span className="ui-slider-handle ui-corner-all ui-state-default snipcss0-7-108-110" style={{left: 0}}></span><span className="ui-slider-handle ui-corner-all ui-state-default snipcss0-7-108-111" style={{left: 100}}></span></div>
                            <p style={{marginTop:"10px"}} className="">
                                <input type="text" style={{border:0, color:"#f6931f",  display: "block", color:"#353535",padding: "5px 0px"}} className="snipcss0-7-112-113"/>
                            </p>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>

        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>

        <div className="prc_flt">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Stops</div>
                <div className="arrow-down-flt"></div>
            </div>
            <div className="clr"></div>
            <div className="pag1">
                <div className="wid33">
                    <div className="pa11">
                        <p className="sb_flt">0 <br className=""/>Non-Stop</p>
                        <input name="" type="checkbox" style={{display:"none"}} className=""/>
                    </div>
                </div>
                <div className="wid33">
                    <div className="pa22" onClick="NewSetFilterStop('Stop','1','chkOneStop')">
                        <p className="sb_flt">1 <br className=""/>Stop</p>
                        <input name="" type="checkbox" style={{display:"none"}} className=""/>
                    </div>
                </div>
                <div className="wid33">
                    <div className="pa33">
                        <p className="sb_flt">2+ <br className=""/>Stop</p>
                        <input name="" type="checkbox" style={{display:"none"}} className=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>

        <div className="prc_flt">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Departure from<span className="ng-binding snipcss0-4-143-144">Delhi</span></div>
                <div className="arrow-down-flt"></div>
            </div>
            <div className="clr"></div>
            <div className="prc_val">
                <div className="tm-dt1">
                    <div className="tm11">
                        <div className="tm-m11">
                            <div className="mor-n1"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf1"> Before <br className=""/> 6 AM</div>
                        </div>
                    </div>
                    <div className="tm22">
                        <div className="tm-m12">
                            <div className="mor1-n2"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf2">6 AM -<br className=""/>  12 PM</div>
                        </div>
                    </div>
                    <div className="tm33">
                        <div className="tm-m22">
                            <div className="mor2-n3"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf3">12 PM -<br className=""/>  6 PM</div>
                        </div>
                    </div>
                    <div className="tm11-n">
                        <div className="tm-m33">
                            <div className="mor3-n4"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf4"> After<br className=""/> 6 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>
        <div className="prc_flt">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Arrival at <span className="ng-binding snipcss0-4-182-183">Mumbai</span></div>
                <div className="arrow-down-flt"></div>
            </div>
            <div className="clr"></div>
            <div className="prc_val">
                <div className="tm-dt11">
                    <div className="tm111">
                        <div className="tm-m111">
                            <div className="mor-n11"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf11"> Before <br className=""/> 6 AM</div>
                        </div>
                    </div>
                    <div className="tm222">
                        <div className="tm-m122">
                            <div className="mor1-n22"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf22">6 AM -<br className=""/>  12 PM</div>
                        </div>
                    </div>
                    <div className="tm333">
                        <div className="tm-m222">
                            <div className="mor2-n33"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf33">12 PM -<br className=""/>  6 PM</div>
                        </div>
                    </div>
                    <div className="tm11-n">
                        <div className="tm-m333">
                            <div className="mor3-n44"></div>
                            <div className="clr"></div>
                            <div className="clr"></div>
                            <div className="tm-nf44"> After <br className=""/> 6 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clr"></div>
        <div className="border-b3"></div>
        <div className="clr"></div>
        <div className="prc_flt">
            <div className="prc_ttls">
                <div className="prc_ttl2"> Airlines</div>
                <div className="arrow-down-flt"></div>
            </div>
            <div className="clr"></div>
            <div className="prc_val">
                <div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/I5.png"/>AirAsia                           
  <input type="checkbox" id="AirAsia" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-227-229"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-232-233"/>
							<span className="ng-binding snipcss0-6-232-234">4718</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/AI.png"/>Air India                           
  <input type="checkbox" id="Air India" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-237-239"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-242-243"/>
							<span className="ng-binding snipcss0-6-242-244">4947</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/6E.png"/>Indigo                           
  <input type="checkbox" id="Indigo" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-247-249"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-252-253"/>
							<span className="ng-binding snipcss0-6-252-254">5057</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/UK.png"/>Vistara                           
  <input type="checkbox" id="Vistara" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-257-259"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-262-263"/>
							<span className="ng-binding snipcss0-6-262-264">5241</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/G8.png"/>GO FIRST                           
  <input type="checkbox" id="GO FIRST" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-267-269"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-272-273"/>
							<span className="ng-binding snipcss0-6-272-274">5409</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/SG.png"/>SpiceJet                           
  <input type="checkbox" id="SpiceJet" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-277-279"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-282-283"/>
							<span className="ng-binding snipcss0-6-282-284">5502</span>
							
						
                        </span>
                    </div>
                </div><div className="row_flt" ng-init="FillArrAirline()">
                    <div className="wid70">
                        <label className="check-box">
                            
                            
                            <img className="mgl5" style={{height:"16px",width:"16px"}} src="/assets/images/QP.png"/>AkasaAir                           
  <input type="checkbox" id="AkasaAir" ng-bind="GetAirLineName(id)" className="ng-binding snipcss0-6-287-289"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="wid30">
                        <span className="ft-10">
                            <img src="/assets/images/b-Rs.png" className="flt_rs snipcss0-6-292-293"/>
							<span className="ng-binding snipcss0-6-292-294">7240</span>
							
						
                        </span>
                    </div>
                </div>
                <div className="clr"></div>
                <div id="ShowMore" className=""><a href="#" className=""> More +</a></div>
                <div id="ShowLess" style={{display:"none"}} className=""><a href="#" className=""> Show Less -</a></div>
            </div>
        </div>
    </div> 
   </React.Fragment>
  )
}

export default SideBar