
import Countdown from "@/components/elements/Countdown";
import Link from "next/link"

export default function Offer() {
    const currentTime = new Date();
    return (
        <>
            <section className="offer-section bg_op_1" style={{ backgroundImage: 'url(/assets/images/light_color.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_90" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="offer style_one">
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="center_content">
                                    <div className="main_content">
                                        <h6 style={{background:"none", fontSize:25}}>Business, Reduce Cost</h6>
                                        <h2 style={{fontSize:45}}>
                                        Boost Sales with WhatsApp & Telegram 
                                        </h2>
                                        <h2 style={{fontSize:45, marginTop:10}}>Chatbot Marketing</h2>
                                        <br/>
                                        <h5 style={{fontSize:25}}>Effortless Catalog Integration, Seamless Selling, </h5>
                                        <h5 style={{fontSize:25, marginTop:8}}>and Exceptional Live Chat Support – Your Recipe for Success</h5>
                                       <h6 style={{background:"none",color:"#282f3b", marginTop:15}}>Redefine Outreach: Dynamic Broadcasting, <br/>Automated WooCommerce & Shopify Orders via WhatsApp. Elevate Your Impact!</h6>
                                        <div className="bottom_content">
                                            <div className="button_content">
                                                <Link href="#" className="theme-btn one">Get Started for FREE</Link>
                                                &nbsp; &nbsp;&nbsp;
                                                <Link href="#" className="theme-btn one">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 hidden-lg">
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_90" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
