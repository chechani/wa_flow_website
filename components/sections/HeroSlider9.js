import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSlider9() {
    return (
        <>
            <section className="slider style_page_eleven  nav_position_one">
                <Swiper className="banner_carousel  owl_nav_block owl_dots_none theme_carousel">
                    <SwiperSlide className="slide-item-content">
                        <div className="slide-item content_center">
                            <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/sliders/slider-11-1.jpg)' }}>
                            </div>
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div className="slider_content" style={{ marginTop: -100 }}>
                                            <h6 className="animate_up">Business, Reduce Cost</h6>
                                            <h1 className="animate_left" style={{ fontSize: 45 }}>Boost Sales with WhatsApp & Telegram Chatbot Marketing</h1>
                                            <h6 style={{ color: "white" }}>Effortless Catalog Integration, Seamless Selling, <br/>and Exceptional Live Chat Support – Your Recipe for Success</h6>
                                            <h6 style={{ color: "white" }}>Redefine Outreach: Dynamic Broadcasting, <br/>Automated WooCommerce & Shopify Orders via WhatsApp. Elevate Your Impact!</h6>
                                                <div className="animate_right theme_btn_all color_one">
                                                <Link href="#" className="theme-btn one">Get Started for FREE</Link>
                                                &nbsp; &nbsp;&nbsp;
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    )
}
