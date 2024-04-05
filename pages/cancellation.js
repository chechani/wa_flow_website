import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";

import Head from "next/head";

export default function AboutUs() {
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

      <Layout breadcrumbTitle3={"Refund Policy"}>
        <div className="title_all_box style_one text-center dark_color">
          {/*===============spacing==============*/}
          <div className="pd_bottom_50" />
          {/*===============spacing==============*/}
          <div className="title_sections">
            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
                fontWeight:"bold"
              }}
            >
              Thank you for choosing AIWABot. Please read our refund
              and cancellation policy carefully before making a purchase.
            </p>
            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              We operate under a strict no-refund policy. All sales are final.
              <br></br>
              We do not offer refunds for any products or services purchased
              through our website.
            </p>
            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              In the rare event that there is a mistake on our part, such as
              shipping the wrong item or a product defect, please contact us
              within [number of days, e.g., 7 days] of receiving your order for
              assistance.
            </p>

            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              If you have any questions or concerns about our refund and
              cancellation policy, please feel free to contact our customer
              support team at sales@smartysoft.in
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
