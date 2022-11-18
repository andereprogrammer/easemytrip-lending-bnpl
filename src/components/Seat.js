import React from 'react'
import SeatHeader from '../common/SeatHeader'
import SeatInfo from '../common/SeatInfo'
import './Seat.scss'

function Seat() {
  return (
    <React.Fragment>
        <div className="seat_selection">
        <SeatHeader/>
        <div className="content">
            <SeatInfo/>
            <img  src='/assets/images/seatflight.png' width={541} height={467} alt='myimages' />
        </div>
        </div>
        
    </React.Fragment>
  )
}

export default Seat