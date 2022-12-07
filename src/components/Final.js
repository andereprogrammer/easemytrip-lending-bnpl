import React,{useEffect,useState} from 'react'

function Final() {
    let [actualMobile,setActualMobile] = useState("Enter your number");
    let [actualMobileValue,setActualMobileValue] = useState("");
    let [actualName,setActualName] = useState("Enter your name");
    let [actualNameValue,setActualNameValue] = useState("");
  
    
    useEffect(()=>{
      if(localStorage.getItem("mobile") !== null){
        setActualMobile(localStorage.getItem("mobile"))
        setActualMobileValue(localStorage.getItem("mobile"))
  
      }
      if(localStorage.getItem("name") !== null){
        setActualName(localStorage.getItem("name"))
        setActualNameValue(localStorage.getItem("name"))
      }
  
    },[])
  return (
    <React.Fragment>
        <div className="bor po-re m-bt">
                <div className="trheadbg">
                    <div className="edt1 po-ab"></div>
                    Traveller Details
                </div>
                <div className="tr-cn">
                    <div className="ps-d mar20">
                        <div className="ps1n">
                            <span className="fnt">E-mail</span>
                            
                            <span className="fnt-g" ng-model="trvLoginEmail2">{actualName}@gmail.com</span>
                        </div>
                        <div className="ps2n">
                            <span className="fnt">Contact No. </span>
                            <span className="fnt-g">{actualMobile}</span>
                        </div>
                        <div className="ps3n">
                            <span className="fnt">Adult (<span className="ng-binding">1</span>) </span>
                            
                            <span className="fnt-g" ng-bind="adt.Title+' '+ adt.fName+' '+adt.LName">Mr {actualName}</span>
                        </div>
                        <div className="ps4n">
                            <span className="fnt">Child (<span className="ng-binding">0</span>) </span>
                            
                        </div>
                        <div className="ps5n">
                            <span className="fnt">Infant (<span className="ng-binding">0</span>) </span>
                            
                        </div>
                    </div>
                </div>
            </div> 
    </React.Fragment>
  )
}

export default Final