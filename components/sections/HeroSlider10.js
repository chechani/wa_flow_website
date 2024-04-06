import Link from "next/link"
export default function HeroSlider10() {


    return (
        <>
            <section className="slider style_one slider_version_v4 nav_position_one">
                <div className="slide-item-content">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-12 col-md-12">
                                <img src="/assets/images/first_img.png" className="img-fluid svg_image" alt="icon png" />
                            </div>
                            <div className="col-xl-7 col-lg-12 col-md-12">
                                <div className="contnet_d_flex">
                                    <div className="text_box_content">
                                        <div className="slider_content desktop-margin-top">
                                            <h1 style={{ fontSize: "50px" }}>
                                                <strong style={{ color: "#3cb371" }}>WhatsApp</strong> Flows for <br />Effortless Interactions
                                            </h1>

                                            <p style={{ fontSize: "24px", color: "black", fontWeight: "bold" }}>
                                                Enhanced Customer Engagement for Modern Businesses
                                            </p>
                                            <ul>
                                                <li>
                                                    <div className="thm_btn">
                                                        <Link href="#" className="theme-btn three" style={{ textDecoration: "none" }}>
                                                            Get Started
                                                        </Link >
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                /* Add custom CSS here */
                @media only screen and (min-width: 992px) {
                    .desktop-margin-top {
                        margin-top: -150px; /* Adjust this value as needed */
                    }
                }
            `}</style>

        </>
    )
}
