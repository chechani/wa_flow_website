import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function welcome() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };
    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <section className="slider style_page_twelve nav_position_one" style={{ marginTop: -100 }}>
                    <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                        <SwiperSlide className="slide-item-content" style={{ height: 700 }}>
                            <div className="slide-item content_left">
                                <div className="image-layer" style={{ background: "#F5F5F5" }}>
                                </div>
                                <div className="medium-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="slider_content">
                                                <h1 style={{ color: "#303030", fontSize: 50 }}>WhatsApp बॉट और AI</h1>
                                                <h1 className="" style={{ fontSize: 45, marginTop: -35, color: "#3cb371", fontWeight: "bold" }}>आपके बिजनेस का नया साथी
                                                </h1>
                                                {/* <div className="animate_down theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_left slider_content">
                                                <img src="/assets/images/slider.png" className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item-content" style={{ height: 700 }}>
                            <div className="slide-item content_left">
                                <div className="image-layer" style={{ background: "#F5F5F5" }}>
                                </div>
                                <div className="medium-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="slider_content">
                                                <h1 style={{ color: "#303030", fontSize: 50 }}>
                                                    {/* <i class="fa fa-check-circle" style={{ color: "#3CB371" }} /> */}
                                                    AI Bots के साथ तत्काल जवाब / प्रतिक्रिया।</h1>
                                                {/* <div className="animate_down theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_left slider_content">
                                                <img src="/assets/images/slider7.png" className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item-content" style={{ height: 700 }}>
                            <div className="slide-item content_left">
                                <div className="image-layer" style={{ background: "#F5F5F5" }}>
                                </div>
                                <div className="medium-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="slider_content">
                                                <h1 style={{ color: "#303030", fontSize: 50 }}>
                                                    {/* <i class="fa fa-check-circle" style={{ color: "#3CB371" }} /> */}
                                                    उत्कृष्ट ग्राहक संतुष्टि के जरिए Leads व Revenue बढ़ाएं।</h1>
                                                {/* <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_right slider_content">
                                                <img src="/assets/images/slider5.png" className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item-content" style={{ height: 700 }}>
                            <div className="slide-item content_left">
                                <div className="image-layer" style={{ background: "#F5F5F5" }}>
                                </div>
                                <div className="medium-container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="slider_content">
                                                <h1 style={{ color: "#303030", fontSize: 50 }}>
                                                    {/* <i class="fa fa-check-circle" style={{ color: "#3CB371" }} /> */}
                                                    व्यापार में कार्यक्षमता : स्वचालित कार्यों से समय और पैसा बचाएं।</h1>
                                                {/* <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_right slider_content">
                                                <img src="/assets/images/slider6.png" className="img-fluid" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="about-section bg_light_1">
                    {/* <div className="container"> */}
                    <div className="price_plan_box style_one">
                        <div className="inner_box">
                            <div className="inner_box">
                                <div className="row">
                                    <div className="col-lg-3 col-12">
                                        <div className="first_icon text-lg-end mb-4">
                                            <img src="/assets/images/whatsapp-icon.png" className="img-fluid svg_image" alt="icon png" style={{ height: 100 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        {/* <div className="before_title">Leading</div> */}
                                        <h1 style={{ fontWeight: "bold", fontSize: 45, color: "#3cb371" }}>ग्राहक सवांद में क्रांति लाए</h1>
                                        <p className="mt-4" style={{ fontWeight: "bold" }}>अपने Customer Engagement को AIWABot के साथ
                                            क्रांतिकारी बदलाव दें सहज Integrations,<br /> गतिशील Interactions, आपके
                                            Business Needs के अनुरूप।</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/whatsapp_flow1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    WhatsApp Flow Dynamic Forms
                                                </h4>
                                                <p>WhatsApp पर Forms के जरिए Sales
                                                    Leads और Enquiries आसानी से collect
                                                    करें। CRM या ERP में त्वरित Integration
                                                    सुविधा के साथ!
                                                </p>
                                                {/* <div className="mt-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                    <div>
                                                        <a className="btn btn-success m-1">Read More</a>
                                                    </div>
                                                    <div>
                                                        <div className="btn btn-success m-1">
                                                            <VideoBox />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers ">
                                            <div className="icon">
                                                <img src="/assets/images/team_inbox.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>Team Inbox and Chat Allocation</h4>
                                                <p>एकीकृत Shared Inbox से व्यावसायिक Chat
                                                    संचालित करें, टीम Collaboration बढ़ाएं और
                                                    Response Time को कम करके ग्राहक
                                                    Satisfaction सुधारें!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/subscribe_management.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Subscriber Management
                                                </h4>
                                                <p>Interactive Bot से Subscription लेने या
                                                    समाप्त करने की सुविधा के साथ ग्राहकों ,
                                                    Prospects, और Suppliers को सरलता से
                                                    मैनेज करें।
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/customer_segmentation.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Customer Segmentation
                                                </h4>
                                                <p>Specific Features पर आधारित ग्राहक
                                                    Segmentation से Communication और
                                                    Offers को tailor करें, Engagement और
                                                    Conversion Rates में वृद्धि पाएं।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/automated_chat.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Interactive WhatsApp Chat
                                                </h4>
                                                <p>Automated लेकि न Personalized वार्तालापों के
                                                    लिए AI-Powered Chatbot तैनात करें, यह
                                                    सुनिश्चित करते हुए कि आपके ग्राहकों को Instant,
                                                    Relevant Responses प्राप्त हों ।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/customized_chat2.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Customized Chat Flows
                                                </h4>
                                                <p>Users को उनकी Needs और आपके
                                                    Business Objectives के आधार पर एक
                                                    Structured Interaction के माध्यम से
                                                    Guide करने के लिए Customizable Chat
                                                    Flows का उपयोग करें।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/message_brodcasting.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Message Broadcasting
                                                </h4>
                                                <p>Message Broadcasting के साथ एक साथ
                                                    कई Customers तक पहुंचें,
                                                    Announcements, Updates या
                                                    Promotions के लिए बिल्कुल उपयुक्त।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/integration_with_business1.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Integration with CRM / ERP
                                                </h4>
                                                <p>ERP और CRM सहित Business Tools और
                                                    Systems के साथ सहजता से Integrate करें,
                                                    एकीकृत Operations और Data
                                                    Consistency के लिए।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/ecommerce.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    WhatsApp Commerce
                                                </h4>
                                                <p>WhatsApp पर प्रबंधित करने में आसान
                                                    Ecommerce और Catalog System के साथ
                                                    अपने Products और Services का
                                                    Showcase करें।</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*===============spacing==============*/}
                                    <div className="mr_bottom_20" />
                                    {/*===============spacing==============*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/*===============spacing==============*/}
                    <div className="pd_top_5" />
                    {/*===============spacing==============*/}
                    {/* <div className="container"> */}
                    <div className="price_plan_box style_one">
                        <div className="inner_box">
                            <div className="inner_box">
                                <div className="row">
                                    <div className="col-lg-12 col-12" style={{ textAlign: "center" }}>
                                        {/* <div className="before_title">Leading</div> */}
                                        <h5 style={{ fontWeight: "bold" }}>आज ही ३० दिन का फ्री ट्रायल शुरू करे</h5>
                                        <h2 className="mt-3">
                                            अपने व्यवसाय संचार को आज से ही उन्नत करें</h2>
                                        <h6 className="mt-3">Discover करें कैसे हमारी WhatsApp Bot Service आपके customer
                                            interactions को enhance करेगी, operations को streamline करेगी, और
                                            growth को boost करेगी। </h6>
                                        <a href="https://aiwabot.in/free_form" className="btn mt-3" style={{ background: "#66CDAA", padding: 10, color: "white", borderRadius: 10, fontWeight: "bold" }} onMouseOver={(e) => {
                                            e.target.style.background = "#3cb371";
                                        }}
                                            onMouseOut={(e) => {
                                                e.target.style.background = "#66CDAA";
                                            }}>फ्री ट्रायल शुरू करे</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_5" />
                    {/*===============spacing==============*/}
                </section>
            </Layout>
        </>
    )
}
