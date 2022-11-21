import React from 'react'

function PaymentLeft() {
  return (
   <React.Fragment>
 
    <div className="pymnt-bx-lft">
           <div className="card-dtl c_pointer blk-cls" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="card"></div>
                    <span className="cardText payment-txt blu" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "center",
                        width: "100%",
                        marginRight: 47
                    }}><img src="/assets/images/emt.svg" width={20} height={20} alt="" /> EMT Money</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
			<div className="card-dtl c_pointer" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="card"></div>
                    <span className="cardText payment-txt">Credit/Debit/ATM Cards</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
            <div className="netbanking-dtl c_pointer" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="netbanking"></div>
                    <span className="payment-txt">Net Banking</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
            <div className="wallet-dtl c_pointer" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="wallet"></div>
                    <span className="payment-txt">Wallets</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
            <div className="upi-dtl c_pointer" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="upi"></div>
                    <span className="payment-txt">UPI</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
            <div className="emi-dtl c_pointer" onClick="NewPaymentTab(bkn.type)">
                <a href="#">
                    <div className="emi"></div>
                    <span className="payment-txt">EMI</span>
					<span style={{display: "none",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                </a>
            </div>
            
            <div className="bajaj-dtl" style={{display:"none"}} onClick="NewPaymentTab('bajaj')">
                    <a href="JavaScript:void(0);">
                        <div className="bajaj-im1"></div>
                        <span className="payment-txt db">Bajaj Finserv</span>
                        <span style={{display: "inline-block",fontSize: 11,fontWeight: 500,color: "#fff",lineHeight: 14,background: "#2196f3",padding: "2px 6px",borderRadius: 20}}>No Cost EMI</span>
                    </a>
            </div>
            
			
   <div className="giftcard-dtl c_pointer" id="tabgiftcard" style={{display:"block"}}>
					<a href="JavaScript:void(0);">
						<div className="giftcard giftcard-im3"></div>
						<span className="giftcardText">GiftCard</span>
					</a>
	</div>
	<div className="epay_col" style={{display:"block"}} onClick="NewPaymentTab('Paylater')">
                <a href="JavaScript:void(0);">
                    <div className="paylater-im"></div>
                    <span className="epay_text">PayLater</span>
                </a>
    </div>
	<div className="googlepay-dtl c_pointer" style={{display:"block"}} onClick="NewPaymentTab('googlepay')">
					<a href="JavaScript:void(0);">
						<div className="googlepay googlepay-im"></div>
						<span className="googlepayText">Google Pay</span>
					</a>
	</div>
				
</div>

  
   </React.Fragment>
  )
}

export default PaymentLeft