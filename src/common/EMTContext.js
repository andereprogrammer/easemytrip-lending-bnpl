import React, { createContext, useState } from "react";

const EMTContext = createContext();

export const EMTProvider = ({ children }) => {

  const [mobile, setMobile] = useState("900000");

  const [name, setName] = useState("");

  const [details,setAllDetails] = useState({name:"",mobile:""})

  let actualName = ''
  let actualMobile = ''


  const setNewMobile = (number) => {
    setMobile(number);
  };
  const setDetails=() =>{
    console.log(details,mobile,name)
    actualName = name
    actualMobile = mobile
  }
 

  return (
    <EMTContext.Provider
      value={{
        mobile,
        details,
        name,
        actualName,
        actualMobile,
        setNewMobile,
        setAllDetails,
        setDetails,
        setMobile,
        setName
      }}
    >
      {children}
    </EMTContext.Provider>
  );
};

export default EMTContext;
