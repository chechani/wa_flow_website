import Link from "next/link"

export default function HeroSlider8() {

    return (
        <>
            <style>{`
                .ai-powered {
                    display: inline-block;
                    padding: 10px 20px;
                    margin: 0;
                    background-color: #fff;
                    color: black;
                    font-weight:bold;
                    font-size: 24px;
                    border-radius: 5px;
                    text-align: center;
                    text-transform: uppercase;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
                }
            `}</style>
            
            <section className="slider style_one slider_version_v4 nav_position_one">
                <div className="slide-item-content" style={{ marginTop: -130 }}>
                    <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/white.jpg)' }} />
                    <div className="auto-container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className="slider_content" style={{ textAlign: "center" }}>
                                <div className="container">
                                    <h2 className="ai-powered">AI Powered</h2>
                                </div>
                                <h2 className="" style={{color:"#fb6529",marginTop:"20px"}}><strong>Drive 300% Growth in Customer Engagement</strong></h2>
                                <br />
                               <h1 style={{color:"#5b5b5b"}}><strong style={{color:"#06af43"}}>WhatsApp</strong> Business Suite</h1>
                               <h3 style={{color:"#5b5b5b",fontWeight:"bold"}}>Efficient Conversations, Intelligent ChatBots, Light Weight CRM,</h3>
                               <h3 style={{color:"#5b5b5b",fontWeight:"bold"}}> Workflow Automations and Seamless Integrations All in One Platform</h3>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_20" />
                                {/*===============spacing==============*/}
                                <ul className="d_inline_block" style={{ textAlign: "center" }}>
                                    <li>
                                        <div className="">
                                            <Link href="#" style={{ textDecoration: "none", fontSize: 13,margin:"10px", background: "#fff",color:"black",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.3)" }}
                                                className="theme-btn five">Get Started</Link>

                                                 <Link href="#" style={{ textDecoration: "none", fontSize: 13,margin:"10px", background: "#317ed6" }}
                                                className="theme-btn five">Learn More</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
