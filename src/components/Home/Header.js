import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory()
  return (
    <React.Fragment>
      <div className="searchengBg snipcss-GoAIE">
        <div className="innerwrapSE">
          <h1 className="">
            <i className="fl_hp_icon"></i> Search Lowest Price
          </h1>
          <div className="onewaycolm">
            <input
              id="Trip"
              className=""
              value="One"
              type="radio"
              style={{ display: "none" }}
            />
            <input
              id="radio1"
              className=""
              value="Two"
              type="radio"
              style={{ display: "none" }}
            />
            <input
              id="rdoMul"
              className=""
              value="Mul"
              type="radio"
              style={{ display: "none" }}
            />

            <ul>
              <li className="trip_type flig-show click-one bg-color activecl">
                {" "}
                One Way
              </li>
              <li className="trip_type flig-show">Round Trip </li>
              <li className="trip_type click-mul">Multi-City </li>
            </ul>
          </div>
          <div className="flig-show1">
            <div className="nwsearch_wrap">
              <div className="fss_flex depcity_colm sechver">
                <div
                  className="innerspcr"
                  onclick="MulticityClearText('fromautoFill', 'FromSector_show','F');"
                >
                  <p className="srlabel_header">From</p>
                  <input
                    onkeydown="TocontrolTabClickFrom(event)"
                    type="text"
                    className="hide-txtbox input_city ac_input"
                    placeholder="From"
                    style={{ display: "none" }}
                  />

                  <input
                    tabindex="1"
                    type="text"
                    onblur="checkDOM()"
                    className="cityinput"
                    placeholder="From"
                    value={"DELHI"}
                    onclick="MulticityClearText('fromautoFill', this.id,'F');"
                  />
                  <p className="airptname tellipsis">
                    [DEL] Indira Gandhi International Airport
                  </p>

                  <p className="gpsicon" style={{ display: "none" }}>
                    <img src="/assets/images/gps_icon.svg" />
                  </p>
                </div>

                <div className="fromsectr" style={{ display: "none" }}>
                  <div className="searcityCol">
                    <i className="searcIcn"></i>
                    <input
                      type="text"
                      className="srctinput"
                      placeholder="From"
                    />
                  </div>
                  <div className="ovscroll" style={{ display: "none" }}>
                    <div className="topCityhd">Top Cities</div>

                    <ul className="ausuggest">
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="swipesector"
                onclick="swapValues('FromSector', 'Editbox13');swapValues('FromSector_show', 'Editbox13_show'); AnimateCss('FromSector_show', 'slide-right-in', 0, 500); AnimateCss('Editbox13_show', 'slide-left-in', 0, 500);return false;"
              ></div>
              <div className="fss_flex arrcity_colm sechver">
                <div
                  className="innerspcr"
                  onclick="MulticityClearText('toautoFill', 'Editbox13_show','I');"
                >
                  <p className="srlabel_header">To</p>
                  <input
                    type="text"
                    className="hide-txtbox"
                    placeholder="To"
                    style={{ display: "none" }}
                  />
                  <input
                    type="text"
                    className="cityinput"
                    placeholder="To"
                    value={"MUMBAI"}
                    autocomplete="off"
                    onclick="MulticityClearText('toautoFill', this.id,'I');"
                  />
                  <p className="airptname tellipsis">
                    [BOM] Chhatrapati Shivaji International Airport
                  </p>
                </div>

                <div className="fromsectr" style={{ display: "none" }}>
                  <div className="searcityCol">
                    <i className="searcIcn"></i>
                    <input
                      type="text"
                      className="srctinput autoFlll"
                      placeholder="From"
                    />
                  </div>
                  <div className="ovscroll" style={{ display: "none" }}>
                    <div className="topCityhd">Top Cities</div>
                    <ul className="ausuggest">
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                      <li>
                        <div className="mflexcol">
                          <img
                            src="/assets/images/planeicon.svg"
                            className="mgr10"
                          />
                          <div>
                            <p>
                              <span className="flsctrhead">Delhi</span>
                              <span className="fliatacd">DEL</span>
                            </p>
                            <p className="autosrpt">
                              Indira Gandhi International Airport
                            </p>
                          </div>
                          <div className="flcountry">India</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fss_flex depdate_colm sechver">
                <div className="innerspcr" onclick="getTextboxName('ddate')">
                  <p className="srlabel_header">DEPARTURE DATE</p>
                  <input
                    name=""
                    type="text"
                    className="input_cld"
                    placeholder=""
                    style={{ opacity: "0 !important", position: "absolute" }}
                  />
                  <p>
                    <span className="ftn25 mgr5">21</span>
                    <span className="ftn13">Nov'2022</span>
                    <img
                      className="cl_icon"
                      src="/assets/images/calender_icon.svg"
                    />
                  </p>
                  <p className="airptname">Monday</p>
                </div>
                <div style={{ display: "none" }}></div>
              </div>
              <div
                className="fss_flex depdate_colm sechver op"
                style={{ opacity: 1 }}
              >
                <div className="innerspcr" onclick="getTextboxName('rdate')">
                  <p className="srlabel_header">Return Date</p>
                  <input
                    name=""
                    type="text"
                    className="input_cld"
                    placeholder=""
                    style={{ opacity: "0 !important", position: "absolute" }}
                  />
                  <p className="rou_noti">
                    Book a round trip
                    <br /> to save more
                  </p>
                  <p>
                    <span className="ftn25 mgr5"></span>
                    <span className="ftn13"></span>
                    <img
                      className="cl_icon"
                      src="/assets/images/calender_icon.svg"
                    />
                  </p>
                  <p className="airptname"> </p>
                  <input type="hidden" id="hdn1" />
                  <input type="hidden" />
                </div>
                <i className="roundcross" style={{ display: "none" }}></i>
              </div>
              <div id="trvlr_colm" className="fss_flex trvlr_colm sechver">
                <div className="innerspcr">
                  <p id="ptravlr" className="srlabel_header">
                    TRAVELLER &amp; CLASS
                  </p>
                  <p id="ptravlrNo">
                    <span className="ftn25 mgr3 drpNoTrv">1</span>
                    <span className="ftn14">Traveller(s)</span>{" "}
                    <i className="downArwSe"></i>
                  </p>
                  <p className="airptname optclass-name"> Economy</p>
                </div>

                <div className="dropdown-travelr" style={{ display: "none" }}>
                  <div className="innr_pnl_v2">
                    <div className="flex-adltcol">
                      <div>
                        <p className="trvlhead">Adults</p>{" "}
                        <p className="agetxt">(12+ Years)</p>
                      </div>
                      <div id="field1">
                        <button type="button" className="sub minus_boxADt">
                          -
                        </button>
                        <input
                          type="text"
                          className="inptno"
                          value="1"
                          readonly=""
                        />
                        <button type="button" id="add" className="add">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex-adltcol">
                      <div>
                        <p className="trvlhead">Children</p>{" "}
                        <p className="agetxt">(2-12 Years)</p>
                      </div>
                      <div id="field2">
                        <button type="button" className="sub minus_box1">
                          -
                        </button>
                        <input
                          type="text"
                          className="inptno numbe_box2"
                          readonly=""
                        />
                        <button type="button" id="add" className="add">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex-adltcol">
                      <div>
                        <p className="trvlhead">Infant</p>{" "}
                        <p className="agetxt">(0-2 Years)</p>
                      </div>
                      <div id="field3">
                        <button type="button" className="sub minus_box1">
                          -
                        </button>
                        <input
                          type="text"
                          className="inptno numbe_box2"
                          readonly=""
                        />
                        <button type="button" id="add" className="add">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="divider_nw"></div>
                    <label className="cont_flnw">
                      Economy
                      <input
                        className="optClass"
                        type="radio"
                        value="0"
                        checked="checked"
                      />
                      <span className="chk_flnw"></span>
                    </label>
                    <label className="cont_flnw">
                      Prem.Economy
                      <input
                        className="optClass"
                        type="radio"
                        value="4"
                        onclick="fillOptClassName('Prem.Economy')"
                      />
                      <span className="chk_flnw"></span>
                    </label>
                    <label className="cont_flnw">
                      Business
                      <input
                        className="optClass"
                        type="radio"
                        value="2"
                        onclick="fillOptClassName('Business')"
                      />
                      <span className="chk_flnw"></span>
                    </label>
                    <label className="cont_flnw optFrst">
                      First
                      <input
                        className="optClass"
                        type="radio"
                        value="1"
                        onclick="fillOptClassName('First')"
                      />
                      <span className="chk_flnw"></span>
                    </label>

                    <div className="clr"></div>
                    <a href="javascript:void(0);" className="dn_btn">
                      Done
                    </a>
                  </div>
                </div>
              </div>
              <div className="fss_flex search_colm">
                <button name="" className="srchBtnSe" type="button" onClick={()=>history.push('/list-of-flights')}>
                  <span className=""></span> Search
                </button>
              </div>
            </div>
          </div>
          <div id="showMulticty" className="" style={{ display: "none" }}>
            <div className="nwsearch_wrap ffwrap">
              <div style={{ display: "block" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti1', 'FromSector-mul1_show', 'F');"
                    >
                      <p className="srlabel_header">From</p>
                      <input
                        type="text"
                        className="input_city hide-txtbox mul-ti ac_input"
                        placeholder="Departure City"
                        autocomplete="off"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Departure City"
                        autocomplete="off"
                      />
                      <p className="airptname tellipsis"></p>

                      <p className="gpsicon" style={{ display: "none" }}>
                        <img src="/assets/images/gps_icon.svg" />
                      </p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti1', 'ToSector-mul1_show');"
                    >
                      <p className="srlabel_header">To</p>

                      <input
                        type="text"
                        className="hide-txtbox"
                        placeholder="Destination City"
                        onclick="MulticityClearText('ToMulti1',this.id);"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="cityinput"
                        placeholder="Destination City"
                        onclick="    MulticityClearText('ToMulti1', this.id);"
                        onblur="fillMultiCityTotxtBox();"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul1')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />
                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"></p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex trvlr_colm sechver">
                    <div className="innerspcr" onclick="myFunction5()">
                      <p className="srlabel_header">TRAVELLER &amp; CLASS</p>
                      <p className="">
                        <span className="ftn25 mgr5 drpNoTrv">1</span>
                        <span className="ftn14">Traveller(s)</span>{" "}
                        <i className="downArwSe"></i>
                      </p>
                      <p className="airptname optclass-nameMul"> Economy</p>
                    </div>

                    <div
                      className="dropdown-travelr"
                      style={{ display: "none" }}
                    >
                      <div className="innr_pnl_v2">
                        <div className="flex-adltcol">
                          <div>
                            <p className="trvlhead">Adults</p>{" "}
                            <p className="agetxt">(12+ Years)</p>
                          </div>
                          <div id="field1">
                            <button type="button" className="sub">
                              -
                            </button>
                            <input
                              type="text"
                              className="inptno numbe_box2"
                              value="1"
                            />
                            <button type="button" className="add">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex-adltcol">
                          <div>
                            <p className="trvlhead">Children</p>{" "}
                            <p className="agetxt">(2-12 Years)</p>
                          </div>
                          <div id="field2">
                            <button type="button" className="sub">
                              -
                            </button>
                            <input
                              type="text"
                              className="inptno numbe_box2"
                              value="0"
                            />
                            <button type="button" className="add">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex-adltcol">
                          <div>
                            <p className="trvlhead">Infant</p>{" "}
                            <p className="agetxt">(0-2 Years)</p>
                          </div>
                          <div id="field3">
                            <button type="button" className="sub">
                              -
                            </button>
                            <input
                              type="text"
                              className="inptno numbe_box2"
                              value="0"
                            />
                            <button type="button" className="add">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="divider_nw"></div>
                        <label className="cont_flnw">
                          Economy
                          <input
                            type="radio"
                            value="0"
                            className=""
                            checked="checked"
                          />
                          <span className="chk_flnw"></span>
                        </label>
                        <label className="cont_flnw">
                          Prem.Economy
                          <input
                            type="radio"
                            value="4"
                            className=""
                            onclick="fillOptClassNameMul('Prem.Economy')"
                          />
                          <span className="chk_flnw"></span>
                        </label>
                        <label className="cont_flnw">
                          Business
                          <input
                            type="radio"
                            value="2"
                            className=""
                            onclick="fillOptClassNameMul('Business')"
                          />
                          <span className="chk_flnw"></span>
                        </label>
                        <label className="cont_flnw optFrst">
                          First
                          <input
                            type="radio"
                            value="1"
                            className=""
                            onclick="fillOptClassNameMul('First')"
                          />
                          <span className="chk_flnw"></span>
                        </label>

                        <div className="clr"></div>
                        <a className="dn_btn">Done</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clr"></div>

              <div style={{ display: "block" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti2', 'FromSector-mul2_show');"
                    >
                      <p className="srlabel_header">From</p>

                      <input
                        type="text"
                        className="hide-txtbox"
                        placeholder="Type Departure City"
                        onclick="MulticityClearText('FromMulti2', this.id);"
                        style={{ display: "none" }}
                      />
                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Type Departure City"
                        onclick="MulticityClearText('FromMulti2', this.id,'');"
                      />
                      <span className="airptname tellipsis"></span>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti2', 'ToSector-mul2_show');"
                    >
                      <p className="srlabel_header">To</p>
                      <input
                        type="text"
                        className="hide-txtbox"
                        onchange="ChangeCabin();"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="cityinput"
                        onchange="ChangeCabin();"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul2')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />
                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"></p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex search_colm">
                    <input
                      name=""
                      value="Search"
                      type="button"
                      className="srchBtnmultcty"
                    />
                  </div>
                  <div className="fss_flex search_colmv2">
                    <a href="javascript:void(0);" className="addctybtn ad">
                      +Add City
                    </a>
                  </div>
                  <div className="fss_flex search_colmv3">
                    <a
                      href="#"
                      className="crossicon"
                      style={{ display: "none" }}
                    >
                      <i className="multicross"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clr"></div>
              <div style={{ display: "none" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti3', 'FromSector-mul3_show');"
                    >
                      <p className="srlabel_header">From</p>

                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="hide-txtbox input_city mul-ti ac_input"
                        placeholder="Type Departure City"
                        style={{ display: "none" }}
                      />
                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Type Departure City"
                        readonly=""
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti3', 'ToSector-mul3_show', '');"
                    >
                      <p className="srlabel_header">To</p>
                      <input
                        type="text"
                        className="hide-txtbox input_city mul-ti ac_input"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                      />
                      <span className="airptname tellipsis"></span>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul3')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />

                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"> </p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex search_colm">
                    <input
                      name=""
                      value="Search"
                      type="button"
                      className="srchBtnmultcty"
                    />
                  </div>
                  <div className="fss_flex search_colmv2">
                    <a href="javascript:void(0);" className="addctybtn ad">
                      +Add City
                    </a>
                  </div>

                  <div className="fss_flex search_colmv3">
                    <a href="#" className="crossicon">
                      <i className="multicross"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clr"></div>
              <div style={{ display: "none" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti4', 'FromSector-mul4_show');"
                    >
                      <p className="srlabel_header">From</p>

                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        onchange="ChangeCabin();"
                        className="hide-txtbox"
                        placeholder="Type Departure City"
                        style={{ display: "none" }}
                      />
                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        onchange="ChangeCabin();"
                        className="cityinput"
                        placeholder="Type Departure City"
                        readonly=""
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti4', 'ToSector-mul4_show', '');"
                    >
                      <p className="srlabel_header">To</p>

                      <input
                        type="text"
                        className="hide-txtbox"
                        placeholder="Type Destination City"
                        onkeydown="    TocontrolTabClickTo(event)"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="cityinput"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                        readonly=""
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul4')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />
                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"> </p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex search_colm">
                    <input
                      name=""
                      value="Search"
                      type="button"
                      className="srchBtnmultcty"
                    />
                  </div>
                  <div className="fss_flex search_colmv2">
                    <a href="javascript:void(0);" className="addctybtn ad">
                      +Add City
                    </a>
                  </div>
                  <div className="fss_flex search_colmv3">
                    <a href="#" className="crossicon">
                      <i className="multicross"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clr"></div>
              <div style={{ display: "none" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti5', 'FromSector-mul5_show', '');"
                    >
                      <p className="srlabel_header">From</p>

                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="hide-txtbox input_city mul-ti ac_input"
                        placeholder="Type Departure City"
                        autocomplete="off"
                        style={{ display: "none" }}
                      />
                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti5', 'ToSector-mul5_show', '');"
                    >
                      <p className="srlabel_header">To</p>

                      <input
                        type="text"
                        className="hide-txtbox"
                        onclick="MulticityClearText('ToMulti5', this.id);"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="cityinput"
                        onclick="MulticityClearText('ToMulti5', this.id,'');"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul5')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />
                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"> </p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex search_colm">
                    <input
                      name=""
                      value="Search"
                      type="button"
                      className="srchBtnmultcty"
                    />
                  </div>
                  <div className="fss_flex search_colmv2">
                    <a href="javascript:void(0);" className="addctybtn ad">
                      +Add City
                    </a>
                  </div>
                  <div className="fss_flex search_colmv3">
                    <a href="#" className="crossicon">
                      <i className="multicross"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clr"></div>
              <div style={{ display: "none" }}>
                <div className="mulblock">
                  <div className="fss_flex depcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('FromMulti6', 'FromSector-mul6_show', '');"
                    >
                      <p className="srlabel_header">From</p>

                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="hide-txtbox input_city mul-ti ac_input"
                        placeholder="Type Departure City"
                        onclick="MulticityClearText('FromMulti6', this.id);"
                        style={{ display: "none" }}
                      />
                      <input
                        onkeydown="TocontrolTabClickFrom(event)"
                        type="text"
                        className="autoFlll cityinput"
                        placeholder="Type Departure City"
                        onclick="MulticityClearText('FromMulti6', this.id,'');"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex arrcity_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="MulticityClearText('ToMulti6', 'ToSector-mul6_show', '');"
                    >
                      <p className="srlabel_header">To</p>

                      <input
                        type="text"
                        className="hide-txtbox"
                        onchange="    ChangeCabin();"
                        placeholder="Type Destination City"
                        onkeydown="    TocontrolTabClickTo(event)"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        className="cityinput"
                        onchange="ChangeCabin();"
                        placeholder="Type Destination City"
                        onkeydown="TocontrolTabClickTo(event)"
                      />
                      <p className="airptname tellipsis"></p>
                    </div>

                    <div className="fromsectr" style={{ display: "none" }}>
                      <div className="searcityCol">
                        <i className="searcIcn"></i>
                        <input
                          type="text"
                          className="srctinput autoFlll"
                          placeholder="From"
                        />
                      </div>
                      <div className="ovscroll" style={{ display: "none" }}>
                        <div className="topCityhd">Top Cities</div>

                        <ul className="ausuggest">
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                          <li>
                            <div className="mflexcol">
                              <img
                                src="/assets/images/planeicon.svg"
                                className="mgr10"
                              />
                              <div>
                                <p>
                                  <span className="flsctrhead">Delhi</span>
                                  <span className="fliatacd">DEL</span>
                                </p>
                                <p className="autosrpt">
                                  Indira Gandhi International Airport
                                </p>
                              </div>
                              <div className="flcountry">India</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fss_flex depdate_colm sechver">
                    <div
                      className="innerspcr"
                      onclick="getTextboxName('ddateMul6')"
                    >
                      <p className="srlabel_header">DEPARTURE DATE</p>
                      <input
                        name=""
                        type="text"
                        className="input_cld"
                        placeholder="Choose Date"
                        style={{
                          opacity: "0 !important",
                          position: "absolute",
                        }}
                      />
                      <p>
                        <span className="ftn25 mgr5"></span>
                        <span className="ftn13"></span>
                        <img
                          className="cl_icon"
                          src="/assets/images/calender_icon.svg"
                        />
                      </p>
                      <p className="airptname"> </p>
                    </div>
                    <div
                      className="dvcalendarmul"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="fss_flex search_colm">
                    <input
                      name=""
                      value="Search"
                      type="button"
                      className="srchBtnmultcty"
                    />
                  </div>
                  <div className="fss_flex search_colmv2">
                    <a href="javascript:void(0);" className="addctybtn ad">
                      +Add City
                    </a>
                  </div>
                  <div className="fss_flex search_colmv3">
                    <a href="#" className="crossicon">
                      <i className="multicross"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
          <nav className="defenceColm">
            <ul>
              <li style={{ display: "none" }}>
                <label className="container">
                  Multicity Route
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label className="container_df">
                  Defence Forces
                  <input id="chkArmy" type="checkbox" value="" />
                  <span className="checkmark_df"></span>
                </label>
              </li>
              <li>
                <label className="container_df">
                  Students
                  <input id="chkStudent" type="checkbox" value="EMTSTUDENT" />
                  <span className="checkmark_df"></span>
                </label>
              </li>
              <li>
                <label className="container_df">
                  Senior Citizens
                  <input
                    id="chkSeniorCitizen"
                    type="checkbox"
                    value="EMTSENIOR"
                  />
                  <span className="checkmark_df"></span>
                </label>
              </li>
              <li>
                <label className="container_df">
                  Doctors &amp; Nurses
                  <input id="chkDoctors" type="checkbox" value="EMTDOCTOR" />
                  <span className="checkmark_df"></span>
                </label>
              </li>
            </ul>
          </nav>
          <a
            href="https://www.easemytrip.com/web-checkin.html"
            className="webchksc"
          >
            <img
              src="/assets/images/web-checkin-icon-v1.svg"
              className="webchkimg"
            />
            Web Check-In
          </a>
          <div className="clr"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
