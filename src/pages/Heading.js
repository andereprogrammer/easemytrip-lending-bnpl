import React from 'react'

function Heading() {
  return (
    <React.Fragment>
        <div className="row bg-titl-n no-m mar-to-12 heading-added" style={{
             display: "flex",
             width: "100%",
             gridTemplateColumns: "10px 1.4fr 97px 2.5fr 1.3fr 1fr 1fr",
             justifyContent: "center",
             alignItems: "center"
        }}>
                                <div style={{paddingLeft:0}} className="col-md-2 col-sm-2 col-xs-4"><a className="air1" href="#" style={{color: "black"}}> Airlines <i className="pad-4"></i></a> </div>
                                <div className="col-md-2 col-sm-2 col-xs-4"><a className="" href="#" style={{color: "black"}}> Departure<i className="pad-4"></i></a> </div>
                                <div className="col-md-2 col-sm-2 pdl5"><a className="" href="#" style={{color: "black"}}> DURATION<i className="pad-4"></i></a> </div>
                                <div className="col-md-2 col-sm-2 col-xs-3" style={{marginLeft:"14px"}}><a className="" href="#" style={{color: "black"}}> ARRIVE<i className="pad-4"></i></a> </div>
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                    <a className="" href="#" ng-click="sortBy('outbound','TotalFare');" style={{color: "black"}}>Price<i className="pad-4"></i></a>
                                    
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2" style={{display:"block",paddingRight: 0,color:"black"}}>
                                    <div style={{display:"flex",color: "black"}}>
                                        <a style={{color: "black"}}> Recommended</a>
                                        <div className="form-check form-check-inline" style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: 5
                                        }}>
                                            <div className="ui-switcher"></div><input className="" type="checkbox" name="" value="" style={{display: "none"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div> 
    </React.Fragment>
  )
}

export default Heading