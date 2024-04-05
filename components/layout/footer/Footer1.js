
import Link from "next/link"
export default function Footer1({ }) {
    return (
        <>
            <div className="footer_area footer_sticky_enable_foo footer_eight" id="footer_contents">
                {/*===============spacing==============*/}
                <div className="pd_top_50" />
                {/*===============spacing==============*/}
                <div className="footer_widgets_wrap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer_widgets about_company dark_color">
                                    <div className="about_company_inner">
                                        <div className="footer_logo">
                                            <Link href="/" target="_blank" style={{textDecoration:"none"}}>
                                                <img src="/assets/images/bot_logo.png" className="img-fluid" alt="logo" style={{ width: 70 }} />&nbsp; &nbsp; &nbsp; &nbsp;
                                                </Link>
                                                <Link href="https://smartysoft.in" target="_blank" style={{textDecoration:"none"}}>
                                                <img src="/assets/images/smarty_logo.png" className="img-fluid" alt="logo" style={{ width: 150 }} />
                                            </Link>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_40" />
                                        {/*===============spacing==============*/}
                                        <div className="content_box">
                                            <p style={{ fontSize: 20 }}>
                                                Helping Businesses in 💯% Digitalization and Automation.
                                            </p>
                                            {/* <div className="consulting">
                                                <div className="image">
                                                    <img src="assets/images/authour-image.png" alt="need help" />
                                                </div>
                                                <div className="help_con">
                                                    <h6>Need Help?</h6>
                                                    <h2><Link href="#" target="_blank" >Free Consultation</Link></h2>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Smarty Software Pvt. Ltd.</h2>
                                    </div>
                                </div>
                                <div className="list_item_box style_one">
                                    <p>
                                        8-R-12 & 13, Second Floor,<br/>
                                        Kiran Tower, RC Vyas Colony,<br/>
                                        Bhilwara, Rajasthan
                                    </p>
                                    <div className="bottom">
                                                <div className="con_content">
                                                    <p style={{fontWeight:"bold",marginTop:"-10px"}}> Phone : &nbsp;
                                                    <Link href="/tel:+9806071234" style={{textDecoration:"none"}}>+917849945640</Link>
                                                    </p>
                                                    <p style={{fontWeight:"bold",marginTop:"-15px"}}>Mail Us :&nbsp;
                                                    <Link href="mailto:sales@smartysoft.in" style={{textDecoration:"none"}}>sales@smartysoft.in</Link>
                                                    </p>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="list_item_box style_one">
                                <ul className="menu">
                                                {/* <li><Link href="/pricing-packages">Pricing</Link></li> */}
                                                <li><Link href="/Our_Team" style={{textDecoration:"none"}}>About Us</Link></li>
                                                <li><Link href="/contact_us" style={{textDecoration:"none"}}>Contact Us</Link></li>
                                                <li><Link href="/Shipping_Policy" style={{textDecoration:"none"}}>Shipping Policy</Link></li>

                                            </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                                {/*===============spacing==============*/}
                                <div className="pd_top_10" />
                                {/*===============spacing==============*/}
                                <div className="footer_widgets wid_tit style_one">
                                    <div className="fo_wid_title">
                                        <h2 className="color_dark">Links</h2>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <div className="list_item_box style_one">
                                <ul className="menu">
                                                <li><Link href="/privacypolicy" style={{textDecoration:"none"}}>Privacy Policy</Link></li>
                                                <li><Link href="/terms&condition" style={{textDecoration:"none"}}>Terms & Conditions</Link></li>
                                                <li><Link href="/cancellation" style={{textDecoration:"none"}}>Cancellation/Refund Policies</Link></li>

                                            </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{color:"lightgray"}}/>
                <div className="footer-copyright bg_light">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-10 col-md-12">
                                <div className="footer_copy_content" style={{color:"#4a4e56",fontSize:13,textAlign:"center"}}>
                                   Copyright © {new Date().getFullYear()} <Link style={{textDecoration:"none"}} href="https://smartysoft.in">Smarty Software Pvt. Ltd.</Link>. All Rights
                                    Reserved.
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="footer_copy_content_right text-md-end">
                                    <div className="social_media_v_one">
                                        <ul>
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
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_10" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
