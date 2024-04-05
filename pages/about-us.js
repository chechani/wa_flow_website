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

      <Layout breadcrumbTitle1="About Us">
        <section className="service-section-two bg_light_1">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <div className="before_title"> </div>
                    <h2>Possible in Human Resource</h2>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_50" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="row gutter_40px">
              <div className="col-xxl-3">
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    <div className="content_inner">
                    <span className="icon-dollar"><i /></span>
                      <h2>
                        <Link href="#">
                          Highly Experinced and Techno Commercial Founders{" "}
                        </Link>
                      </h2>
                      <p>
                        Our Founder and CEO, a Chartered Accountant with over 25
                        years of experience in the software business, brings a
                        wealth of expertise and industry knowledge to our
                        services. This unique combination of financial acumen
                        and industry insight enables us to deliver crisp and
                        appealing solutions to our clients..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    <div className="content_inner">
                    <span className="icon-dollar"><i /></span>
                        
                      <h2>
                        <Link href="#">
                          Core Team Multifaceted Capabilities
                        </Link>
                      </h2>
                      <p>
                        Our exceptional team comprises highly skilled
                        individuals with extensive technical and functional
                        knowledge. With diverse backgrounds and a wide range of
                        expertise, they are equipped to handle any challenge
                        that comes their way. Their collective proficiency
                        enables us to consistently deliver outstanding results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    <div className="content_inner">
                    <span className="icon-dollar"><i /></span>
                      <h2>
                        <Link href="#">
                          Business acumen combined with high teck skills
                        </Link>
                      </h2>
                      <p>
                        Our team possesses exceptional skills in solution
                        visualization and programming, bolstered by AI
                        technologies. This proficiency enables us to excel in
                        cutting-edge technologies like Python, JavaScript,
                        React, and Vue.js. We leverage this expertise to
                        conceptualize innovative solutions Experience with many
                        useful Open Source Technolgies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    
                    <div className="content_inner">
                    <span className="icon-dollar"><i /></span>
                      <h2>
                        <Link href="#">
                          Experience with many useful Open Source Technolgies
                        </Link>
                      </h2>
                      <p>
                        Our team possesses extensive expertise in a diverse
                        array of open-source technologies, enabling us to
                        harness their advantages effectively for businesses.
                        With a deep understanding and substantial experience, we
                        offer valuable guidance and support in utilizing these
                        technologies to drive success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_90" />
          {/*===============spacing==============*/}
        </section>
        {/*-team-end-*/}
      </Layout>
    </>
  );
}
