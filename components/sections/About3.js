export default function About3() {

    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_20" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="mt-4 mb-5" style={{ textAlign: "center" }}>
                        <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Maximize Every Opportunity with</h2>
                        <h1 style={{ fontWeight: "bold", fontSize: "50px", color: "#ffc29c" }}>Lightweight CRM</h1>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_top_20" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_six">
                                <div className="image_box" style={{marginTop:"-50px"}}>
                                    <img src="/assets/images/biz-whatsapp.png" className="img-fluid height_500px object-fit-cover" alt="about" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <div className="mt-5" style={{ backgroundColor: "#e5f1ff",borderRadius:"10px",paddingTop:"5px",paddingLeft:"10px",paddingRight:"5px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
                                    <p><img src="/assets/images/crm.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} /> &nbsp;Offers powerful AI smart sales inbox for lead management, segment lists, and send strategic messages</p>
                                    </div>
                                    <div className="mt-5" style={{ backgroundColor: "#e5f1ff",borderRadius:"10px",paddingTop:"5px",paddingLeft:"10px",paddingRight:"5px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
                                    <p><img src="/assets/images/crm.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} /> &nbsp;Prioritize leads, maintain brand voice with templates, and access analytics for decision-making</p>
                                    </div>
                                    <div className="mt-5" style={{ backgroundColor: "#e5f1ff",borderRadius:"10px",paddingTop:"5px",paddingLeft:"10px",paddingRight:"5px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
                                    <p><img src="/assets/images/crm.png" className="img-fluid svg_image" alt="icon png" style={{ height: "40px" }} /> &nbsp;Provide proactive customer support to simplify and engage</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </div>
            </section>

        </>
    )
}
