import React, { useState } from "react";
import PaymentHead from "../common/PaymentHead";
import PaymentLeft from "../common/PaymentLeft";
import "./Payment.scss";

function Payment() {
  let [disabled, setDisabled] = useState(true);
  let [check, setCheck] = useState(false);

  let [selectedPrice, setSelectedPrice] = useState({});
  let [inputData, setInputData] = React.useState({
    toUPIInput: "",
  });
  const [customerDetails, setCustomerDetails] = React.useState({
    toUPIInput: "",
  });
  const [inputValidation, setInputValidation] = React.useState({
    toUPIError: "",
  });
  function showPrice(price) {
    let selected = document.getElementById("select_the_pricing");
    let pricing = document.getElementById("pricing_options");
    let top_heading_msg = document.getElementById("top_heading");
    let divider_msg = document.getElementById("divHeader");
    top_heading_msg.style.display = "none";
    selected.style.display = "block";
    divider_msg.style.display = "flex";
    pricing.style.display = "none";
    setSelectedPrice(price);
  }
  function goback() {
    let selected = document.getElementById("select_the_pricing");
    let pricing = document.getElementById("pricing_options");
    let top_heading_msg = document.getElementById("top_heading");
    let divider_msg = document.getElementById("divHeader");
    top_heading_msg.style.display = "flex";
    selected.style.display = "none";
    pricing.style.display = "block";
    divider_msg.style.display = "none";
    setCheck(false);
    setSelectedPrice(0);
  }
  function hideandshow() {
    let selected = document.getElementById("select_the_pricing");
    let selectedImage = document.getElementById("image_pricing");
    let main_heading_msg = document.getElementById("main_heading");
    let divider_msg = document.getElementById("divHeader");
    main_heading_msg.style.display = "none";
    selected.style.display = "none";
    selectedImage.style.display = "block";
    divider_msg.style.display = "none";
    let done_ref = document.getElementById("done_btn");
    done_ref.style.display = "block";
  }
  const handleContactDetails = (e) => {
    let { name, value } = e.target;

    setCustomerDetails({ ...customerDetails, toUPIInput: value });
    delete inputData["to_account"];
    let toUPIRegex = /^[\w.-]+@[\w.-]+$/;

    if (value.match(toUPIRegex)) {
      setInputData({ ...inputData, [name]: value });
      setInputValidation({ ...inputValidation, toUPIError: "" });
      setDisabled(false);
    } else {
      setInputData({ ...inputData, [name]: "" });
      setDisabled(true);
    }
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;
    if (name === "toUPIInput") {
      let toUPIRegex = /^[\w.-]+@[\w.-]+$/;
      if (!value.match(toUPIRegex)) {
        setDisabled(true);
        setInputData({ ...inputData, [name]: "" });
        setInputValidation({
          ...inputValidation,
          toUPIError: "Invalid format",
        });
      }
    }
  };
  let pricing = [
    {
      price: "5,000",
      days: "15 days",
      date: "pay by 16 Nov",
      interest: "Interest 0.00%",
    },
    {
      price: "5,360",
      days: "30 days",
      date: "pay by 4 Dec",
      interest: "Interest 3.00%",
    },
    {
      price: "8,300",
      days: "60 days",
      date: "pay by 5 Jan",
      interest: "Interest 5.00%",
    },
    {
      price: "11,400",
      days: "90 days",
      date: "pay by 5 Feb",
      interest: "Interest 7.00%",
    },
  ];
  return (
    <React.Fragment>
      <PaymentHead />
      <div className="main_payment_gateway">
        <div className="left_side_panel">
          <PaymentLeft />
        </div>
        <div className="payment_main_emt_option">
          <div className="top_heading_msg" id="top_heading">
            Congratulations! You’re eligible.
          </div>
          <div className="main_heading_msg" id="main_heading">
            <span className="emt_txt_main">EMT Money</span>
            <div className="emt_amount_main">
              <span className="approved">Approved</span>₹5,000
            </div>
          </div>
          <div className="divHolder" id="divHeader" style={{ display: "none" }}>
            <img
              src="/assets/images/Back.svg"
              alt=""
              onClick={() => goback()}
            />{" "}
            <div className="divider"></div>
          </div>

          <div className="pricing_options_container" id="pricing_options">
            {pricing.map((price) => {
              return (
                <div className="pricing_option">
                  <div className="right_side_option">
                    <input
                      type="radio"
                      name=""
                      id=""
                      checked={check}
                      onChange={() => showPrice(price)}
                    />
                    <div className="label_txt">
                      <div className="main_txt_label">
                        <span className="main_days_info">{price.days}</span>
                        <span className="paylater_date">{price.date}</span>
                      </div>
                      <div className="sub_txt_label">
                        <div className="sub_date_info">{price.interest}</div>
                      </div>
                    </div>
                  </div>
                  <div className="left_side_option">
                    <div className="payback_pricing_for">
                      <span className="payback_txt">Payback Price</span>
                      <br />
                      <img
                        src="/assets/images/rupee.png"
                        width={12}
                        height={18}
                        alt=""
                        style={{ marginBotton: "3px" }}
                      />{" "}
                      <span className="payback_amount">{price.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="select_the_pricing"
            style={{ display: "none" }}
            id="select_the_pricing"
          >
            <div className="top_box_payback">
              <div className="days_chosen">
                <div className="label_txt">
                  <input
                    type="checkbox"
                    name="issue-wallet-condition-input"
                    checked
                  />
                  <span className="checkmark"></span>
                  <div className="main_txt_label">
                    <span className="main_days_info">{selectedPrice.days}</span>
                    <span className="paylater_date">{selectedPrice.date}</span>
                  </div>
                  <div className="sub_txt_label">
                    <div className="sub_date_info">
                      {selectedPrice.interest}
                    </div>
                  </div>
                </div>
              </div>
              <div className="amount_chosen">
                <div className="payback_pricing_for">
                  <span className="payback_txt"> Payback Price</span>
                  <br />
                  <span className="payback_amount">
                    <img
                      src="/assets/images/rupee.png"
                      width={12}
                      height={15}
                      alt=""
                    />
                    {selectedPrice.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="upi_id_field">
              <div className="show_text_upi">
                The amount will be automatically deducted on the above selected
                date.
              </div>
              <div className="show_upi_input_field">
                <span>UPI ID</span>
                <input
                  className="upi_field"
                  onBlur={handleBlur}
                  type="text"
                  name="toUPIInput"
                  id=""
                  placeholder="Enter your UPI ID linked with your registered mobile number"
                  onChange={handleContactDetails}
                />
              </div>
            </div>
            <div className="accept_the_offer">
              <div className="due_now_box">
                <div className="wallet-conditions-container">
                  <label className="conditions-container">
                    I accept
                    <p
                      className="conditions-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </p>
                    <input
                      type="checkbox"
                      name="issue-wallet-condition-input"
                      checked
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="amount_due_now">
                  <div className="txt_due">Due now</div>
                  <div className="due_amount">
                    <img
                      src="/assets/images/rupee.png"
                      width={12}
                      height={15}
                      alt=""
                    />{" "}
                    0
                  </div>
                </div>
              </div>
              <div className="accept_offer_button">
                <div className="empty_due"></div>
                <button disabled={disabled} onClick={() => hideandshow()}>
                  Accept Offer
                </button>
              </div>
            </div>
          </div>
          <div
            className="image_success"
            id="image_pricing"
            style={{ display: "none" }}
          >
            <img
              src="/assets/images/success.png"
              alt=""
              width={"100%"}
              height={300}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Payment;
