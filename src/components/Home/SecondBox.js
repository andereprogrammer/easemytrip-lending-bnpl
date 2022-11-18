import React from 'react'

function SecondBox() {
  return (
   <React.Fragment>
    <div className="to_s">
<div style={{display:'none',background: '#ffe5e5',fontSize: 14,padding: 11,borderRadius: 5,color: '#994141',borderLeft: "3px solid #ef7878"}}><strong>Indigo Update:</strong> IndiGo flights are temporarily unavailable due to some technical upgradations at their host's (Navitaire) end. It will automatically be displayed on EaseMyTrip once their technical upgrations are completed.</div>
<div className="clr"></div>
    <div className="alertadv">
        <div className="advHd" style={{color: "#856404"}}><strong>Important Info:</strong> To cancel/claim refund or reschedule/modify your <br/>booking. <a href="https://mybookings.easemytrip.com/" style={{color: "#856404"}}> click here</a></div>
    </div>
    <div className="alertadv2">
        <div className="advHd" style={{color: "#31708f"}}>
            <strong>Travel Guide:</strong> <a href="https://www.easemytrip.com/covid19-help.html" style={{color: "#31708f"}}>Get latest information on airlines &amp; airports guidelines, <br/>state-wise quarantine rules, travel checklists, web-checkin etc.</a>
            <i className="arwright" style={{top: 25}}></i>
        </div>
    </div>
    <div className="clr"></div>

    <div className="alertadv-v2">
        <div className="advHd" style={{color: '#155724',fontSize:13}}>
            <strong>FREE Full Refund due to Medical Reasons:</strong> EaseMyTrip brings an extraordinary offer in these tough times!<br/>
            Get full refund for domestic ticket in case you cancel it due to medical sickness. Best Part - There are ZERO extra charges for this service.  
        </div>
    </div>


</div> 
   </React.Fragment>
  )
}

export default SecondBox