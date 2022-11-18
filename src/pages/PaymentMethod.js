import React from "react";
import Calendar from "../components/Calendar";
import ChooseDate from "../components/ChooseDate";
import MainHeader from "../components/MainHeader";
import SideBar from "../components/SideBar";
import "./PaymentMethod.css";
import FlightDetails from "../components/FlightDetails";
import Heading from "./Heading";

function PaymentMethod() {
  let flightsInfo = [
    {
      departureTime: "19:05",
      arrivalTime: "00:40",
      price: "4,560",
      travel: "5h :35m",
    },
    {
      departureTime: "18:00",
      arrivalTime: "01:40",
      price: "5,560",
      travel: "5h :35m",
    },
    {
      departureTime: "20:05",
      arrivalTime: "02:40",
      price: "4,340",
      travel: "5h :35m",
    },
    {
      departureTime: "23:05",
      arrivalTime: "04:40",
      price: "4,440",
      travel: "6h :35m",
    },
    {
      departureTime: "23:35",
      arrivalTime: "03:40",
      price: "5,860",
      travel: "5h :25m",
    },
    {
      departureTime: "19:05",
      arrivalTime: "00:40",
      price: "5,960",
      travel: "5h :35m",
    },
    {
      departureTime: "17:05",
      arrivalTime: "23:40",
      price: "6,660",
      travel: "5h :00m",
    },
    {
      departureTime: "22:05",
      arrivalTime: "02:40",
      price: "6,560",
      travel: "6h :35m",
    },
    {
      departureTime: "20:05",
      arrivalTime: "01:40",
      price: "5,560",
      travel: "5h :45m",
    },
    {
      departureTime: "19:05",
      arrivalTime: "00:40",
      price: "4,760",
      travel: "5h :35m",
    },
  ];
  return (
    <React.Fragment>
      <MainHeader />
      <ChooseDate />
      <div className="wrapper">
        <div className="wrap">
          <SideBar />
        </div>

        <div className="contianer_content">
          <Calendar />
          <Heading />
          {flightsInfo.map((flight, index) => (
            <FlightDetails flights={flight} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PaymentMethod;
