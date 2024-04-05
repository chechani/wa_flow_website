import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function EntryPayPlan() {

    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="price_plan_box style_one">
                    <div className="inner_box">
                        <div className="top">
                            <h2>Entry</h2>
                        </div>
                        <div className="mid">
                            <h4>
                                <span style={{ fontSize: 29, color: "black" }}>₹9000 </span><span style={{ color: "gray", fontSize: 25 }}> / </span>
                                <span style={{ fontSize: 18, fontWeight: "bold" }}>Yearly</span>
                            </h4>
                            <p>Includes GST 18%</p>
                            <p>No Credit Card Required</p>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li>
                                    <span>Whatsapp Account : <strong>1</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Subscribers: <strong>5000</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Messages Credit : <strong>50,000 / Month</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Bot AI Reply : <strong>500</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Sequence Campaign : <strong>10</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Team Member : <strong>5</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>WhatsApp - Webhook Workflow : <strong>10</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>WhatsApp - Ecommerce Catalog : <strong>50</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Whatsapp-Flows : <strong>5</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Chat Widget : <strong>Unlimited Website</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>WhatsApp - Shopify Integration : <strong>1</strong></span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Live Chat</span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Live Chat-Translator</span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Live Chat-Advanced</span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Bot Message Insight</span>
                                    <i className="fa fa-check" />
                                </li>

                                <li>
                                    <span>Bot Conditional Reply</span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Input Flow Compaign</span>
                                    <i className="fa fa-check" />
                                </li>
                                <li>
                                    <span>Broadcasting</span>
                                    <i className="fa fa-check" />
                                </li>

                                <li>
                                    <span>API Integration</span>
                                    <i className="fa fa-check" />
                                </li>
                            </ul>
                            <div className="get_start_button theme_btn_all">
                                <Link href="/entry_level_form"
                                 style={{ textDecoration: "none", fontSize: 13, background: "#3CB371", marginLeft: 3 }} onMouseOver={(e) => (e.target.style.background = "#2E8B57")}
                                    onMouseOut={(e) => (e.target.style.background = "#3CB371")}
                                    className="theme-btn five">Choose Plan</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="price_plan_box style_one mt-3">
                    <div className="inner_box">
                        <div className="bottom">
                            <ul>
                                <li style={{ background: "#E9FCE9" }}>
                                    <span>Assist in WhatsApp Bot/Flows Building : <strong>5</strong></span>
                                    <i className="fa fa-check" style={{color:"red"}}/>
                                    
                                </li>
                                <li style={{ background: "#F0F8FF" }}>
                                    <span >Assist in External Application Integration : <strong>1</strong></span>
                                    <i className="fa fa-check" style={{color:"red"}}/>

                                </li>
                                <li style={{ background: "#E9FCE9" }}>
                                    <span>Assist in Green Tick Certification</span>
                                    <i className="fa fa-check" style={{color:"red"}}/>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
