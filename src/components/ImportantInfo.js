import React from 'react'

function ImportantInfo() {
  return (
   <React.Fragment>
    <div className="m-info-tips mar20" style={{display:"block"}}>
                <h2 className="">Important Information</h2>
                <div className="ng-scope">
                    <ul>
                        
                        <div className="ng-scope">
                            <div className="ng-scope">
                                
                                
                                <li className="m-info-tips_item" ng-if="b.Legs.length>1 &amp;&amp; b.Legs[1].LyOvr!='' &amp;&amp; lid==0" style={{display:"none"}}>
                                    <p className="txt-sb">
                                        You have selected flight on the sector  with 1 technical layover at
                                        <span ng-bind="b.Legs[1].org.split('|')[1]" className="">Bangalore</span>
                                        
                                        
                                    </p>
                                </li>

                            </div>
                        </div>

                        
						<div ng-if="s.bonds[0].Legs.length>1" className="">
						 <div ng-if="b.Legs.length>1" className="">
								
							</div>
						</div>
						
						
                        
                        
                        
                        
                        <div className="ng-scope">
                            <div className="ng-scope">
                                
                                
                                
                                <div className="ng-scope">
                                    
                                    
                                    
                                    
                                    
                                </div><div className="ng-scope">
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>

                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
    
                        
                        

                        
                        
                        
						
						<li className="m-info-tips_item">
                            <p className="txt-sb">All passengers entering Maharashtra have to carry a negative RT-PCR test report along with a sample taken within 72 hours post arrival. 
RT-PCR Test timeline begins from the report allocation time. Passengers travelling to Maharashtra will not be permitted to board the flights if they are not carrying a valid test report. Fully vaccinated passengers don't have to carry a negative report if they are travelling within Maharashtra. They can travel with a final COVID vaccination certificate.</p>
                        </li>

                        <li className="m-info-tips_item">
                            <p className="txt-sb">Passengers who have completed their vaccination (both the doses) can enter the state of Maharashtra after completing 15 days from receipt of the 2nd dose of vaccination. No negative RT-PCR test is required for fully vaccinated  passengers.</p>
                        </li>
				
                        
                        
                        
                    </ul>
                </div>
            </div>
   </React.Fragment>
  )
}

export default ImportantInfo