import React from 'react'

function SeatHeader() {
  return (
   <React.Fragment>
    <div className="addn_slct">
                               <div className="slct_tap active" id="divAnciSeat">
                                    <img src="/assets/images/seatIcon.png"/>
                                    <span>Seat</span>
                                </div>
                                <div className="slct_tap" id="divancMealDtl">
                                    <img src="/assets/images/MealIcon.png"/>
                                    <span>Meal</span>
                                </div>
                               <div className="slct_tap" id="divancBaggDtl">
                                    <img src="/assets/images/BaggageIcon.png"/>
                                    <span>Baggage</span>
                                </div>
                               <a className="skipotp" ng-click="SkipAddonAncillary()">Skip to Payment</a>
								
                            </div> 
   </React.Fragment>
  )
}

export default SeatHeader