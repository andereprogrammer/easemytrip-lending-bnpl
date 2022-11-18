import React from "react";

function Calendar() {
  return (
    <React.Fragment>
      <div
        className="row mar-bt no-margn top-bn"
        ng-init="fareCalenderMatrix_LG();"
      >
        <div
          style={{ display: "none" }}
          className="col-md-2 back-gd1 pad-m hov2"
          ng-mouseup="hideShow()"
        >
          <a className=""> All Airlines</a>{" "}
        </div>
        <div className="col-md-11">
          <div
            style={{
              position: "relative",
              margin: "0, auto",
              top: 0,
              left: 0,
              width: 866,
              height: 51.96,
              overflow: "hidden",
              visibility: "visible",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 866,
                height: 51.96,
                transformOrigin: "0px 0px",
                transform: "scale(1)",
              }}
            >
              <div
                className=""
                style={{
                  position: "relative",
                  margin: "0px auto",
                  top: 0,
                  left: 0,
                  width: 866,
                  height: 51.96,
                  overflow: "visible",
                  visibility: "visible",
                  display: "block",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 1000,
                    height: 60,
                    transformOrigin: "0px 0px",
                    transform: "scale(0.866)",
                  }}
                >
                  <div
                    className=""
                    style={{
                      position: "relative",
                      margin: "0px auto",
                      top: 0,
                      left: 0,
                      width: 1000,
                      height: 60,
                      overflow: "visible",
                      visibility: "visible",
                      display: "block",
                    }}
                  >
                    <div
                      className="remove"
                      style={{
                        cursor: "default",
                        position: "absolute",
                        top: 0,
                        left: 50,
                        width: 850,
                        height: 60,
                        overflow: "hidden",
                        zIndex: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          pointerEvents: "none",
                        }}
                      ></div>
                    </div>
                    <div
                      className="remove"
                      style={{
                        cursor: "default",
                        position: "absolute",
                        top: 0,
                        left: 50,
                        width: 850,
                        height: 60,
                        overflow: "hidden",
                        zIndex: 0,
                      }}
                    >
                      <div
                        style={{
                          top: 0,
                          left: 0,
                          width: 120,
                          height: 60,
                          position: "absolute",
                          backgroundColor: "rgb(0, 0, 0)",
                          opacity: 0,
                        }}
                      ></div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 17</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5306
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(123px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 18</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5871
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(246px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 19</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5057
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(369px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 20</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4773
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht chk_index"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(492px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn fnt17 mgtp3">
                            <div className="ai-d ng-binding fnt17">Nov 21</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span className="fnt17 ng-binding ng-scope">
                                4718
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(615px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 22</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4102
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(738px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 23</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 24</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4102
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 25</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4480
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 26</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5057
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 27</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5057
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn rd-clr">
                            <div className="ai-d ng-binding">Nov 28</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                3989
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 29</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Nov 30</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 01</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 02</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4394
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 03</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4394
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 04</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4239
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 05</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4293
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 06</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4350
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 07</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                3989
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 08</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4538
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 09</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4538
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 10</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                5499
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 11</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4853
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 12</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 13</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4070
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 14</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4394
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 15</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4394
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                      <div
                        className="min-ht"
                        style={{
                          width: 120,
                          top: 0,
                          left: 0,
                          height: 60,
                          position: "absolute",
                          overflow: "hidden",
                          transform: "translate3d(861px, 0px, 0px)",
                        }}
                        data-ng-repeat="(id,fc) in fareCalres"
                      >
                        <div className="hov1">
                          <div className="airli-txtn">
                            <div className="ai-d ng-binding">Dec 16</div>
                            <div className="ai-rs">
                              <i className="rd_Rs"></i>

                              <span
                                ng-if="fc.TtlFre>0 &amp;&amp; fc.IsCurrent==false"
                                className=""
                              >
                                4604
                              </span>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                        </div>
                        <div
                          style={{
                            top: "0px",
                            left: "0px",
                            width: "120px",
                            height: "60px",
                            zIndex: 1000,
                            display: "none",
                          }}
                        ></div>
                      </div>
                    </div>
                    <span
                      className="jssora03l"
                      style={{
                        top: "2.5px",
                        left: "8px",
                        width: "55px",
                        height: "55px",
                        display: "none",
                      }}
                    ></span>
                    <span
                      className="jssora03r"
                      style={{ top: 2.5, right: 22, width: 55, height: 55 }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <div onClick="FillcalendarFillDates();" className="inp-b4n"></div>
        </div>

        <div className="cal-tw1" style={{ display: "none" }}></div>
      </div>
    </React.Fragment>
  );
}

export default Calendar;
