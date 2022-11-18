import React from 'react'

function Final() {
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
                            <span className="fnt">E-mail   </span>
                            
                            <span className="fnt-g" ng-model="trvLoginEmail2">gauthammahesh@gmail.com</span>
                        </div>
                        <div className="ps2n">
                            <span className="fnt">Contact No. </span>
                            <span className="fnt-g">9677706943</span>
                        </div>
                        <div className="ps3n">
                            <span className="fnt">Adult (<span className="ng-binding">1</span>) </span>
                            
                            <span className="fnt-g" ng-bind="adt.Title+' '+ adt.fName+' '+adt.LName">Mr Gautham Mahesh</span>
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