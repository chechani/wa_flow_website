
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

      <Layout breadcrumbTitle="Privacy Policy">
        <div className="title_all_box style_one text-center dark_color">
          {/*===============spacing==============*/}
          <div className="pd_top_50" />
          {/*===============spacing==============*/}
          <div className="title_sections">
            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              AIWABot ("AIWABot", "Website", "We", "Our" or "Us") is the owner
              of https://aiwabot.in/ and the (the URLs and mobile application
              are together and individually referred to as "Website"). The terms
              'You' or 'Your' refer to You as the user .
            </p>

            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              As mentioned earlier, Terms of Use, the Privacy Policy, the
              Additional Terms of Use for HCPRs, together with any other
              policies which may be applicable to specific portions of the
              Website and any disclaimers which may be present on the Website
              are referred to as "the Agreement" therefore, the above mentioned
              must be read together.
            </p>
            <p
              style={{
                marginLeft: "30px",
                textAlign: "justify",
                marginRight: "30px",
              }}
            >
              AIWABot is committed to Your privacy. This privacy policy
              ("Privacy Policy") applies to the collection, use, storage,
              processing, disclosure, and transfer of Your Information (defined
              below) when You use the Website and/or the Services.
            </p>
            <hr></hr>
          </div>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            1. WHY THIS PRIVACY POLICY?
          </h4>
          <p
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            This Privacy Policy is published in compliance with, inter alia:
          </p>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>Section 43A of the Information Technology Act, 2000;</li>
            <li>
              Regulation 4 of the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Information)
              Rules, 2011 (the “SPI Rules”);
            </li>
            <li>
              Regulation 3(1) of the Information Technology (Intermediaries
              Guidelines) Rules, 2011; and
            </li>
            <li>Other applicable laws of India.</li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            2. This Privacy Policy states the following:
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              The type of information collected from the Users, including
              Personal Information and Sensitive Personal Data or Information
              relating to the Users;
            </li>
            <li>
              The purpose, means, and modes of collection, usage, processing,
              retention, and destruction of such information; and
            </li>
            <li>How and to whom AIWABot will disclose such information.</li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            3. Consent
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              By clicking on the "I accept' button at the end of the page
              containing the Terms of Use or by providing us Your Personal
              Information and/or Personal Sensitive Data or Information or by
              making use of the features provided by the Website, You hereby
              consent to the collection, storage, processing, disclosure and
              transfer of Your Information in accordance with the provisions of
              this Privacy Policy.
            </li>
            <li>
              You acknowledge that You are providing Your Personal Information
              and/or Personal Sensitive Data or Information out of Your free
              will.
            </li>
            <li>
              You have the option not to provide us the Personal Information
              and/or Personal Sensitive Data or Information sought to be
              collected. You will also have an option to withdraw Your consent
              at any point, provided such withdrawal of consent is intimated to
              us in writing at bcc@smartysoft.in. If You do not provide
              us Your Personal Information and/or Personal Sensitive Data or
              Information and if You withdraw the consent at any point in time,
              We shall have the option not to fulfill the purpose for which the
              said Personal Information was sought and we may restrict You from
              using the Website.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            4. HOW DO WE COLLECT INFORMATION?
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              When You register on Our Website, or
            </li>
            <li>
              When You create a profile on Our Website or as part of Services, or
            </li>
            <li>
              When You provide Your Information to us, or
            </li>
            <li>
              When You use the features on Our Website and/or when You use Services, or
            </li>
            <li>
              When You access Website or Services, or
            </li>
            <li>
              By use of cookies (discussed below).
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              marginLeft: "30px",
            }}
          >
            4. HOW IS THE INFORMATION COLLECTED IS USED?
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <h6>
              We collect Your Information for various purposes, including the following:
            </h6>
            <br />
            <li>
              In order to enable You to use the Website and utilize the Services. For instance, You may provide Your health-related information on the Website in order to consult privately with an HCPRs or to book a Home Visit or to get an Expert Opinion/Second Opinion, or You may provide Your financial information in order to process a payment which You need to make on the Website.
            </li>
            <li>
              to respond to Your inquiries
            </li>
            <li>
              to provide You with information about products and services available on the Website
            </li>
            <li>
              to personalize Your experience on the Website;
            </li>
            <li>
              to help You address Your problems incurred on the Website including addressing any technical problems;
            </li>
            <li>
              for proper administering of the Website;
            </li>
            <li>
              to conduct internal reviews and data analysis for the Website (e.g., to determine the number of visitors to specific pages within the Website);
            </li>
            <li>
              to improve the services, content, and advertising on the Website;
            </li>
            <li>
              to protect the integrity of the Website; and
            </li>
            <li>
              to respond to judicial process and provide information to law enforcement agencies or in connection with an investigation on matters related to public safety, as permitted by law.
            </li>
            <li>
              to conduct analytical studies on various aspects including user behavior, user preferences, etc.
            </li>
            <li>
              to make disclosures as may be required under applicable law.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            1. HOW INFORMATION MAY BE SHARED AND TRANSFERRED?
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              We may exchange, transfer, share, part with all or any of Your Information, across borders and from Your country to any other countries across the world with Our affiliates/agents / third party service providers/partners/banks and financial institutions for the Purposes specified under this Privacy Policy or as may be required by applicable law of India or in case of sale, acquisition, merger or bankruptcy involving AIWABot.
            </li>
            <li>
              You acknowledge that some countries where We may transfer Your Information may not have data protection laws that are as stringent as the laws of Your own country
            </li>
            <li>
              You acknowledge that it is adequate that when AIWABot transfers Your Information to any other entity within or outside Your country of residence, AIWABot will place contractual obligations on the transferee which will oblige the transferee to adhere to the provisions of this Privacy Policy.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            2. PROTECTION AND NECESSARY DISCLOSURE OF PERSONAL INFORMATION
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              The Website is committed to uphold the privacy of the Users as per the applicable laws of India amended from time to time.
            </li>
            <li>
              The protection of the User Information and Disclosure would only be as per the Agreement and the provisions of Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            3. CORRECTING INACCURACIES OR UPDATING PERSONAL INFORMATION
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              If Your Personal Information changes, or if You need to update or correct Your Personal Information or have any grievance with respect to the processing or use of Your Personal Information, for any reason, You may send updates and corrections to us at the provided link and We will take all reasonable efforts to incorporate the changes within a reasonable period of time. If Your Personal Information is stored as part of Your profile on the Website, You can update Your profile on the profile pages of the Websites.
            </li>
            <li>
              You are not allowed to use the Website or the Services of the Website if any of the terms of this Privacy Policy are not in accordance with the applicable laws of India or Your country.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            4. COMPLIANCE WITH THE LAWS
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              You are not allowed to use the Website or the Services of the Website if any of the terms of this Privacy Policy are not in accordance with the applicable laws of India or Your country.
            </li>
          </ol>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "20px",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            5. GRIEVANCE OFFICER
          </h4>

          <ol
            style={{
              marginLeft: "40px",
              textAlign: "justify",
              marginRight: "30px",
            }}
          >
            <li>
              We have appointed a Grievance Officer to address any concerns or grievances that You may have regarding the processing of Your Personal Information. If You have any such grievances, please write to Our Grievance Officer at bcc@smartysoft.in and Our officer will attempt to resolve Your issues in a timely manner.
            </li>
          </ol>
        </div>
        <h6 style={{ margin: "10px" }}>DISCLAIMER: AIWABot reserves the right, in its sole discretion, to change, modify, add or delete portions of the terms of this Privacy Policy at any time.</h6>
        {/*===============spacing==============*/}
        <div className="pd_top_50" />
        {/*===============spacing==============*/}
      </Layout>
    </>
  );
}