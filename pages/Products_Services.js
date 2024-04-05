import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Products_Services() {
    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="price_plan_box style_one">
                        <div className="inner_box" style={{ textAlign: "center" }}>
                            <div className="content">
                                <h1 style={{ fontWeight: "bold" }}>Maximize WhatsApp. Minimize Hassle</h1>
                                <p style={{ fontWeight: "bold" }}>Strategic WhatsApp Business integration and onboarding services for optimized customer outreach</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_top_20" />
                {/*===============spacing==============*/}
                <div>
                    <section className="creote-service-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/bot1.png" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>Bot Development and Customization</h4>
                                            <p className="short_desc mt-3">A comprehensive platform for building and customising WhatsApp bots tailored to specific business needs. This service includes a drag-and-drop interface for bot creation, AI and NLP capabilities for natural conversations, and tools for continuous improvement based on user feedback.</p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>User-friendly bot builder interface.</li>
                                                <li>Integration of AI for natural language understanding.</li>
                                                <li>Customization options to tailor bots to specific business processes.</li>
                                                <li>Analytics and insights for optimising bot interactions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/whatsApp-marketing.png" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>WhatsApp Marketing Automation</h4>
                                            <p className="short_desc mt-3">A service designed to leverage WhatsApp for marketing purposes, enabling businesses to send personalised messages, promotional campaigns, and updates directly to their customers' WhatsApp. It includes segmentation, campaign management, and analytics features.
                                            </p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>Targeted messaging based on customer segments.</li>
                                                <li>Campaign management tools for scheduling and tracking</li>
                                                <li>Analytics dashboard to measure engagement and ROI.</li>
                                                <li>Compliance with WhatsApp's policies to ensure message deliverability.</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/third-party.jpg" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>Third-Party App Integration</h4>
                                            <p className="short_desc mt-3">This service focuses on seamlessly connecting your WhatsApp Business bot with third-party applications, such as CRM systems, marketing tools, and ERP systems like ERPNext. It ensures that data flows smoothly between WhatsApp and other business tools, automating workflows and enhancing efficiency.
                                            </p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>Integration with popular CRM systems, marketing platforms, and ERP systems.</li>
                                                <li>Custom API development for unique integration needs.</li>
                                                <li>Secure data exchange protocols to protect sensitive information.</li>
                                                <li>Workflow automation to streamline operations.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/audit.png" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>Compliance Audits</h4>
                                            <p className="short_desc mt-3">Prevents our being able too what get like best every pleasure.</p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>End-to-end API integration with your business systems</li>
                                                <li>Real-time messaging capabilities through webhooks.</li>
                                                <li>Support multimedia messaging (text, images, videos, documents).</li>
                                                <li>Scalable architecture to handle high volumes of messages</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/green_tick.png" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>WhatsApp Green Tick Certification</h4>
                                            <p className="short_desc mt-3">Achieving the green tick verification on WhatsApp signifies trust and authenticity, enhancing your brand's presence. This service assists businesses in navigating the verification process, meeting WhatsApp's green tick criteria, and maintaining compliance.</p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>Consultation on eligibility criteria for the green tick.</li>
                                                <li>Assistance in the application process for verification.</li>
                                                <li>Advice on optimising your WhatsApp profile for better chances of approval.</li>
                                                <li>Ongoing support for maintaining verification status.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="service_post style_one" style={{ background: "#F8F8F8" }}>
                                        <div className="image">
                                            <div className="overlay" />
                                            <img loading="lazy" width={500} height={500} src="/assets/images/service/services.png" alt="img" />
                                        </div>
                                        <div className="service_content icon_yes">
                                            <div className="icon_box">
                                                <span className="icon icon-thumbs-up icon" />
                                            </div>
                                            <h4 className="title_service" style={{ fontWeight: "bold" }}>Comprehensive Support</h4>
                                            <p className="short_desc mt-3">Ongoing support and maintenance service for businesses using WhatsApp as a communication and marketing tool. This includes regular updates, troubleshooting, and technical support to ensure the WhatsApp bot and integrations operate smoothly.</p>
                                            <ul style={{ fontWeight: "bold", textAlign: "left" }}>
                                                <li>24/7 technical support for immediate assistance.</li>
                                                <li>Regular updates and patches for security and performance.</li>
                                                <li>Performance monitoring to preemptively address issues.</li>
                                                <li>Training and resources for your team to maximize the platform's potential.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="price_plan_box style_one" style={{ backgroundColor: "#F8F8F8" }}>
                            <div className="inner_box">
                                <div className="inner_box">
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <h5 style={{ fontWeight: "bold" }}></h5>
                                            <h2 className="mt-3" style={{ fontWeight: "bold" }}>WhatsApp को Smart Flows के साथ बदलें: WhatsBot की पूरी क्षमता को उजागर करें</h2>
                                            <h6 className="mt-3" style={{ fontSize: 20, textAlign: "left", lineHeight: 1.5 }}>कल्पना कीजिए कि smart WhatsBot flows आपके WhatsApp अनुभव को पूरी तरह से बदल सकते हैं! कई businesses और व्यक्ति  WhatsApp की पूरी क्षमता को अभी तक अनलॉक नहीं कर पाए हैं, अक्सर सही support और knowledge की कमी के कारण। हमारा मिशन इस समस्या को हल करना है। हम comprehensive guidance और strategic WhatsApp flows प्रदान करते हैं जो आपके interactions और engagement को बढ़ाएंगे।  हमारी expertise के साथ, आप WhatsBot को फिर से परिभाषित करेंगे और अपने audience के साथ जुड़ने के तरीके को बदल देंगे। WhatsApp के advanced features से अपरिचित हैं? सही tools नहीं हैं? हम यहां मदद के लिए हैं! हमारी टीम आपके bot को अधिक प्रभावी बनाने, इसे आपकी विशिष्ट ज़रूरतों के अनुरूप बनाने, और यह सुनिश्चित करने के लिए समर्पित है कि आप WhatsApp का अधिकतम लाभ उठा रहे हैं। WhatsApp संचार के भविष्य में हमारे साथ शामिल हों!</h6>
                                            <div style={{textAlign:"center"}}>
                                                <a href="/enquiry-form" className="btn btn-success mt-3" style={{fontWeight:"bold"}}>Share Present Adoption and Areas of Interest</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*-newsteller-*/}
                    {/*-newsteller end-*/}
                </div>

            </Layout>
        </>
    )
}