import Link from "next/link"

export default function Footer8({ }) {
    return (
        <>
            <div className="footer_area" id="footer_contents">
                <div className="footer_widgets_wrap bg_dark_2">
                    {/*===============spacing==============*/}
                    <div className="pd_top_80" />
                    {/*===============spacing==============*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets about_company light_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="/" >
                                                <img src="/assets/images/bot_logo.png" className="img-fluid" alt="logo" style={{ width: 70 }} /><strong style={{ fontSize: 25, color: "#aaafb8" }}><strong style={{ color: "#e31e24" }}>AI</strong><strong style={{ color: "#45a53a" }}>WA</strong><strong>Bot</strong></strong>
                                            </Link>
                                            {/*===============spacing==============*/}
                                            <div className="pd_bottom_30" />
                                            {/*===============spacing==============*/}
                                        </div>
                                        <div className="content_box">
                                            <p style={{ fontSize: 20 }}>
                                                Helping Businesses in 💯% Digitalization and Automation.
                                            </p>
                                            {/* <div className="consulting">
                                                <div className="image">
                                                    <img src="/assets/images/authour-image.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Need Help?</h6>
                                                    <h2>
                                                        <Link href="#"> Free Consultation</Link>
                                                    </h2>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets get_in_touch_foo light_color">
                                    <div className="get_intouch_inrfo">
                                        <div className="foo_cont_inner">
                                            <div className="top">
                                                <h6> Location</h6>
                                                <p>Smarty Software Pvt. Ltd.</p>
                                                <p>
                                                    8-R-12, 13, Second Floor,
                                                    Kiran Tower, RC Vyas Colony,
                                                    Bhilwara, Rajasthan
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <h6> Contact</h6>
                                                <div className="con_content">
                                                    <h5> Phone :</h5>
                                                    <Link href="/tel:+9806071234">+91 8875627151</Link>
                                                </div>
                                                <div className="con_content">
                                                    <h5> Mail Us :</h5>
                                                    <Link href="/bcc@smartysoft.in">bcc@smartysoft.in</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2>Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_25" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                                    <div className="navigation_foo_box">
                                        <div className="navigation_foo_inner">
                                            <ul className="menu">
                                                {/* <li><Link href="/pricing-packages">Pricing</Link></li> */}
                                                <li><Link href="/contact_us">Contact Us</Link></li>
                                                <li><Link href="/about-us">About Us</Link></li>
                                                <li><Link href="/Shipping_Policy">Shipping Policy</Link></li>
                                                <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                                                <li><Link href="/Products_Services">Products/services</Link></li>
                                                <li><Link href="/terms&condition">Terms & Conditions</Link></li>
                                                <li><Link href="/cancellation">Cancellation/Refund Policies</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
