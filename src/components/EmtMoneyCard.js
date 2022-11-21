import React, { useState } from "react";
import "./EmtMoney.scss";
import axios from "axios";
import  ReactDOM  from 'react-dom';
import LoginModal from "./LoginModal";

function EmtMoneyCard() {
  let [loanAmount, setloanAmount] = useState(0);
  function showMoney() {
    axios
      .get(
        "https://stage-paymentgateway.cashe.co.in/cashePartners/getCheckoutLoanDetails/9845126732",
        { headers: { Authorization: `4q0wP2ima10H4oSWOUW4vA==` } }
      )
      .then((data) => {
        console.log(data.data);
        setloanAmount(data.data.entity.loanAmount);
      });
    let moneyThere = document.getElementById("money_available");
    let inputField = document.getElementById("inputMoney");
    let paylatermsg = document.getElementById("paylater");
    let flightsmsg = document.getElementById("bookflights");
    // ReactDOM.render(<LoginModal/>,document.getElementById('loginmodal'))
    paylatermsg.innerHTML = "Congratulations!";
    flightsmsg.innerHTML = "You’re eligible for Book Now Pay Later.!";

    inputField.style.display = "none";
    moneyThere.style.display = "flex";
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
            <input type="text" name="" id="" value="9845126732" />
            <button onClick={() => showMoney()}>Check Eligibility</button>
          </div>
          <div
            className="money_available"
            id="money_available"
            style={{ display: "none" }}
          >
            <div className="big_txt_money">
              <span className="approve_text">Approved</span>{" "}
              <span style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
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
