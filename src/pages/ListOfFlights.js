import React, { useEffect,useContext } from "react";
import EmailInput from "../components/EmailInput";
import EmtMoneyCard from "../components/EmtMoneyCard";
import FlightsCard from "../components/FlightsCard";
import ImportantInfo from "../components/ImportantInfo";
import Insurance from "../components/Insurance";
import MainHeader from "../components/MainHeader";
import Medical from "../components/Medical";
import Payment from "../components/Payment";
import Seat from "../components/Seat";
import SideBarFlight from "../components/SideBarFlight";
import TravellerDetails from "../components/TravellerDetails";
import "./ListOfFlights.scss";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Footer from "../components/Footer";
import MobileNum from "../components/MobileNum";
import Final from '../components/Final';
import { useHistory } from 'react-router-dom';
import EMTContext, { EMTProvider } from '../common/EMTContext';




function ListOfFlights() {
  let showSeat = false;
  let history = useHistory()
  let showPayment = false;
  let count = 0;
  useEffect(() => {
   
    ReactDOM.render(<EMTProvider><EmtMoneyCard /></EMTProvider>, document.getElementById("emt_holder"));
    ReactDOM.render(<EmailInput />, document.getElementById("email_holder"));
    ReactDOM.render(<Medical />, document.getElementById("medical_holder"));
    ReactDOM.render(<ImportantInfo />, document.getElementById("impinfo_holder"));
    ReactDOM.render(<Insurance />, document.getElementById("insurance_holder"));

  }, []);
  function hideAndShow() {
    count++;
    if (count == 1) {
      ReactDOM.unmountComponentAtNode(document.getElementById("email_holder"));
      ReactDOM.unmountComponentAtNode(document.getElementById("impinfo_holder"));
      ReactDOM.unmountComponentAtNode(document.getElementById("medical_holder"));
      ReactDOM.render(
        <EMTProvider><TravellerDetails /></EMTProvider>,
        document.getElementById("traveller_holder")
      );
      ReactDOM.render(<MobileNum />, document.getElementById("mobile_holder"));
      showSeat = true;
    }
    if (count == 2) {
      let seatholder = document.getElementById("seat_holder_m")
      seatholder.style.display = 'block'
      ReactDOM.render(<Seat />, document.getElementById("seat_holder_m"));
      ReactDOM.render(<Final />, document.getElementById("final_holder_m"));
      ReactDOM.unmountComponentAtNode(
        document.getElementById("traveller_holder")
      );
      ReactDOM.unmountComponentAtNode(document.getElementById("mobile_holder"));
      ReactDOM.unmountComponentAtNode(document.getElementById("insurance_holder"));


      showPayment = true;
    }
    if (count == 3) {
      let btn_ref= document.getElementById('booking_btn')
      
      btn_ref.style.display = 'none'


      ReactDOM.unmountComponentAtNode(document.getElementById("seat_holder_m"));
      ReactDOM.render(<Payment />, document.getElementById("payment_holder"));
    }
  }
  return (
  
        <React.Fragment>
      <MainHeader />
      <div className="main_wrapper">
        <div className="main_content">
          <FlightsCard />
          <div id="emt_holder"></div>
          <div id="final_holder_m"></div>
          <div style={{ height: 30 }}></div>
          <div id="seat_holder_m" style={{marginTop:114,display:'none'}}></div>
          <div id="medical_holder"></div>
          <div id="impinfo_holder"></div>
          <div id="insurance_holder"></div>
          <div style={{ height: 30 }}></div>
          <div id="email_holder"></div>
          <div style={{ height: 30 }}></div>
          <div id="traveller_holder"></div>
          <div id="mobile_holder"></div>
          <div id="payment_holder"></div>
          <div className="booking_btn" id="booking_btn">
            <button onClick={() => hideAndShow()}>Continue Booking </button>
          </div>
          <div className="done_btn" id="done_btn" style={{display:'none'}}>
            <button onClick={() => window.open('/home','_self')}>Done</button>
          </div>
        </div>
        <div className="side_content">
          <SideBarFlight />
        </div>
      </div>
      <Footer />
    </React.Fragment>
   
  
  );
}

export default ListOfFlights;
