import React from "react";

function ChooseDate() {
  return (
    <React.Fragment>
      <div className="mdfydBg">
        <div className="mdfy_cntr">
          <div className="ng-scope">
            <div className="w95">
              <div>
                <div className="w100a">
                  <div className="fl-lftCol">
                    <div className="mdf_way">
                      <ul>
                        <li>
                          <label className="cont-rdo">
                            {" "}
                            One Way
                            <input
                              id="Trip"
                              className=""
                              type="radio"
                              checked="checked"
                            />
                            <span className="ckmark-rdo"></span>{" "}
                          </label>
                        </li>
                        <li>
                          <label className="cont-rdo">
                            {" "}
                            Round Trip
                            <input id="RTrip" className="" type="radio" />
                            <span className="ckmark-rdo"></span>{" "}
                          </label>
                        </li>
                        <li>
                          <label className="cont-rdo">
                            {" "}
                            Multicity
                            <input id="MTrip" className="" type="radio" />
                            <span className="ckmark-rdo"></span>{" "}
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div className="clr"></div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="From"
                        onClick="ClearTextFromMul(this.id, 'fromautoFill');"
                      />
                      <input
                        onblur="checkDOM()"
                        type="text"
                        className="inptBx"
                        placeholder="From"
                        autocomplete="off"
                      />
                      <span className="spnair" style={{ display: "none" }}>
                        Indira Gandhi International Airport
                      </span>
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="fromautoFill"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      {" "}
                      <a href="#">
                        <i className="swapnIcn"></i>
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inp-b2"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        onblur="checkDOM()"
                        type="text"
                        className="inptBx"
                        placeholder="To"
                        autocomplete="off"
                      />
                      <span className="spnair" style={{ display: "none" }}>
                        Chhatrapati Shivaji International Airport
                      </span>
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="toautoFill"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                  <div className="fl-ritCol">
                    <div className="fl-col-3">
                      <span className="lblTtl"> Departure Date</span>
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty"
                        ng-model="AirReq.deptDT"
                        placeholder="Choose Date"
                      />
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div
                      className="fl-col-3 m_rel op"
                      style={{ display: "block" }}
                    >
                      <span className="lblTtl"> Return Date</span>
                      <div className="clsimg">
                        <img src="/assets/images/x-close-icon2.png" />{" "}
                      </div>
                      <div>
                        <input
                          type="text"
                          className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty"
                          ng-model="AirReq.arrDT"
                          placeholder="Choose Date"
                        />
                      </div>
                    </div>
                    <div className="fl-col-4">
                      <span className="lblTtl"> Travellers</span>
                      <div className="flTrv inp-b5">
                        {" "}
                        <span className="ng-binding">1</span>
                        <span> Travellers</span>
                        <i className="mdfDarw"></i>{" "}
                      </div>
                    </div>
                    <div className="fl-col-55 m_rel">
                      <span className="lblTtl">className</span>
                      <select
                        name=""
                        className="inpDrpdwn"
                        ng-model="AirReq.Cabin"
                        onChange="SetCabinCookie()"
                      >
                        <option className="blck5" value="0" selected="selected">
                          {" "}
                          Economy
                        </option>
                        <option className="blck5" value="4">
                          {" "}
                          Prem. Economy
                        </option>
                        <option className="blck5" value="2">
                          {" "}
                          Business
                        </option>
                        <option className="blck5" value="1">
                          First
                        </option>
                      </select>
                      <i className="mdfDarw2"></i>
                    </div>
                    <div className="fl-col-6" style={{ display: "none" }}>
                      <button type="button" id="" className="srchFlbtn">
                        Modify
                      </button>
                      <div className="clr"></div>
                    </div>
                  </div>

                  <div className="fl-col-5">
                    <button type="button" className="srchFlbtn">
                      {" "}
                      Search
                    </button>
                    <button
                      type="button"
                      className="srchFlbtn"
                      style={{ display: "none" }}
                    >
                      Search
                    </button>
                    <div className="clr"></div>
                  </div>
                  <div className="clr"></div>
                </div>
                <div style={{ display: "none" }}>
                  <div
                    className="w100a one-w-mod3"
                    id="sector-sec1"
                    style={{ display: "none" }}
                  >
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="From"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="FromMulti1"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      &nbsp;{" "}
                      <a style={{ display: "none" }} href="#">
                        &nbsp;
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="To"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="ToMulti1"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                      />
                    </div>

                    <div className="corss-m" style={{ display: "none" }}>
                      <div className="cross _crsHS"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div
                    className="w100a one-w-mod3"
                    style={{ display: "none" }}
                    id="sector-sec2"
                  >
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="FromMulti2"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      &nbsp;{" "}
                      <a style={{ display: "none" }} href="#">
                        &nbsp;
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Destination City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="ToMulti2"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                      />
                    </div>
                    <div className="corss-m">
                      <div className="cross _crsHS"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div
                    className="w100a one-w-mod3"
                    style={{ display: "none" }}
                    id="sector-sec3"
                  >
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="FromMulti3"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      &nbsp;
                      <a style={{ display: "none" }} href="#">
                        &nbsp;
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Destination City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="ToMulti3"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                      />
                    </div>
                    <div className="corss-m">
                      <div className="cross _crsHS"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div
                    className="w100a one-w-mod3"
                    style={{ display: "none" }}
                    id="sector-sec4"
                  >
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="FromMulti4"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      &nbsp;{" "}
                      <a style={{ display: "none" }} href="#">
                        &nbsp;
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Destination City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="ToMulti4"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                      />
                    </div>
                    <div className="corss-m">
                      <div className="cross _crsHS"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div
                    className="w100a one-w-mod3"
                    style={{ display: "none" }}
                    id="sector-sec5"
                  >
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="FromMulti5"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      &nbsp;{" "}
                      <a style={{ display: "none" }} href="#">
                        &nbsp;
                      </a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Destination City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        id="ToMulti5"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty hasDatepicker"
                        placeholder="Choose Date"
                      />
                    </div>
                    <div className="corss-m">
                      <div className="cross _crsHS"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div className="w100a one-w-mod3" style={{ display: "none" }}>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Departure City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Departure City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-2">
                      {" "}
                      &nbsp;<a href="#">&nbsp;</a>{" "}
                    </div>
                    <div className="fl-col-1">
                      <input
                        type="text"
                        className="hideInputElement inptBx"
                        placeholder="Type Destination City"
                        autocomplete="false"
                      />
                      <input
                        type="text"
                        className="inptBx"
                        placeholder="Type Destination City"
                        autocomplete="off"
                      />
                      <span
                        aria-live="polite"
                        className="ui-helper-hidden-accessible"
                      ></span>
                      <div
                        className="drop modify-new-scr"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div className="fl-col-3">
                      <input
                        type="text"
                        className="inptBx2 ng-pristine ng-untouched ng-valid ng-empty"
                        placeholder="Choose Date"
                      />
                    </div>
                    <div className="corss-m">
                      <div className="cross"></div>
                    </div>
                    <div className="clr"></div>
                  </div>

                  <div className="add">
                    <div style={{ display: "none" }} className="ad">
                      Add another flight (up to 6)
                    </div>
                  </div>
                </div>

                <div>
                  <span className="dblseat" style={{ display: "none" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="649"
                      height="460"
                      viewBox="0 0 649 460"
                    >
                      <g data-name="Group 1">
                        <g data-name="seat (1)">
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M182,236v44H330V236a26.029,26.029,0,0,1,26-26h4V66a34.047,34.047,0,0,0-28-33.459V156a26.029,26.029,0,0,1-26,26H206a26.03,26.03,0,0,1-26-26V32.541A34.047,34.047,0,0,0,152,66V210h4a26.03,26.03,0,0,1,26,26Z"
                          ></path>
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M206,170H306a14.015,14.015,0,0,0,14-14V32H192V156a14.015,14.015,0,0,0,14,14Zm78.915-34.652A7.652,7.652,0,1,1,277.263,143a7.652,7.652,0,0,1,7.652-7.652Zm-28.915,0A7.652,7.652,0,1,1,248.348,143,7.652,7.652,0,0,1,256,135.348Zm-28.916,0A7.652,7.652,0,1,1,219.432,143,7.652,7.652,0,0,1,227.084,135.348Z"
                          ></path>
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M182,292H330v28H182Z"
                          ></path>
                          <path
                            id="Path_4"
                            data-name="Path 4"
                            d="M126,440H386a14.015,14.015,0,0,0,14-14V236a14.015,14.015,0,0,0-14-14H356a14.015,14.015,0,0,0-14,14v90a6,6,0,0,1-6,6H176a6,6,0,0,1-6-6V236a14.015,14.015,0,0,0-14-14H126a14.015,14.015,0,0,0-14,14V426a14.015,14.015,0,0,0,14,14Zm90-40.62h80a6,6,0,0,1,0,12H216a6,6,0,1,1,0-12Z"
                          ></path>
                          <path
                            id="Path_5"
                            data-name="Path 5"
                            d="M182,452v28H126a6,6,0,0,0,0,12H386a6,6,0,0,0,0-12H330V452Z"
                          ></path>
                        </g>
                        <g data-name="seat (1)">
                          <path
                            id="Path_1-2"
                            data-name="Path 1"
                            d="M182,236v44H330V236a26.029,26.029,0,0,1,26-26h4V66a34.047,34.047,0,0,0-28-33.459V156a26.029,26.029,0,0,1-26,26H206a26.03,26.03,0,0,1-26-26V32.541A34.047,34.047,0,0,0,152,66V210h4a26.03,26.03,0,0,1,26,26Z"
                          ></path>
                          <path
                            id="Path_2-2"
                            data-name="Path 2"
                            d="M206,170H306a14.015,14.015,0,0,0,14-14V32H192V156a14.015,14.015,0,0,0,14,14Zm78.915-34.652A7.652,7.652,0,1,1,277.263,143a7.652,7.652,0,0,1,7.652-7.652Zm-28.915,0A7.652,7.652,0,1,1,248.348,143,7.652,7.652,0,0,1,256,135.348Zm-28.916,0A7.652,7.652,0,1,1,219.432,143,7.652,7.652,0,0,1,227.084,135.348Z"
                          ></path>
                          <path
                            id="Path_3-2"
                            data-name="Path 3"
                            d="M182,292H330v28H182Z"
                          ></path>
                          <path
                            id="Path_4-2"
                            data-name="Path 4"
                            d="M126,440H386a14.015,14.015,0,0,0,14-14V236a14.015,14.015,0,0,0-14-14H356a14.015,14.015,0,0,0-14,14v90a6,6,0,0,1-6,6H176a6,6,0,0,1-6-6V236a14.015,14.015,0,0,0-14-14H126a14.015,14.015,0,0,0-14,14V426a14.015,14.015,0,0,0,14,14Zm90-40.62h80a6,6,0,0,1,0,12H216a6,6,0,1,1,0-12Z"
                          ></path>
                          <path
                            id="Path_5-2"
                            data-name="Path 5"
                            d="M182,452v28H126a6,6,0,0,0,0,12H386a6,6,0,0,0,0-12H330V452Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    Double Seat
                  </span>
                  <label className="container_ckbx">
                    Defence Forces
                    <input type="checkbox" id="chkArmy" />
                    <span className="checkmark_ckbx"></span>
                  </label>
                  <label className="container_ckbx">
                    Students
                    <input
                      type="checkbox"
                      onClick="CheckFareType(this)"
                      value=""
                    />
                    <span className="checkmark_ckbx"></span>
                  </label>
                  <label className="container_ckbx">
                    Senior Citizens
                    <input
                      type="checkbox"
                      onClick="CheckFareType(this)"
                      value=""
                    />
                    <span className="checkmark_ckbx"></span>
                  </label>
                  <label className="container_ckbx">
                    Doctors Nurses
                    <input id="chkDoctors" type="checkbox" value="" />
                    <span className="checkmark_ckbx"></span>{" "}
                  </label>
                  <label className="container_ckbx" style={{ display: "none" }}>
                    {" "}
                    Train Waitlisted
                    <input id="chkTrainWaitListed" type="checkbox" value="" />
                    <span className="checkmark_ckbx"></span>{" "}
                  </label>
                  <label className="container_ckbx" style={{ display: "none" }}>
                    {" "}
                    Vaccinated Fares
                    <input id="chkVaccinated" type="checkbox" value="" />
                    <span className="checkmark_ckbx"></span>{" "}
                  </label>
                </div>

                <div className="pos-bx" style={{ display: "none" }}>
                  <div className="pos-bx-ad">
                    <div className="pos-bx-ad-l"> Adult</div>
                    <div className="pos-bx-ad-r">
                      <select
                        name=""
                        className="pos-bx-inp ng-pristine ng-untouched ng-valid ng-not-empty"
                        onChange="CalMoSecTrv('adt')"
                      >
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                      </select>
                    </div>
                  </div>
                  <div className="pos-bx-ch">
                    <div className="pos-bx-ch-l"> Child</div>
                    <div className="pos-bx-ch-r">
                      <select
                        name=""
                        className="pos-bx-inp2 ng-pristine ng-untouched ng-valid ng-not-empty"
                        onChange="CalMoSecTrv('chd')"
                      >
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                      </select>
                    </div>
                  </div>
                  <div className="pos-bx-inf">
                    <div className="pos-bx-inf-l"> Infant</div>
                    <div className="pos-bx-inf-r">
                      <select
                        name=""
                        className="pos-bx-inp3 ng-pristine ng-untouched ng-valid ng-not-empty"
                        onChange="CalMoSecTrv('inf')"
                      >
                        <option value="0">00</option>
                        <option value="1">01</option>
                      </select>
                    </div>
                  </div>
                  <div className="clr"></div>
                  <div className="" style={{ display: "none" }}>
                    <label className="">Airline</label>
                    <select
                      name=""
                      className="form-control arr-n ng-pristine ng-untouched ng-valid ng-not-empty"
                      ng-init="AirReq.airline='Any'"
                    >
                      <option value="Any">Any</option>
                      <option value="10">Air Asia</option>
                      <option value="6">Air Costa</option>
                      <option value="13">Air pegasus</option>
                      <option value="12">Fly Dubai</option>
                      <option value="5">GoAir </option>
                      <option value="0">Indigo</option>
                      <option value="1">SpiceJet </option>
                      <option value="2,7,3">GDS</option>
                    </select>
                  </div>
                  <div className="dn-btn">
                    <input
                      name=""
                      type="button"
                      value="Done"
                      className="dn-btn-inp"
                    />
                  </div>
                  <div className="cros">
                    <img src="/assets/images/clos.png" />
                  </div>
                </div>
                <div className="clr"></div>
              </div>
            </div>
            <div className="clr"></div>
            <div className="cal-tw" style={{ display: "none" }}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChooseDate;
