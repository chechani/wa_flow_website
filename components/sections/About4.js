export default function About4() {

    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="mb-5" style={{ textAlign: "center" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>Why WhatsApp Flows? <img src="/assets/images/second.png" className="img-fluid svg_image" alt="icon png" style={{ height: "200px" }} /></h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="job_grid_box" style={{background:"white",border:"1px solid black"}}>
                                <div className="inner_bx has_images" style={{ textAlign: "center" }}>
                                    <h3 style={{ fontWeight: "bold" }}>Fast & Convenient</h3>
                                    <p>No more phone calls and emails. WhatsApp flows provide immediate assistance within your favorite messaging app</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="job_grid_box" style={{border:"none"}}>
                                <div className="inner_bx has_images" style={{ textAlign: "center" }}>
                                    <h3 style={{ fontWeight: "bold" }}>Personalized Experiences</h3>
                                    <p>Tailor interactions to your preferences, delivering a personalized and engaging experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                        <div className="job_grid_box" style={{border:"none"}}>
                                <div className="inner_bx has_images" style={{ textAlign: "center" }}>
                                    <h3 style={{ fontWeight: "bold" }}>Effortless Bookings</h3>
                                    <p>Streamline appointments, reservations, and event sign-ups with a few taps</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                        <div className="job_grid_box" style={{background:"white",border:"1px solid black"}}>
                                <div className="inner_bx has_images" style={{ textAlign: "center" }}>
                                    <h3 style={{ fontWeight: "bold" }}>Instant Feedback</h3>
                                    <p>Share valuable insights effortlessly, helping to improve services</p>
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
