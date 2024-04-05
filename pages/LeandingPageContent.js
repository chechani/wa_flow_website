import Link from "next/link"
export default function LeandingPageContent() {
    return (
        <>
            <section className="about-section bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_10" />
                {/*===============spacing==============*/}
                {/* <div className="container"> */}
                <div className="price_plan_box style_one">
                    <div className="inner_box">
                        <div className="inner_box">
                            {/* <div className="before_title">Leading</div> */}
                            <h2 className="title" style={{ fontWeight: "bold",textAlign:"center" }}>
                                <img src="/assets/images/profit-growth.png" className="img-fluid svg_image" alt="icon png" style={{ height: "55px" }} />
                               &nbsp; Impact of BizMagnets on Business Growth</h2>

                               <div style={{marginTop:"20px"}}>
                               <div class="row">
                                <div className="col-6">
                                <h4 className="title">
                                <img src="/assets/images/stars.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} />
                               &nbsp; Impact of BizMagnets on Business Growth</h4>
                                </div>
                                <div className="col-6">
                                <h4 className="title">
                                <img src="/assets/images/demand.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} />
                               &nbsp; Increased Operational Efficiency</h4>
                                </div>
                               </div>
                               <div class="row mt-3">
                                <div className="col-6">
                                <h4 className="title">
                                <img src="/assets/images/sales.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} />
                               &nbsp; Higher Conversion Rates and Sales</h4>
                                </div>
                                <div className="col-6">
                                <h4 className="title">
                                <img src="/assets/images/advantage.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} />
                               &nbsp; Gain Competitive Advantage</h4>
                                </div>
                               </div>
                               </div>
                           
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/*===============spacing==============*/}
                <div className="pd_bottom_10" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
