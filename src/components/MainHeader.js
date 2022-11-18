import React from 'react'

function MainHeader() {
  return (
   <React.Fragment>
    <div className="emt_header_full snipcss-2ZlFS">
                <div className="emt_header_wrap">
                    <div className="emt_header">
                        <a href="#" onclick="RedirectToDomain();" className="emt_logo"><i className="newHeaderLogo"></i></a>
                    </div>
                    <a href="javascript:void(0);" className="icon">
                        <i className="fa-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </i>
                    </a>

                    <div className="rcs_sec" style={{display: "none"}}>
                        <div className="rescttl">Reschedule your flight</div>
                        <div className="rescttl" style={{display: "none"}}>Utilize your Credit Shell</div>


                        <div className="stepsr2">
                            <ul className="progressbar">
                                <li className="activetp">Pick New Dates</li>
                                <li className="activetp2">Select New Flight</li>
                                <li className="activetp2">Make Payment</li>
                            </ul>
                        </div>

                    </div>
                    <div className="">
                        <div className="emt_nav">
                            <ul>
                                <li><a href="#" className="active_n">Flights</a></li>
                                <li><a href="#">Hotels</a></li>
                                <li><a href="https://fph.easemytrip.com/">Flight + Hotel </a></li>
                                <li><a href="https://www.easemytrip.com/railways/">Trains</a></li>
                                <li><a href="https://www.easemytrip.com/bus/">Bus</a></li>
                                <li><a href="https://www.easemytrip.com/holiday-packages.html">Holidays</a></li>
                                <li><a href="https://www.easemytrip.com/cabs/">Cabs</a></li>
                                <li style={{display: "none"}}><a href="https://www.easemytrip.com/visa/index">Visa</a></li>
                                <li><a href="https://cruise.easemytrip.com/home">Cruise</a></li>

                                <li>
                                    <a>More <i className="down_arw"></i></a>
                                    <div className="dropdown-menu">
                                        <a href="https://www.easemytrip.com/charters/flight.html">Charters </a>
                                        <a href="https://activities.easemytrip.com/">Activities</a>
                                        <a href="https://www.easemytrip.com/giftcard">Gift Card</a>
                                        <a href="https://www.easemytrip.com/deals.html">Offers</a>
                                        <a href="https://corporate.easemytrip.com/"><span>CORPORATE TRAVEL</span></a>
                                        <a href="#">Agent Login</a>
                                        <a style={{display: "none"}} href="#">Corporate Travel</a>
                                        <a style={{display: "none"}} href="https://b2b.easemytrip.com/"><span>AGENT LOGIN</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="emt_support">
                            <div className="language_col" style={{display: "none"}}>
                                <span className="language_icn">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470"  enable-background="new 0 0 470 470" style={{fill: "#c0bfbf"}}>
                                        <g>
                                            <path d="m432.5,227.5h-77.031c-0.611-37.438-5.782-73.616-14.771-105.694h50.518c4.143,0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-55.112c-8.018-24.165-18.316-45.521-30.553-62.656-2.408-3.371-7.093-4.153-10.462-1.745-3.371,2.407-4.152,7.092-1.745,10.462 10.618,14.868 19.688,33.199 26.965,53.939h-77.809v-69.306c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v69.306h-77.81c7.277-20.74 16.347-39.071 26.965-53.939 2.407-3.37 1.626-8.055-1.745-10.462-3.372-2.407-8.055-1.625-10.462,1.745-12.237,17.135-22.535,38.492-30.553,62.656h-55.112c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5 7.5,7.5h50.518c-8.988,32.078-14.159,68.256-14.771,105.694h-77.03c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5 7.5,7.5h77.031c0.611,37.438 5.782,73.616 14.771,105.694h-50.519c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5 7.5,7.5h55.112c8.019,24.169 18.32,45.529 30.56,62.666 1.464,2.049 3.77,3.142 6.11,3.142 1.508,0 3.031-0.454 4.353-1.397 3.37-2.408 4.151-7.092 1.744-10.463-10.621-14.869-19.693-33.204-26.972-53.947h77.81v69.305c0,4.143 3.357,7.5 7.5,7.5s7.5-3.357 7.5-7.5v-69.306h77.81c-7.278,20.744-16.351,39.078-26.972,53.947-2.407,3.371-1.626,8.055 1.744,10.463 1.321,0.943 2.844,1.397 4.353,1.397 2.341,0 4.646-1.093 6.11-3.142 12.24-17.137 22.54-38.497 30.56-62.666h55.112c4.143,0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-50.519c8.989-32.078 14.16-68.256 14.771-105.694h77.031c4.143,0 7.5-3.357 7.5-7.5s-3.357-7.499-7.5-7.499zm-107.36-105.694c9.313,31.683 14.695,67.958 15.326,105.694h-97.966v-105.694h82.64zm-180.28,0h82.64v105.694h-97.966c0.632-37.737 6.013-74.011 15.326-105.694zm0,226.388c-9.313-31.683-14.695-67.958-15.326-105.694h97.966v105.694h-82.64zm180.28,0h-82.64v-105.694h97.966c-0.632,37.737-6.013,74.012-15.326,105.694z"></path>
                                            <path d="M401.17,68.83C356.784,24.444,297.771,0,235,0S113.216,24.444,68.83,68.83S0,172.229,0,235.001   c0,46.271,13.391,90.899,38.764,129.316l-28.718,86.148c-0.898,2.695-0.197,5.667,1.812,7.676c2.009,2.008,4.979,2.708,7.676,1.812   l86.15-28.716C144.102,456.609,188.729,470,235,470c62.771,0,121.784-24.444,166.17-68.83S470,297.771,470,235.001   C470,172.229,445.556,113.216,401.17,68.83z M235,455c-44.491,0-87.355-13.222-123.961-38.235   c-1.262-0.862-2.739-1.308-4.231-1.308c-0.797,0-1.598,0.127-2.372,0.385L29.02,440.979l25.14-75.414   c0.741-2.225,0.399-4.668-0.923-6.604C28.222,322.357,15,279.492,15,235.001C15,113.692,113.691,15,235,15s220,98.692,220,220.001   C455,356.309,356.309,455,235,455z"></path>
                                        </g>
                                    </svg>
                                </span>
                                <select ng-model="Language" className="language_slct ng-pristine ng-untouched ng-valid ng-empty">
                                    <option value="">English</option>
                                    <option value="hi-in">Hindi</option>
                                    <option value="as-in">Assamese</option>
                                    <option value="bn-in">Bengali</option>
                                    <option value="gu-in">Gujarati</option>

                                    <option value="mr-in">Marathi</option>
                                    <option value="pa-in">Punjabi</option>
                                    <option value="ta-in">Tamil</option>
                                    <option value="te-in">Telugu</option>
                                    <option value="ur-in">Urdu</option>
                                    <option value="ar-in">Arabic</option>
                                </select>
                                <i className="down_arw_lng"></i>
                            </div>



                            <div className="lang_country_slct" style={{display: "block"}}>
                                <div className="">
                                    <i className="arww_down_lang"></i>
                                    <span>INR|ENG</span>
                                </div>
                                <div className="lang_slct" style={{display:"none",width: 200}}>
                                    <div className="top_sec_lg">
                                        <div className="lang_slct_50">
                                            <p>Choose Currency</p>
                                            <div className="currency-switcher">
                                                <div className="dropdown">
                                                    <div className="caption"><img src="/assets/images/flag_INR.svg" width="18"/>INR</div>
                                                    <div className="list"><div className="item selected" id="divCurrINR"><img src="/images/flag_INR.svg" width="18"/>INR</div><div className="item" id="divCurrAED"><img src="/assets/images/flag_AED.svg" width="18"/>AED</div><div className="item" id="divCurrUSD"><img src="/assets/images/flag_USD.svg" width="18"/>USD</div><div className="item" id="divCurrSGD"/><img src="/assets/images/flag_SGD.svg" width="18"/>SGD</div><div className="item" id="divCurrTHB"><img src="/assets/images/flag_THB.svg" width="18"/>THB</div><div className="item" id="divCurrGBP"><img src="/assets/images/flag_GBP.svg" width="18"/>GBP</div></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="boder_tps" style={{display: "none"}}>
                                        <p>Choose Language</p>
                                        <div className="lang_slect">
                                            <label className="cont_curr">
                                                English
                                                <input onClick="ChangeLangSearch('English',AirReq)" lang="ENG" type="radio" value="" checked="checked"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Hindi
                                                <input onClick="ChangeLangSearch('hi-in',AirReq)" lang="HIN" type="radio" value="hi-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Assamese
                                                <input onClick="ChangeLangSearch('as-in',AirReq)" lang="ASS" type="radio" value="as-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Bengali
                                                <input onClick="ChangeLangSearch('bn-in',AirReq)" lang="BEN" type="radio" value="bn-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Gujarati
                                                <input onClick="ChangeLangSearch('gu-in',AirReq)" lang="GUJ" type="radio" value="gu-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Marathi
                                                <input onClick="ChangeLangSearch('mr-in',AirReq)" lang="MAR" type="radio" value="mr-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Punjabi
                                                <input onClick="ChangeLangSearch('pa-in',AirReq)" lang="PUN" type="radio" value="pa-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Tamil
                                                <input onClick="ChangeLangSearch('ta-in',AirReq)" lang="TAM" type="radio" value="ta-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Telugu
                                                <input onClick="ChangeLangSearch('te-in',AirReq)" lang="TEL" type="radio" value="te-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Urdu
                                                <input onClick="ChangeLangSearch('ur-in',AirReq)" lang="URD" type="radio" value="ur-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                            <label className="cont_curr">
                                                Arabic
                                                <input onClick="ChangeLangSearch('ar-in',AirReq)" lang="ARA" type="radio" value="ar-in"/>
                                                <span className="chk_curr"></span>
                                            </label>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="helpline">
                                <div className="support_icn"></div>
                                <div className="sub_header_link">
                                    24x7 Helpline <i className="down_arw"></i>
                                    <div className="dropdown-menu2" style={{minWidth: 195}}>
                                        <a><span className="" style={{marginBottom:5,display:"block"}}>Tel : 011 - 43131313, 43030303</span></a>
                                        <a href="mailto:care@easemytrip.com"><span className="">Care@easemytrip.com</span></a>
                                    </div>
                                </div>
                            </div>



                            <div className="clr"></div>
                            <div className="my_account" style={{display:"block"}}>
                                <div className="user_n_icn"></div>
                                <div className="sub_header_link3">
                                    <span> My Account </span>
                                    <span style={{display: "none"}} id="spnLgnWelcome">Welcome: </span>
                                    <span id="welcome-det-User" style={{display: "none"}}></span>
                                    <i className="down_arw"></i>
                                    <div className="dropdown-menu3">
                                        <div className="new_avtar"></div>
                                        
                                        <div className="" style={{display:"block",padding:"0 10px"}}>
                                            <div className="">
                                                <a className="btn_loginnew" onclick="OpenLoginPop()"> Login or Signup</a>
                                                <a style={{display: "none"}} className="">Register</a>
                                                <a style={{display: "none"}} className="log_btn fltr RegInHome">test</a>
                                            </div>
                                            <div className="clr"></div>
                                        </div>
                                        <div style={{display: "none"}}>
                                            <a className="sb_link_b2bn">EMTIN39489184</a>
                                            <a className="sb_link_b2b blncb2b">
                                                A/C Balance
                                                <span className="rupeb2b">
                                                    <img src="/assets/images/inr-hotel-tab.png" className="rupeeIcnb2b"/>
                                                    <span className="wallet-amt">25000</span>
                                                </span>
                                            </a>
                                            <a className="sb_link_b2b blncb2b">
                                                Statement Balance
                                                <span className="rupeb2b">
                                                    <img src="/assets/images/inr-hotel-tab.png" className="rupeeIcnb2b"/>
                                                    <span className="wallet-amt">15000</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="booking_pnl">
                                            <a className="sb_link_2" style={{display: "block"}} onclick="OpenMyBooking()"> My Wallet <span className="wallet-amt"></span><img src="/assets/images/inr-hotel-tab.png" className="rupeeIcn"/></a>
                                            <a className="sb_link_2" href="#"> My Booking </a>
                                            <a className="sb_link_2" href="https://mybookings.easemytrip.com/MyBooking/CheckModifyBooking"> Print/Cancel Booking </a>
                                            <span style={{display: "none"}}>
                                                <a className="sb_link_2" href="#"> My Profile</a>
                                                <a className="sb_link_2" onClick="LogOut()">Log Out</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{display: "none"}} className="ng-scope">

                        <div className="">
                            <div className="">
                                <div style={{width: 489, margin: "30 auto 0px auto", position: "relative"}}>
                                    <div style={{width: 32, height: 32, position: "absolute", right: -84, top: 5}}>
                                        <img src="/assets/images/Close.png"/>
                                    </div>
                                    <div style={{width: 530, float: "left" ,border: "4px solid #147eca", borderRadius: 5,
                    padding: 21, background: "#fff"}}>
                                        <div style={{width: "92%", float:" left", background: "#e52e30", color: "#fff", borderRadius: 3,
                        padding: "0px 5px 8px 5px", fontFamily: "arial", fontSize: 12, marginBottom: 10,
                        display: "none"}}>
                                            <span style={{fontSize: 14, lineHeight: 24}}>
                                                Sorry, there was a problem signing
                                                you in<br/>
                                            </span>1. It seems you already have a EaseMyTrip account. Please sign in with your
                                            password or get a new one if you have forgotten it.
                                        </div>
                                        <p style={{color: "#474747", fontFamily: "arial", fontSize: 30 , width: "100%",
                        float: "left", margin: 0}}>
                                            Have an EaseMyTrip Account
                                        </p>
                                        <h3 style={{color: "#474948", fontFamily: "arial", fontSize: 26, width: "100%", float: "left",
                        margin: "40px 0px 0px 0px"}}>
                                            Enter your Email address
                                        </h3>
                                        <input type="text" ng-model="txtEmail" style={{width: "88%", float: "left", marginTop: 15,
                        border: "1px solid #e2e4e3", padding: "15px 2%", borderRadius: 5, fontSize: 16,
                        color: "#666"}} placeholder="Email Address " className=""/>
                                        <div style={{width: "100%", float: "left", margin: "15px 0px",fontFamily: "arial", fontSize: 12}}>
                                            <span style={{fontSize: 15, width: "100%", float: "left",marginBottom: 10}}>
                                                This will
                                                be the username for your new EaseMyTrip account
                                            </span>
                                            <div style={{width: "100%", float: "left", margin: "5px 0px 15px 0px"}}>

                                            </div>


                                        </div>


                                        <p style={{textAlign: "left", width: "100%", float: "left",margin: 0}}>
                                            <input name="" type="button" className="" value="Create Account"/>
                                        </p>


                                        <div style={{backgroundColor: "Red", color: "White", float: "left",
                        display: "none", padding: "5px 10px 5px 10px",borderRadius: 10}}>

                                            Hi, To complete the registration process, please click the link in the email we
                                            just sent you.
                                        </div>


                                        <div style={{backgroundColor: "Red", color: "White", float: "left", display: "none",
                        padding: "5px 10px 5px 10px", borderRadius: 10}}>

                                            Hi, To complete the registration process, please click the link in the email we
                                            just sent you.
                                        </div>


                                        <div style={{backgroundColor: "Green", color: "White", float: "left", display: "none",
                        padding: "5px 10px 5px 10px", borderRadius: 10}}>
                                            Please Wait...
                                        </div>


                                        <div style={{backgroundColor: "Red", color: "White", float: "left", display: "none",
                        padding: "5px 10px 5px 10px",borderRadius: 10}}>
                                            Enter a valid Email.
                                        </div>


                                        <div style={{backgroundColor: "Red", color: "White", float: "left", display: "none",
                        padding: "5px 10px 5px 10px",borderRadius: 10}}>
                                            Enter a Email Address.
                                        </div>


                                        <div style={{backgroundColor: "Green", color: "White", float: "left", display: "none",
                        padding: "5px 10px 5px 10px", borderRadius: 10}}>

                                            Thanks for registering with EaseMyTrip, To complete the registration process, please
                                            click the link in the email we just sent you .
                                        </div>


                                    </div>


                                </div>





                                <input type="hidden"/>


                                <input type="hidden" id="count"/>


                            </div>


                        </div>


                        <div>
                        </div>


                    </div>


                    <div className="sign-in-m" style={{display: "none"}}>

                        <div style={{width: 32,height: 32,position: "absolute",right: 10,top: 42, cursor:"pointer"}}>
                            <img src="/assets/images/cross2.png"/>
                        </div>
                        <div className="main-log-sec">
                            <div className="log-propr">
                                <div className="trp-mng-m">

                                    <div className="log-prpr-img">
                                        <div className="img"><img src="/assets/images/sign-mn.png"/></div>
                                        <div className="trp-mng">
                                            <span>Fare Alert</span><br/>
                                            <span className="trp-mng2">Get the instant fare drop offers in your inbox</span>
                                        </div>
                                        <div className="trp-mng">
                                            <span>Customized Packages</span><br/>
                                            <span className="trp-mng2">Enjoy holidaying with customized packages</span>
                                        </div>
                                        <div className="trp-mng mrgn-btm ">
                                            <span>Exciting Offers</span><br/>
                                            <span className="trp-mng2">Get the best deals on flights, buses and holiday packages</span>
                                        </div>

                                    </div>
                                    <div className="clr"></div>
                                </div>
                                <div className="clr"></div>

                            </div>
                            <div className="log-sec-r">
                                <div className="logn-detal">
                                    <div className="logn-txt">Login for Flawless Booking Experience</div>
                                    <div className="pa-s">
                                        <div className="col-3">
                                            <input className="effect-16" type="text" placeholder="" ng-model="UserID"/>
                                            <label>Enter Your Email Address/Mobile No.</label>
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>

                                    <div className="pa-s">
                                        <div className="col-3">
                                            <input className="effect-16" type="password" placeholder="" ng-model="Password"/>
                                            <label>Enter Password</label>
                                            <span className="focus-border"></span>
                                        </div>

                                    </div>
                                    <div className="clr"></div>

                                    <div className="forgt-pass"><span><a href="#" onClick="forgotPass();">Forgot Password?</a></span></div>
                                    <div className="otppnl" style={{display:"block"}}><span><a href="#">Sign in with OTP</a></span></div>
                                    <div className="clr"></div>

                                    <div className="tc-privacy">By  Logging in, I understand and agree to Easemytrip <a href="https://www.easemytrip.com/terms.html"> Term of use </a> and <a href="https://www.easemytrip.com/privacy-policy.html"> privacy policy </a> </div>
                                    <div className="clr"></div>
                                    <div className="lgn log_in_im3" onClick="Authenticate('P')">Login</div>
                                    <div className="lgn log_in_im3" style={{display: "none"}}>Login</div>
                                    <div className="lgn log_in_im3" style={{display: "none"}}>Login</div>
                                    <div className="extr" style={{display: "none"}}>OR</div>
                                    <div className="facb facb_im3" style={{display: "none"}}>Facebook</div>
                                    <div className="clr"></div>

                                    <div className="dnt-hv">Don't have an account ?  <a href="#" className="su"> SIGN UP </a></div>
                                    <div className="pl-wat">Please Wait...</div>
                                    <div className="pl-wat"> Your Email ID or Password is incorrect. </div>
                                    <div className="pl-wat">Oops! Something went wrong. Sorry for the inconvenience. Please try again later</div>
                                </div>


                                <div className="socialbx" style={{display: "none"}}>
                                    <button className="loginBtn-fb">
                                        Login with Facebook
                                    </button>

                                    <button className="loginBtn-go">
                                        Login with Google
                                    </button>
                                </div>
                                <div style={{display: "none"}}>
                                    <div className="logn-detal" style={{overflow: "hidden", display:"none"}}>
                                        <div style={{width: 20,float: "left", fontSize: 11,marginBottom: 3,fontWeight: "underline", COLOR: "#1888c8", textDecoration: "underline",cursor:"pointer"}}>Back</div>
                                        <div className="clr"></div>
                                        <div className="logn-txt">Login </div>
                                        <div className="pa-s">
                                            <div className="col-3">
                                                <input className="effect-16" type="text" placeholder=""/>
                                                <label>Enter Your Mobile No.</label>
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>
                                        <div className="clr"></div>
                                        <div className="tc-privacy">By  Logging in, I understand and agree to Easemytrip <a href="https://www.easemytrip.com/terms.html"> Term of use </a> and <a href="https://www.easemytrip.com/privacy-policy.html"> privacy policy </a> </div>
                                        <div className="clr"></div>
                                        <div className="lgn log_in_im3">Login</div>
                                        <div style={{color:"red",display:"none"}}></div>
                                        <div className="clr"></div>
                                    </div>
                                </div>

                                <div style={{display: "none"}}>
                                    <div className="logn-detal" style={{overflow: "hidden", display:"block"}}>
                                        <div onClick="BackToLogin()" style={{width: 20,float: "left", fontSize: 11,marginBottom: 3,fontWeight: "underline" ,COLOR: "#1888c8", textDecoration: "underline",cursor:"pointer"}}>Back</div>	<div className="clr"></div>
                                        <div className="logn-txt">Verify your Mobile No </div>
                                        <div className="pa-s">
                                            <p className="n_p">We Have sent a OTP to </p>
                                            <div className="col-3">
                                                <input className="effect-16" type="text" placeholder=""/>
                                                <label>Enter Your OTP</label>
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>
                                        <div className="clr"></div>
                                        <div className="clr" style={{display: "none"}}>Timer: <span id="spnClock11" className=""></span></div>
                                        <div className="otppnl">
                                            <span><a href="#">Resend OTP</a></span>
                                            <div className="clr"></div>
                                            <span style={{marginTop: 5, float: "right",display:"none"}}><a href="#"><img src="/assets/images/phone-icon.png" width="15"/> Resend OTP on Call</a></span>
                                        </div>
                                        <div className="clr"></div>
                                        <div className="lgn log_in_im3 m_15">Login</div>
                                        <div style={{color:"red",display:"none"}}>User detail is not correct</div>
                                        <div className="clr"></div>
                                    </div>
                                </div>

                                <div className="se-m">
                                    <div style={{width: 20,float: "left",fontSize: 11,marginBottom: 3,fontWeight:"underline",COLOR: "#1888c8" ,   textDecoration: "underline",cursor:"pointer"}}>Back</div>
                                    <div className="mob-h">Create your EaseMyTrip account</div>
                                    <div className="clr"></div>
                                    <div className="col-3">
                                        <input className="effect-16" type="text" placeholder=""/>
                                        <label>Enter Mobile number or Email</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="clr"></div>
                                    <div className="p2">
                                        This will be the username for your new EaseMyTrip account
                                    </div>
                                    <div className="clr"></div>
                                    <div className="sign-inn">
                                        <input className="buttonLogin" type="button" value="Register" onClick="CreateAccountMobEmail();"/>
                                        <input className="buttonLogin" style={{display: "none"}} type="button" value="Forgot Password" onClick="ForgetPassword();"/>
                                    </div>
                                    <div className="i-eml">* Enter a valid Email or Phone Number.</div>
                                    <div className="alt-re">

                                        Hi, To complete the registration process, please click the link in the email we just sent you.
                                    </div>
                                    <div className="alt-re">

                                        Hi, To complete the registration process, please click the link in the email we just sent you.
                                    </div>
                                    <div className="pl-wat">Please Wait...</div>
                                    <div className="alt-re">Enter a valid Email.</div>
                                    <div className="alt-re">Enter a Email Address.</div>
                                    <div className="pl-wat">

                                        Thanks for registering with EaseMyTrip, To complete the registration process, please
                                        click the link in the email we just sent you .
                                    </div>
                                </div>

                                <div className="se-m1" style={{display: "none"}}>
                                    <div style={{width: 20,float: "left",    fontSize: 11,   marginBottom: 3,    fontWeight: "underline",    COLOR: "#1888c8",    textDecoration: "underline",cursor:"pointer"}}>Back</div>
                                    <div className="snt-c">
                                        <span>We have sent a code to</span>
                                        <span ng-bind="txtEmail" className=""></span>
                                    </div>
                                    <div className="cod-mm">
                                        <div className="cod-m">
                                            <span>Please enter the code to verify your mobile number</span>
                                            <span style={{cursor:"pointer"}}>Resend Code</span>
                                        </div>
                                       
                                            <input className="effect-16 ng-pristine ng-untouched ng-valid ng-empty" type="text" placeholder=""/>
                                            <label>Enter OTP</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="alt-re1">* Please enter correct OTP</div>
                                    </div>
                                    <div className="cod-mm">
                                        <div className="col-3">
                                            <input className="effect-16 ng-pristine ng-untouched ng-valid ng-empty" type="password" placeholder=""/>
                                            <label>Choose Password</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="nt">* Password must be at-least 8 characters long</div>
                                    </div>
                                    <div className="cod-mm">
                                        <div className="col-3">
                                            <input className="effect-16 ng-pristine ng-untouched ng-valid ng-empty" type="password" placeholder=""/>
                                            <label>Re-type Password</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="nt1">* Password does not match the confirm password.</div>
                                    </div>
                                    <div className="sign-inn1">
                                        <input className="buttonLogin1" type="button" value="Submit" onClick="RegConfirmOTP();"/>
                                    </div>
                                    <div className="pl-wat">
                                        Thanks for registering with EaseMyTrip.
                                    </div>
                                    <div className="pl-wat">
                                        "Your OTP has been expired"
                                    </div>
                                    <div className="pl-wat">
                                        "Enter the valid OTP"
                                    </div>
                                    <div className="pl-wat">Please Wait...</div>
                                    <div className="pl-wat">Oops! Something went wrong. Sorry for the inconvenience. Please try again later</div>
                                </div>
                            </div>
                            <div className="clr"></div>

                        </div>
                    </div>


                    <div className="black-bck" style={{display: "none"}}></div>

   
   </React.Fragment>
  )
}

export default MainHeader