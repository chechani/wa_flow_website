import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function healthcare() {
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
                                                <h1 style={{ color: "#303030" }}>WhatsApp Bot <br />and AI</h1>
                                                <h2 style={{ color: "#3cb371", fontWeight: "bold",marginTop:-20 }}>Your Patient's New Friend
                                                </h2>
                                                {/* <div className="animate_down theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_left slider_content">
                                                <img src="/assets/images/healthcare4.png" className="img-fluid" alt="img" />
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
                                                <h1 style={{ color: "#303030" }}> Patient Registration</h1>
                                                <h2 style={{color: "#3cb371", fontWeight: "bold",marginTop:-20 }}>Effortless Patient Registration<br/> with our WhatsApp Bot</h2>
                                                {/* <div className="animate_down theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_left slider_content">
                                                <img src="/assets/images/healthcare8.png" className="img-fluid" alt="img" />
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
                                                <h1 style={{ color: "#303030" }}>Appointment Scheduling</h1>
                                                <h2 style={{color: "#3cb371", fontWeight: "bold",marginTop:-20 }}>Seamless Appointment Scheduling Made Easy</h2>
                                                {/* <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_right slider_content">
                                                <img src="/assets/images/healthcare5.png" className="img-fluid" alt="img" />
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
                                                <h1 style={{ color: "#303030" }}>Medical Record Sharing</h1>
                                                <h2 style={{color: "#3cb371", fontWeight: "bold",marginTop:-20 }}>Secure Medical Record Sharing Made Simple</h2>
                                                {/* <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_right slider_content">
                                                <img src="/assets/images/healthcare6.png" className="img-fluid" alt="img" />
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
                                                <h1 style={{ color: "#303030" }}>Digital Prescription</h1>
                                                <h2 style={{color: "#3cb371", fontWeight: "bold",marginTop:-20 }}>Efficient Digital Prescriptions<br/> for Better Care</h2>
                                                {/* <div className="animate_right theme_btn_all color_two">
                                                <Link href="#" className="theme-btn one">Read More</Link >
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="animate_right slider_content">
                                                <img src="/assets/images/healthcare7.png" className="img-fluid" alt="img" />
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
                                        <h1 style={{ fontWeight: "bold", fontSize: 43, color: "#3cb371" }}>Health Companion for Convenient<br/> Care of your Patients</h1>
                                        <h2 className="mt-4" style={{ fontWeight: "bold",fontSize:30 }}>Build Automation to Revolutionize Your Healthcare</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0 mb-xl-0">
                                    <div className="icon_box_all style_three">
                                        <div className="icon_content icon_centers">
                                            <div className="icon">
                                                <img src="/assets/images/calender.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Seamless Appointment Scheduling</h4>
                                                <p>Book doctor visits, consultations,
                                                    and tests effortlessly. Get timely reminders
                                                    to ensure you never miss an
                                                    appointment.</p>
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
                                                <img src="/assets/images/time.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Timely Prescription<br />
                                                    Reminders</h4>
                                                <p>Send personalized medication reminders
                                                    directly on WhatsApp for optimal
                                                    treatment adherence.</p>
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
                                                <img src="/assets/images/checker.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Smart Symptom <br />Checker
                                                </h4>
                                                <p>Get preliminary insights into potential
                                                    health concerns with our AI-powered
                                                    symptom checker
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
                                                <img src="/assets/images/medical_checker.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Easy Medication Alerts
                                                </h4>
                                                <p>Enables your patients to keep informed
                                                    their medication schedule with
                                                    customized reminders</p>
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
                                                <img src="/assets/images/leb.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Instant Lab Result Notifications
                                                </h4>
                                                <p>Share lab test results as soon as they're
                                                    available, directly within your WhatsApp
                                                    conversations.</p>
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
                                                <img src="/assets/images/health_insurance.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Easy Health Insurance Access
                                                </h4>
                                                <p>Manage health insurance policy
                                                    information, claims, and queries
                                                    effortlessly
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
                                                <img src="/assets/images/exercise.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Tailored Exercise Plans
                                                </h4>
                                                <p>Send customized exercise routines
                                                    based on patient fitness goals and
                                                    health needs
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
                                                <img src="/assets/images/emergency.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Emergency Assistance Hotline
                                                </h4>
                                                <p>Enables Patients to connect instantly
                                                    with emergency healthcare support in
                                                    critical situations through a dedicated
                                                    WhatsApp helpline.</p>
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
                                                <img src="/assets/images/health_education.png" className="img-fluid svg_image" alt="icon png" />
                                            </div>
                                            <div className="txt_content">
                                                <h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                                                    Health Education at Your Fingertips

                                                </h4>
                                                <p>Stay informed your Patients with bitesized health tips, wellness articles, and
                                                    reliable health information</p>
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
                                        <h5 style={{ fontWeight: "bold" }}>Paid Plan Start from Rs. 9000/Annual Inclusive GST</h5>
                                        <h2 className="mt-3" style={{fontWeight:"bold"}}>
                                            Start your 30 day free trial today and
                                            Upgrade your business communications</h2>
                                        <h6 className="mt-3" style={{fontWeight:"bold"}}>Discover how our WhatsApp Bot Service will enhance your patient
                                            interactions, streamline operations</h6>
                                        <a href="https://aiwabot.in/enquiry-form" className="btn mt-3" style={{ background: "#66CDAA", padding: 10, color: "white", borderRadius: 10, fontWeight: "bold" }} onMouseOver={(e) => {
                                            e.target.style.background = "#3cb371";
                                        }}
                                            onMouseOut={(e) => {
                                                e.target.style.background = "#66CDAA";
                                            }}>Free Trial</a>
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
