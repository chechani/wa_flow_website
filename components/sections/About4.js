
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

export default function About4() {

    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
    };
    return (
        <>
            <section className="about-section">
                {/*===============spacing==============*/}
                <div className="pd_top_20" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="mt-4 mb-5" style={{ textAlign: "center" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "50px" }}><strong style={{ color: "#06af43" }}>WhatsApp</strong> Marketing</h1>
                        <div className="row container mt-4">
                            <div className="col-6">
                                <p style={{ fontWeight: "bold" }}><img src="/assets/images/green-tik.png" className="img-fluid svg_image" alt="icon png" style={{ height: "35px" }} /> 98 % High open rate</p>
                            </div>
                            <div className="col-6">
                                <p style={{ fontWeight: "bold" }}><img src="/assets/images/green-tik.png" className="img-fluid svg_image" alt="icon png" style={{ height: "35px" }} /> 95 % Customer engagement rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections left">
                                    <h2 className="title" style={{ fontSize: 30, fontWeight: "bold" }}>Broadcasting</h2>
                                    <p><img src="/assets/images/video.png" className="img-fluid svg_image" alt="icon png" style={{ height: "25px" }} /> &nbsp;Send as many messages as you want with just one click - no more worrying about being blocked. Save time and keep your audience engaged with mass WhatsApp bulk messaging.</p>
                                    <h2 className="title" style={{ fontSize: 30, fontWeight: "bold" }}>Drip Campaigns</h2>
                                    <p><img src="/assets/images/video.png" className="img-fluid svg_image" alt="icon png" style={{ height: "25px" }} /> &nbsp;Automate your marketing campaigns by creating personalized sequences of targeted messages to nurture leads and drive conversions.</p>
                                    <h2 className="title" style={{ fontSize: 30, fontWeight: "bold" }}>Click to WhatsApp Ads</h2>
                                    <p><img src="/assets/images/video.png" className="img-fluid svg_image" alt="icon png" style={{ height: "25px" }} /> &nbsp;Seamlessly integrate your social media ads with WhatsApp to boost customer engagement and drive sales.</p>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_six">
                                <div className="image_box">
                                    <img src="/assets/images/drip.png" className="img-fluid height_500px object-fit-cover" alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "45px", background: "#f7fbff", paddingTop: "10px", paddingBottom: "10px" }}><strong style={{ color: "#317ed6" }}>
                            AI</strong> ChatBot</h1>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_50" />
                    {/*===============spacing==============*/}
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="image_boxes style_six">
                                <div className="image_box">
                                    <Swiper {...swiperOptions} className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                                        <SwiperSlide className="slide-item">
                                            <div className="slide-item-content">
                                                <div className="auto-container">
                                                    <div className="contnet_d_flex">
                                                        <div className="image_content">
                                                            <div className="slider_image animate_right">
                                                                <img src="/assets/images/Rule-based.png" className="img-fluid" alt="slider image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="slide-item">
                                            <div className="slide-item-content">
                                                <div className="auto-container">
                                                    <div className="contnet_d_flex">
                                                        <div className="image_content">
                                                            <div className="slider_image animate_right">
                                                                <img src="/assets/images/Rule-based1.png" className="img-fluid" alt="slider image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="title_all_box style_one dark_color">
                            <div className="title_sections left" style={{background:"#f6faff",padding:"30px"}}>
                                    <h2 className="title" style={{ fontSize: 30, fontWeight: "bold" }}>Customized ChatGPT</h2>
                                    <p><img src="/assets/images/chat-app.png" className="img-fluid svg_image" alt="icon png" style={{ height: "25px" }} /> &nbsp;The Ultimate Conversational Sales Agent for WhatsApp! This advanced chatbot is designed to mimic a human sales agent, providing personalized engagement on WhatsApp that transforms every customer interaction into a uniquely tailored experience.</p>
                                    <h2 className="title" style={{ fontSize: 30, fontWeight: "bold" }}>Rule Based ChatBot</h2>
                                    <p><img src="/assets/images/chat-app.png" className="img-fluid svg_image" alt="icon png" style={{ height: "25px" }} /> &nbsp;A Reliable Virtual Sales Assistant! Designed for efficiency, this cutting-edge chatbot is perfect for managing FAQs and sending reminders promptly via WhatsApp, guaranteeing your customers get accurate responses 24/7.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}

            </section>

        </>
    )
}
