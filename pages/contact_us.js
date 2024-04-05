import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const swiperOptions = {
    // General
    direction: "horizontal",
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,

    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <Head>
        <title>AIWABot</title>
      </Head>

      <Layout breadcrumbTitle4={"Contact Us"}>
      <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <section className="creote-contact-box">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                        <div className="contact_box_content style_one">
                                            <div className="contact_box_inner icon_yes ">
                                                <div className="icon_bx">
                                                    <span className="fa fa-headphones" />
                                                </div>
                                                <div className="contnet">
                                                    <h3>General Enquires</h3>
                                                    <p>Phone: +91 7849945640  &amp;  Email:  sales@smartysoft.in</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0">
                                        <div className="contact_box_content style_one">
                                            <div className="contact_box_inner icon_yes">
                                                <div className="icon_bx">
                                                    <span className="icon-placeholder" />
                                                </div>
                                                <div className="contnet">
                                                    <h3> Post Address </h3>
                                                    <p>8-R-12, 13, Second Floor, Kiran Tower, RC Vyas Colony, Bhilwara, Rajasthan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="contact_box_content style_one">
                                            <div className="contact_box_inner icon_yes">
                                                <div className="icon_bx">
                                                    <span className="fa fa-clock-o" />
                                                </div>
                                                <div className="contnet">
                                                    <h3> Operation Hours </h3>
                                                    <p>Monday-Saturday: 09.00 to 07.00 (Sunday: Closed)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_30" />
                            {/*===============spacing==============*/}
                         
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
    
      </Layout>
    </>
  );
}
