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

      <Layout breadcrumbTitle2={"Terms & Condition"}>
        <div className="title_all_box style_one text-center dark_color">
          <div className="title_sections">
            {/*===============spacing==============*/}
            <div className="pd_bottom_50" />
            {/*===============spacing==============*/}
            <p style={{ marginLeft: "30px", textAlign: "justify", marginRight: "30px" }}>
              where you maintain your rights to exclude users from your app in
              the event that they abuse your website/app, set out the rules for
              using your service and note other important details and
              disclaimers.
            </p>
            <p style={{ marginLeft: "30px", textAlign: "justify", marginRight: "30px" }}>
              Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).
            </p>
            <p style={{ marginLeft: "30px", textAlign: "justify", marginRight: "30px" }}>
              Your Terms and Conditions agreement will be uniquely yours. While some clauses are standard and commonly seen in pretty much every Terms and Conditions agreement, it's up to you to set the rules and guidelines that the user must agree to.
            </p>

            <p style={{ marginLeft: "30px", textAlign: "justify", marginRight: "30px" }}>
              Terms and Conditions agreements are also known as Terms of Service or Terms of Use agreements. These terms are interchangeable, practically speaking. More rarely, it may be called something like an End User Services Agreement (EUSA).
            </p>

          </div>
        </div>
                          {/*===============spacing==============*/}
                          <div className="pd_bottom_50" />
                  {/*===============spacing==============*/}
      </Layout>
    </>
  );
}
