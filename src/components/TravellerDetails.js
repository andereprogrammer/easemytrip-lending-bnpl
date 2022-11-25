import React from 'react'

function TravellerDetails() {
  return (
    <React.Fragment>
          <div className="bor">
      <div className="fd-h1">
        <span>Travellers Details</span>
        <div className="tv_right">
          <div className="bg_si_d">
            <img
              src="/assets/images/g-id-icon.png"
              width="21"
              height="16"
              className="spcer"
            />Name should be same as in Government ID proof
          </div>
        </div>
      </div>
     
      <div>
        <div className="clr"></div>
        <div className="tr-cen-trv">
          <div className="fd-ll" style={{width: "100%"}}>
            <div className="adttl">Adult</div>
            <div className="errorPax" style={{display: "none", color: "red"}}>
              Please select all Adults
            </div>
            <div>
              <div className="shd_pnl">
                <div className="ng-scope">
                  <div className="clr"></div>
                  <div
                    className="alert error_case"
                    style={{
                      width: "96%",
                      marginBottom: 12,
                      overflow: "hidden",
                      display: "none",
                    }}
                  >
                    <span className="pull-left">
                      <img
                        src="/assets/images/error-icon.png"
                        height="20px"
                        width="20px"
                      />
                    </span>
                    <span
                      style={{marginLeft: 10}}
                      ng-bind="errorMessage"
                      className=""
                    ></span>
                    <button
                      className="close pull-right"
                      type="button"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                  </div>
                  <div className="">
                    <div className="str_1" style={{
                        display: "flex",
                        marginLeft: 20,
                        alignItems: "center"
                    }}>
                      <label className="ctr_cbox">
                        <span>Mr Akhil Halgeri</span>
                        <input
                          type="checkbox"
                          checked="true"
                          onclick="CloseTravCheckPass('Adult0')"
                         
                        />
                        <span className="cmark_cbox"></span>
                      </label>
                      <div className="arw_rit">
                        <div
                          className="dwn-ar-trv"
                          onclick="CloseTraveler('Adult0')"
                          style={{display: "block"}}
                        ></div>
                      </div>
                    </div>
                    <div className="trvr_sec" >
                      <div className="str_2 mrel">
                        <label className="label_ti">Title</label>
                        <select
                          name="TitleAdult"
                          className="select_trvl"
                          idno="0"
                          
                          onchange="CheckSameTraveler(this.id);CookieSave('Adult');SetNameOnLabel('Adult0');"
                        >
                          <option value="">Title</option>
                          <option value="Mr" selected>MR</option>
                          <option value="Ms">MS</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                      </div>
                      <div className="str_3 mgl15">
                        <label className="label_ti"
                          >(First Name &amp; (Middle name, if any)</label
                        >
                        <input
                          type="text"
                          autocomplete="none"
                          paxtype="Adult"
                          dynid="0"
                          className="input_trvl"
                          placeholder="Enter First Name"
                          required=""
                        />
                      </div>
                      <div className="str_3 mgl15">
                        <label className="label_ti">Last Name</label>
                        <input
                          type="text"
                          autocomplete="none"
                          paxtype="Adult"
                          dynid="0"
                          className="input_trvl"
                          placeholder="Enter Last Name"
                          required=""
                        />
                      </div>
                      <div className="str_3 mgl15" style={{display: "none"}}>
                        <label className="label_ti">Contact Number</label>
                        <input
                          type="text"
                          name=""
                          id="txtCPhoneAdult0"
                          className="input_trvl"
                          placeholder="Enter Contact Number"
                        />
                      </div>

                      <div className="armysec ng-hide">
                        <div className="str_3_v1 ng-hide">
                          <label className="label_ti">Defence Service Id</label>
                          <input
                            type="text"
                            name=""
                            id="divServiceIDAdult0"
                            className="input_trvl"
                            placeholder="Enter defence service Id"
                            required=""
                          />
                        </div>
                      </div>

                      <div style={{display: "none"}}>
                        <fieldset className="outbrdr">
                          <legend className="inhead">COVID19 Details:</legend>
                          <div className="covidsec">
                            <div className="str_4_v1">
                              <label className="label_ti">Covid Status</label>
                              <select className="select_trvl">
                                <option value="">-- Covid Status --</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                              </select>
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Covid Test Status</label>
                              <select className="select_trvl">
                                <option value="">
                                  -- Covid Test Status --
                                </option>
                                <option value="">Positive</option>
                                <option value="">Negative</option>
                              </select>
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Profession</label>
                              <input
                                type="text"
                                name=""
                                autocomplete="none"
                                className="input_trvl"
                                placeholder="Enter your Profession"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Travel Reason</label>
                              <input
                                type="text"
                                name=""
                                id="txtTravelReasonAdult0"
                                className="input_trvl"
                                placeholder="Enter Travel Reason"
                              />
                            </div>
                          </div>
                          <div className="covidsec">
                            <div className="str_4_v1">
                              <label className="label_ti">Provision State</label>
                              <input
                                type="text"
                                name=""
                                id="txtProvisionStateAdult0"
                                className="input_trvl"
                                placeholder="Enter Provision State"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Pin Code</label>
                              <input
                                type="text"
                                name=""
                                id="txtPinCodeAdult0"
                                className="input_trvl"
                                placeholder="Enter Pin Code"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Address</label>
                              <input
                                type="text"
                                name=""
                                id="txtAddressAdult0"
                                className="input_trvl"
                                placeholder="Enter your Address"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Nationality</label>
                              <input
                                type="text"
                                name=""
                                id="txtNationalityAdult0"
                                className="input_trvl"
                                placeholder="Enter your Nationality"
                              />
                            </div>
                          </div>
                          <div className="covidsec2">
                            <div className="str_4_v1">
                              <label className="label_ti">Country Code</label>
                              <input
                                type="text"
                                name=""
                                id="txtCountryCodeAdult0"
                                className="input_trvl"
                                placeholder="Enter Country Code"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Email Id</label>
                              <input
                                type="text"
                                name=""
                                id="txtEmailIdAdult0"
                                className="input_trvl"
                                placeholder="Enter your Email Id"
                              />
                            </div>
                            <div className="str_4_v1 mgl15">
                              <label className="label_ti">Mobile No</label>
                              <input
                                type="text"
                                name=""
                                id="txtMobileNoAdult0"
                                className="input_trvl"
                                placeholder="Enter your Mobile No"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <div className="fl-m-m">
                        <div className="fl-m"></div>

                        <div className="fl-mr">
                          <div
                            className="fl-mm"
                            onClick="SlideUPFFlyer('divFlyerAdult0','divFlyerMinusAdult0','divFlyerPlusAdult0')"
                          >
                            (-) Frequent flyer number and Meal preference
                            (optional)
                          </div>
                          <div
                            className="fl-ma"
                            onClick="SlideDownFFlyer('divFlyerAdult0','divFlyerMinusAdult0','divFlyerPlusAdult0')"
                          >
                            (+) Frequent flyer number and Meal preference
                            (optional)
                          </div>
                        </div>
                        <div className="fl-d">
                          <div className="fl-d1">
                            <label className="lbl">Frequent flyer no.</label>
                            <input
                              type="text"
                              value=""
                              name=""
                              placeholder="Frequent Flyer Number"
                              className="in"
                            />
                          </div>
                          <div className="fl-d2">
                            <label className="lbl">Airline</label>
                            <input
                              type="text"
                              value=""
                              placeholder="Enter Airline Name"
                              className="in"
                              name=""
                            />
                          </div>
                          <div className="fl-d3">
                            <label className="lbl">Meal Preference </label>
                            <select className="sel">
                              <option value="Select Meal Preference">
                                Select Meal Preference
                              </option>
                              <option value="Vegetarian Hindu Meal">
                                Vegetarian Hindu Meal
                              </option>
                              <option value="Baby Meal">Baby Meal</option>
                              <option value="Hindu ( Non Vegetarian) Meal">
                                Hindu ( Non Vegetarian) Meal
                              </option>
                              <option value="Kosher Meal">Kosher Meal</option>
                              <option value="Moslem Meal">Moslem Meal</option>
                              <option value="Vegetarian Jain Meal">
                                Vegetarian Jain Meal
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clr"></div>
                  <div className="">
                    <div className="greyBgbtm">
                      <div style={{float: "left",display:"flex"}}>
                        <div className="addTxtcol">Add-ons (Optional)</div>
                        <div className="addTxtcol">
                          Pre-booked meals, Seats and Baggage are 30% cheaper
                          than on-board price.
                        </div>
                      </div>
                    </div>
                    <div className="mealSectn" style={{display: "none"}}>
                      <ul>
                        <li>
                          <a className="bdr_btm bdr_active mAdult0"> DEL-BLR </a
                          ><a className="bdr_btm mAdult0"> BLR-BOM </a>
                        </li>
                      </ul>
                      <div className="" style={{display: "block"}}>
                        <div className="ml-hh">
                          <div className="ml-h1-nw">
                            <i className="mealIcn"></i>
                            <div className="mealTxtdv">
                              <div className="tem">
                                <span
                                  >Add tempting meals to your trip.
                                  (Optional)</span
                                >
                              </div>
                              <div className="chp-n2">
                                Get the meals 30% cheaper than on-board prices
                                by booking in advance.
                              </div>
                            </div>
                          </div>
                          <div className="mel-added">
                            <span className="">0 Meal Added</span>
                          </div>
                        </div>
                        <div className="mealmenu">
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_SDAI.png"
                                src="/assets/images/I5_SDAI.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional SHONDESH TIRAMISU</span
                                ><span className="mealPriceRs">300</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_0"
                              value="SDAI"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_RPCB.png"
                                src="/assets/images/I5_RPCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional HERB ROAST VEGETABLE
                                  SANDWICH</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_1"
                              value="RPCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_JMCB.png"
                                src="/assets/images/I5_JMCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Chicken Junglee Sandwich</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_2"
                              value="JMCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/m-non-veg.png"
                                src="/assets/images/m-non-veg.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Vegan Tofu with Rice Pilaf</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_3"
                              value="FTCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_XCCB.png"
                                src="/assets/images/I5_XCCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional SPINACH AND FETA STUFFED CHICKEN
                                  BREAST</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_4"
                              value="XCCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_SICB.png"
                                src="/assets/images/I5_SICB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional South Indian Delight</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_5"
                              value="SICB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_RICB.png"
                                src="/assets/images/I5_RICB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional VEGETABLE MANCHURIAN FRIED
                                  RICE</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_6"
                              value="RICB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_PTCB.png"
                                src="/assets/images/I5_PTCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional PALAK PANEER AND RICE WITH
                                  TANDOORI ALOO</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_7"
                              value="PTCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_MOCB.png"
                                src="/assets/images/I5_MOCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional MATER PANEER WITH TIKONA
                                  PARATHA</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_8"
                              value="MOCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_KACM.png"
                                src="/assets/images/I5_KACM.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Chef Kirti Mastercurry with Raw
                                  Mango and Coconut Rice</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_9"
                              value="KACB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_GNCB.png"
                                src="/assets/images/I5_GNCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Galouti Kebab Ulte Tawa Ka
                                  Paratha</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_10"
                              value="GNCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_GACB.png"
                                src="/assets/images/I5_GACB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Grilled Basa Fish with Sauteed
                                  Vegetables</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_11"
                              value="GACB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_COCB.png"
                                src="/assets/images/I5_COCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional CHEDDAR AND CHIVES OMELETTE</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_12"
                              value="COCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_CJCB.png"
                                src="/assets/images/I5_CJCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional AWADHI CHICKEN TIKKA BIRYANI</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_13"
                              value="CJCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_AMCB.png"
                                src="/assets/images/I5_AMCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional MATAR PANEER BHURJI WITH ALOO
                                  PARATHA</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_DEL-BLR-857_14"
                              value="AMCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="" style={{display: "none"}}>
                        <div className="ml-hh">
                          <div className="ml-h1-nw">
                            <i className="mealIcn"></i>
                            <div className="mealTxtdv">
                              <div className="tem">
                                <span
                                  >Add tempting meals to your trip.
                                  (Optional)</span
                                >
                              </div>
                              <div className="chp-n2">
                                Get the meals 30% cheaper than on-board prices
                                by booking in advance.
                              </div>
                            </div>
                          </div>
                          <div className="mel-added">
                            <span className="">0 Meal Added</span>
                          </div>
                        </div>
                        <div className="mealmenu">
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_SDAI.png"
                                src="/assets/images/I5_SDAI.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional SHONDESH TIRAMISU</span
                                ><span className="mealPriceRs">300</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_0"
                              value="SDAI"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_RPCB.png"
                                src="/assets/images/I5_RPCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional HERB ROAST VEGETABLE
                                  SANDWICH</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_1"
                              value="RPCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_JMCB.png"
                                src="/assets/images/I5_JMCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Chicken Junglee Sandwich</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_2"
                              value="JMCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/m-non-veg.png"
                                src="/assets/images/m-non-veg.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Vegan Tofu with Rice Pilaf</span
                                ><span className="mealPriceRs">400</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_3"
                              value="FTCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_XCCB.png"
                                src="/assets/images/I5_XCCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional SPINACH AND FETA STUFFED CHICKEN
                                  BREAST</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_4"
                              value="XCCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_SICB.png"
                                src="/assets/images/I5_SICB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional South Indian Delight</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_5"
                              value="SICB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_RICB.png"
                                src="/assets/images/I5_RICB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional VEGETABLE MANCHURIAN FRIED
                                  RICE</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_6"
                              value="RICB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_PTCB.png"
                                src="/assets/images/I5_PTCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional PALAK PANEER AND RICE WITH
                                  TANDOORI ALOO</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_7"
                              value="PTCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_MOCB.png"
                                src="/assets/images/I5_MOCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional MATER PANEER WITH TIKONA
                                  PARATHA</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_8"
                              value="MOCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_KACM.png"
                                src="/assets/images/I5_KACM.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Chef Kirti Mastercurry with Raw
                                  Mango and Coconut Rice</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_9"
                              value="KACB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_GNCB.png"
                                src="/assets/images/I5_GNCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Galouti Kebab Ulte Tawa Ka
                                  Paratha</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_10"
                              value="GNCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_GACB.png"
                                src="/assets/images/I5_GACB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional Grilled Basa Fish with Sauteed
                                  Vegetables</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_11"
                              value="GACB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_COCB.png"
                                src="/assets/images/I5_COCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional CHEDDAR AND CHIVES OMELETTE</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_12"
                              value="COCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_CJCB.png"
                                src="/assets/images/I5_CJCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional AWADHI CHICKEN TIKKA BIRYANI</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_13"
                              value="CJCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                data-imgurl="https://flight.easemytrip.com/Content/img/traveller/I5_AMCB.png"
                                src="/assets/images/I5_AMCB.png"
                                width="107"
                                className=""
                              />
                              <div className="foodName">
                                <span className="foodText"
                                  >Additional MATAR PANEER BHURJI WITH ALOO
                                  PARATHA</span
                                ><span className="mealPriceRs">500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rm_Adult0_BLR-BOM-334_14"
                              value="AMCB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mealSectn" style={{display: "none"}}>
                      <ul>
                        <li>
                          <a className="bdr_btm bdr_active bAdult0"> DEL-BOM </a>
                        </li>
                      </ul>
                      <div className="" style={{display: "block"}}>
                        <div className="ml-hh">
                          <div className="ml-h1-n">
                            <i className="baggageIcn"></i>
                            <div className="mealTxtdv">
                              <div className="tem-n mgt11">
                                <span
                                  >Take Extra Baggage to your Trip &amp; save
                                  30% on Baggage (Optional)</span
                                >
                              </div>
                            </div>
                          </div>
                          <div className="mel-added">
                            <span className="">0 Baggage Added</span>
                          </div>
                        </div>
                        <div className="mealmenu">
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                src="/assets/images/baggage-icon.png"
                                width="107"
                              />
                              <div className="foodName">
                                <span className="foodText">Additional 3kg</span
                                ><span className="mealPriceRs">1350</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rb_Adult0_DEL-BOM-857_0"
                              value="PBA3"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                src="/assets/images/baggage-icon.png"
                                width="107"
                              />
                              <div className="foodName">
                                <span className="foodText">Additional 5kg</span
                                ><span className="mealPriceRs">2250</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rb_Adult0_DEL-BOM-857_1"
                              value="PBAB"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                src="/assets/images/baggage-icon.png"
                                width="107"
                              />
                              <div className="foodName">
                                <span className="foodText">Additional 10kg</span
                                ><span className="mealPriceRs">4500</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rb_Adult0_DEL-BOM-857_2"
                              value="PBAC"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                src="/assets/images/baggage-icon.png"
                                width="107"
                              />
                              <div className="foodName">
                                <span className="foodText">Additional 15kg</span
                                ><span className="mealPriceRs">6750</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rb_Adult0_DEL-BOM-857_3"
                              value="PBAD"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                          <label className="addons_radio">
                            <div className="mealItem">
                              <img
                                src="/assets/images/baggage-icon.png"
                                width="107"
                              />
                              <div className="foodName">
                                <span className="foodText">Additional 25kg</span
                                ><span className="mealPriceRs">11250</span>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              className=""
                              id="rb_Adult0_DEL-BOM-857_4"
                              value="PBAF"
                            />
                            <span className="addons_checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="add_adlt">+ Add Adult</a>
            <div className="clr"></div>

            <div className="clr"></div>
          </div>
        </div>
      </div>
     
      <div className="ps-de-r" style={{display: "none"}}>
        <div className="adl">Travellers List</div>
        <div className="ps-d_SaveTrv style-2">
          <div className="adlt">
            <div className="tv-d">
              <div className="adu-tra1"><img src="/assets/images/adult-saved.png" /></div>
              <div className="adu-tra2">Adult Travellers</div>
              <div className="clr"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </React.Fragment>
  )
}

export default TravellerDetails