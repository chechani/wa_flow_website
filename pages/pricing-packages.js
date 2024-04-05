import Layout from "@/components/layout/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import FreePlanCreate from "./FreePlanCreate";
import GrowthPayPlan from "./GrowthPayPlan";
import ScalePayPlan from "./ScalePayPlan";
import EntryPayPlan from "./EntryPayPlan";
import Pricing_Information from "./pricing_infomation";

export default function Pricing() {

    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <div>
                    {/*tab section*/}
                    <section className="tab-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title" style={{ fontSize: 28, textDecoration: "none" }}> Flexible Yearly Plan</div>
                                            <h2>Perfect for Small &amp; Large Brands</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutter_40px">
                                <div className="col-lg-12">
                                    <div className="price_plan_with_tab price_tb_style_one">
                                        <div className="tab_pricing_list">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                {/*===============spacing==============*/}
                                                <div className="pd_top_10" />
                                                {/*===============spacing==============*/}
                                            </ul>
                                        </div>
                                        <div className="tab-content price_tab_content" id="myTabContent">
                                            <div className="tab-pane fade active show">
                                                <div className="row">
                                                    <FreePlanCreate />
                                                    <EntryPayPlan />
                                                    <GrowthPayPlan />
                                                    <ScalePayPlan />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_50" />
                        {/*===============spacing==============*/}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="price_plan_box style_one">
                                <div className="inner_box" style={{ textAlign: "center" }}>
                                    <h2 style={{ fontWeight: "bold" }}>Whatsapp Cloud API Charges </h2>
                                    <h1 className="mt-4" style={{ fontSize: 19, fontFamily: "sans-serif" }}>
                                        WhatsApp Charges a <strong>per-conversation fee</strong> to send & receive different types of WhatsApp messages using
                                        their                                         <br />
                                        <br /> <strong>official Cloud API's.</strong> Billing related to this is settled <strong>directly with whatsApp</strong> on their portal<br />
                                        <br /> so you <strong>save up</strong>

                                        markup that Bisinuess Solution Providers charge when you use their tools.</h1>
                                </div>
                                <div className="mt-4" style={{ textAlign: "center" }}>
                                    <a
                                        href="https://developers.facebook.com/docs/whatsapp/pricing/"
                                        style={{
                                            textDecoration: "none",
                                            backgroundColor: "#2E8B57",
                                            color: "white",
                                            borderRadius: 100,
                                            width: "auto",
                                            fontWeight: "bold",
                                            paddingTop: 8,
                                            paddingBottom: 8,
                                            paddingLeft: 20,
                                            paddingRight: 20
                                        }}>
                                        <i className="fa fa-whatsapp">
                                        </i>
                                        &nbsp;
                                        COUNTRY WISE WhatsApp Conversation Pricing</a>
                                </div>
                            </div>
                        </div>
                        <Pricing_Information />
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_10" />
                        {/*===============spacing==============*/}
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_30" />
                        {/*===============spacing==============*/}
                    </section>
                    {/*tab section*/}
                    {/*-call to action-*/}
                </div>
            </Layout>
        </>
    )
}
