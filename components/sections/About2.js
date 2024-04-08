
import Link from "next/link"
export default function About2() {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="p-5" style={{ textAlign: "center" }}>
                        <h1 style={{fontWeight:"600"}}>Ready to Experience WhatsApp Flows?</h1>

                        <div className="thm_btn mt-4">
                            <Link href="#" className="theme-btn three" style={{ textDecoration: "none" }}>
                                Get Started
                            </Link>

                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_one" style={{ background: "#f3f7fd", border: "none", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)" }}>
                                <div className="icon_content icon_centers">
                                    <div className="icon">
                                        <img src="/assets/images/office.png" alt="about" />
                                    </div>
                                    <div className="txt_content">
                                        <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                                            Our Office
                                        </h6>
                                        <p>8-R-12 & 13, Second Floor, Kiran Tower, RC Vyas Colony, Bhilwara, Rajasthan</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="icon_box_all style_one" style={{height: "150px" }}>
                                <div className="icon_content icon_centers"  style={{ float: "left" }}>
                                    <div className="icon">
                                        <img src="/assets/images/contact.png" alt="about" />
                                    </div>
                                    <div className="txt_content">
                                        <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>For Consultation</h6>
                                        <p style={{color:"#0046a0"}}>bcc@smartysoft.in</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
                            <div className="icon_box_all style_one" style={{height: "140px" }}>
                                <div className="icon_content icon_centers" style={{ float: "left" }}>
                                    <div className="icon">
                                        <img src="/assets/images/whatsapp-icon.png" alt="about" />
                                    </div>
                                    <div className="txt_content">
                                        <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                                            For WhatsApp
                                        </h6>
                                        <p style={{color:"#0046a0"}}>+91 8875627151</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="icon_box_all style_one" style={{ background: "#f3f7fd", border: "none", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)", height: "140px" }}>
                                <div className="icon_content icon_centers" style={{ float: "left" }}>
                                    <div className="icon">
                                        <img src="/assets/images/work_hour.png" alt="about" />
                                    </div>
                                    <div className="txt_content">
                                        <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>Work Hours</h6>
                                        <p style={{color:"#0046a0"}}>Everyday 09 am - 07 pm</p>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_20" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="mr_top_10" />
                    {/*===============spacing==============*/}
                    <hr />
                    {/*===============spacing==============*/}
                    <div className="mr_top_10" />
                    {/*===============spacing==============*/}

                    <div className="col-12 mt-5 mb-4" style={{textAlign:"center"}}>
                            <div className="social_media_v_one">
                                <ul>
                                    <li style={{fontWeight:"bold",fontSize:"20px"}}>
                                        Social Media :
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/profile.php?id=61556302107316">
                                            <span className="fa fa-facebook" />
                                            <small>facebook</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCFCGkwoWzmlMBu0kJN5Cq7g">
                                            <span className="fa fa-youtube" />
                                            <small>Youtube</small>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/aiwa.bot?igsh=M240ZDB2OW40Nndq">
                                            <span className="fa fa-instagram" />
                                            <small>instagram</small>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </section>

        </>
    )
}
