import React, { useState } from "react";
import "./EmtMoney.scss";
import axios from "axios";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";

function EmtMoneyCard() {
  let [loanAmount, setloanAmount] = useState(0);
  let [inputData, setInputData] = React.useState({
    email: "",
    mobileNumber: "",
    namePan: "",
  });
  const [customerDetails, setCustomerDetails] = React.useState({
    email: "",
    mobileNumber: "",
    namePan: "",
  });
  const [inputValidation, setInputValidation] = React.useState({
    emailError: "",
    mobileNumberError: "",
    lastNameError: "",
  });

  const handleDetails = (e) => {
    let { name, value } = e.target;

    if (name === "mobileNumber") {
      setCustomerDetails({ ...customerDetails, mobileNumber: value });
      let mobileNumberRegex = /^[6-9]\d{9}$/;

      if (value.match(mobileNumberRegex)) {
        setInputData({ ...inputData, [name]: value.trim() });
        setInputValidation({ ...inputValidation, mobileNumberError: "" });
      } else {
        setInputData({ ...inputData, [name]: "" });
      }
    }

    if (name === "email") {
      setCustomerDetails({ ...customerDetails, email: value });
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (value.match(emailRegex)) {
        setInputData({ ...inputData, [name]: value.trim() });
        setInputValidation({ ...inputValidation, emailError: "" });
      } else {
        setInputData({ ...inputData, [name]: "" });
      }
    }
    if (name === "namePan") {
      setCustomerDetails({ ...customerDetails, namePan: value });
      let lastNameRegex = /^[a-zA-Z ]+$/;

      if (value.match(lastNameRegex)) {
        setInputData({ ...inputData, [name]: value.trim() });
        setInputValidation({ ...inputValidation, lastNameError: "" });
      } else {
        setInputData({ ...inputData, [name]: "" });
      }
    }
  };
  const handleBlur = (e) => {
    let { name, value } = e.target;
    if (name === "namePan") {
      let lastNameRegex = /^[a-zA-Z ]+$/;

      if (!value.match(lastNameRegex)) {
        setInputData({ ...inputData, [name]: "" });
        setInputValidation({
          ...inputValidation,
          lastNameError: "Invalid format",
        });
      }
    }
    if (name === "mobileNumber") {
      let mobileNumberRegex = /^[6-9]\d{9}$/;

      if (!value.match(mobileNumberRegex)) {
        setInputData({ ...inputData, [name]: "" });
        setInputValidation({
          ...inputValidation,
          mobileNumberError: "Invalid format",
        });
      }
    }
    if (name === "email") {
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!value.match(emailRegex)) {
        setInputData({ ...inputData, [name]: "" });
        setInputValidation({
          ...inputValidation,
          emailError: "Invalid format",
        });
      }
    }
  };
  let moneyThere = document.getElementById("money_available");
  let inputField = document.getElementById("inputMoney");
  let inputFieldName = document.getElementById("inputName");
  let paylatermsg = document.getElementById("paylater");
  let flightsmsg = document.getElementById("bookflights");
  function createUser() {
    axios
      .post(
        "https://stage-paymentgateway.cashe.co.in/cashePartners/createNewUser",
        {
          emailId: "",
          mobileNumber: customerDetails.mobileNumber,
          customerNameAsPerPan: customerDetails.namePan,
          consentToTriggerPrefil: "YES",
        },
        { headers: { Authorization: `4q0wP2ima10H4oSWOUW4vA==` } }
      )
      .then((res) => {
        if (res.data.statusType === "OK") {
          inputFieldName.style.display = "none";
          showMoney();
        } else {
          inputField.style.display = "block";
        }
      });
  }
  function showMoney() {
    axios
      .get(
        `https://stage-paymentgateway.cashe.co.in/cashePartners/getCheckoutLoanDetails/${customerDetails.mobileNumber}`,
        { headers: { Authorization: `4q0wP2ima10H4oSWOUW4vA==` } }
      )
      .then((data) => {
        if (data.data.entity.loanAmount) {
          paylatermsg.innerHTML = "Congratulations!";
          flightsmsg.innerHTML = "You’re eligible for Book Now Pay Later.!";
          inputField.style.display = "none";
          moneyThere.style.display = "flex";
          setloanAmount(data.data.entity.loanAmount);
        } else {
          inputField.style.display = "none";
          inputFieldName.style.display = "block";
        }
      });

    // ReactDOM.render(<LoginModal/>,document.getElementById('loginmodal'))
  }
  return (
    <React.Fragment>
      <div className="emt_main_wrapper">
        <div className="left">
          <div className="header_text">EMT Money</div>
          <div className="buynow_text">
            <span className="paylater" id="paylater">
              Buy Now Pay Later
            </span>
            <span id="bookflights">
              Book your flight tickets today and pay back later.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="inputField" id="inputMoney">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter mobile number"
              value={customerDetails.mobileNumber}
              onChange={handleDetails}
            />
            <button onClick={() => showMoney()}>Check Eligibility</button>
          </div>
          <div
            className="inputField"
            id="inputName"
            style={{
              display: "none",
            }}
          >
            <input
              type="text"
              name="namePan"
              placeholder="Enter your name"
              value={customerDetails.namePan}
              onChange={handleDetails}
            />
            <button onClick={() => createUser()}>Continue</button>
          </div>
          <div
            className="money_available"
            id="money_available"
            style={{ display: "none" }}
          >
            <div className="big_txt_money">
              <span className="approve_text">Approved</span>{" "}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/assets/images/rupee.png"
                  width={12}
                  height={15}
                  alt=""
                />
                {loanAmount}
              </span>{" "}
            </div>
            <div className="small_txt">Select ‘EMT Money’ on Payments page</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmtMoneyCard;
