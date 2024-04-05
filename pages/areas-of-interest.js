import Layout from "@/components/layout/Layout";

export default function AreaOfInterest() {
    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <div className="price_plan_box style_one" style={{ backgroundColor: "#F8F8F8" }}>
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Request for Our Free Consultation</h2>
                    <div className="inner_box">
                        <div className="row default_row" >
                            <div className="full_width_box">
                                {/*===============spacing==============*/}
                                <div className="pd_top_40" />
                                {/*===============spacing==============*/}
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <section className="contact_form_box_all type_three">
                                            <div className="contact_form_box_inner simple_form">
                                                <div className="contact_form_shortcode">
                                                    <div role="form" className="wpcf7">
                                                        <form action="#" method="post" className="wpcf7-form init">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label> Your name<br />
                                                                        <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Name" /></span><br />
                                                                        <i className="fa fa-user" /><br />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label> Your email<br />
                                                                        <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Enter Your Email" /></span><br />
                                                                        <i className="fa fa-envelope" /><br />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label> Phone Number<br />
                                                                        <span className="wpcf7-form-control-wrap tel-922"><input type="tel" name="tel-922" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Enter Your Number" /></span><br />
                                                                        <i className="fa fa-phone" /><br />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label> Subject<br />
                                                                        <span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" /></span><br />
                                                                        <i className="fa fa-folder" /><br />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12 text_area">
                                                                    <label> Your message (optional)<br />
                                                                        <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Enter Your Message" defaultValue={""} /></span><br />
                                                                        <i className="fa fa-comments" /><br />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <input type="submit" defaultValue="Submit" className="col-3" />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="image_boxes style_two">
                                            <img src="/assets/images/healthcare4.png" className="img-fluid" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_70" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}
