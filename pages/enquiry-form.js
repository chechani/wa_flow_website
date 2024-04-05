import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        company_name: "",
        nature_of_business: "",
        website: "",
        yes: false,
        no: false,
        team_inbox: false,
        whatsapp_flow: false,
        subscribe_management: false,
        customer_segmentation: false,
        interactive_whatsapp_chat: false,
        customized_chat_flows: false,
        message_broadcasting: false,
        integration_with_crm: false,
        whatsapp_commerce: false,
        ai: false,
        team_inbox_second: false,
        whatsapp_flow_second: false,
        subscribe_management_second: false,
        customer_segmentation_second: false,
        interactive_whatsapp_chat_second: false,
        customized_chat_flows_second: false,
        message_broadcasting_second: false,
        integration_with_crm_second: false,
        whatsapp_commerce_second: false,
        ai_second: false,
    })

    const handleChange = (event) => {
        const { name, type, checked } = event.target;

        // If one of the checkboxes is clicked, uncheck the other
        if (type === 'checkbox' && (name === 'yes' || name === 'no')) {
            setFormData({
                ...formData,
                yes: name === 'yes' ? checked : false,
                no: name === 'no' ? checked : false,
            });
        } else {
            const value = type === 'checkbox' ? checked : event.target.value;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    const handleSelectAll = (event) => {
        const { checked } = event.target;
        const updatedFormData = { ...formData };
        for (let key in updatedFormData) {
            if (key !== 'company_name'
                && key !== 'nature_of_business'
                && key !== 'website'
                && key !== 'yes'
                && key !== 'no'
                && key !== 'team_inbox_second'
                && key !== 'whatsapp_flow_second'
                && key !== 'subscribe_management_second'
                && key !== 'customer_segmentation_second'
                && key !== 'interactive_whatsapp_chat_second'
                && key !== 'customized_chat_flows_second'
                && key !== 'message_broadcasting_second'
                && key !== 'integration_with_crm_second'
                && key !== 'whatsapp_commerce_second'
                && key !== 'ai_second'
            ) {
                updatedFormData[key] = checked;
            }
        }
        setFormData(updatedFormData);
    };

    const handleSecondSelectAll = (event) => {
        const { checked } = event.target;
        const updatedFormData = { ...formData };
        for (let key in updatedFormData) {
            if (key !== 'company_name'
                && key !== 'nature_of_business'
                && key !== 'website'
                && key !== 'yes'
                && key !== 'no'
                && key !== 'team_inbox'
                && key !== 'whatsapp_flow'
                && key !== 'subscribe_management'
                && key !== 'customer_segmentation'
                && key !== 'interactive_whatsapp_chat'
                && key !== 'customized_chat_flows'
                && key !== 'message_broadcasting'
                && key !== 'integration_with_crm'
                && key !== 'whatsapp_commerce'
                && key !== 'ai'
            ) {
                updatedFormData[key] = checked;
            }
        }
        setFormData(updatedFormData);
    };

    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <div className="container">
                    <div className="row default_row">
                        <div className="full_width_box">
                            {/*===============spacing==============*/}
                            <div className="pd_top_80" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_one text-left dark_color" style={{ textAlign: "center" }}>
                                <div className="title_sections">
                                    <h2>Enquiry Form</h2>
                                </div>
                                <div>
                                    <p style={{ fontSize: 18, fontWeight: "bold" }}>Simply fill out our quick enquiry form below, and our team will set you up for seamless interactions with our WhatsApp bot. Whether you have questions, need assistance, or just want to explore the possibilities, we're here for you!</p>
                                </div>
                            </div>
                            <section className="contact_form_box_all type_one mt-4">
                                <div className="contact_form_box_inner">
                                    <div className="contact_form_shortcode">
                                        <div role="form" className="wpcf7">
                                            <form onSubmit={handleSubmit} method="post" className="wpcf7-form init">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "normal" }}>Company Name
                                                            <br />
                                                            <span
                                                                className="wpcf7-form-control-wrap your-name">
                                                                <input
                                                                    type="text"
                                                                    name="company_name"
                                                                    required size={30}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Company Name"
                                                                    onChange={handleChange}
                                                                    value={formData.company_name}
                                                                />
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "normal" }}>Nature of Business
                                                            <br />
                                                            <span
                                                                className="wpcf7-form-control-wrap your-name">
                                                                <input
                                                                    type="text"
                                                                    name="nature_of_business"
                                                                    required size={30}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Nature of Business"
                                                                    onChange={handleChange}
                                                                    value={formData.nature_of_business}
                                                                />
                                                            </span>
                                                        </p>

                                                    </div>
                                                    <div className="col-lg-6">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "normal" }}>Website
                                                            <br />
                                                            <span
                                                                className="wpcf7-form-control-wrap your-name">
                                                                <input
                                                                    type="text"
                                                                    name="website"
                                                                    required size={30}
                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                    aria-required="true"
                                                                    aria-invalid="false"
                                                                    placeholder="Website"
                                                                    onChange={handleChange}
                                                                    value={formData.website}
                                                                />
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "normal" }}>Present Whatsapp Adaption
                                                        </p>
                                                        <div className='row mt-3'>
                                                            <div className="col-lg-2 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Yes &nbsp;
                                                                    <input type="checkbox" onChange={handleChange} checked={formData.yes} name="yes" defaultValue className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-2 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>No &nbsp;
                                                                    <input type="checkbox" onChange={handleChange} checked={formData.no} name="no" defaultValue className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_top_20" />
                                                    {/*===============spacing==============*/}
                                                    <hr width="100%" size="2" />
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_top_20" />
                                                    {/*===============spacing==============*/}
                                                    <div className="col-lg-12">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>What are you using <br />
                                                        </p>
                                                        <p className='mt-3' style={{ fontWeight: "bold", textTransform: "capitalize", display: "flex", flexDirection: "row", fontSize: 15, color: "#2E8B57" }}>Select All &nbsp;
                                                            <input type="checkbox"
                                                                name="select_all"
                                                                onChange={handleSelectAll}
                                                                aria-invalid="false"
                                                                style={{ width: 15 }} />
                                                        </p>
                                                        <div className='row'>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Team Inbox &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.team_inbox}
                                                                        name="team_inbox"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>WhatsApp Flow &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.whatsapp_flow}
                                                                        name="whatsapp_flow"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Subscriber Management &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.subscribe_management}
                                                                        name="subscribe_management"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Customer Segmentation &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.customer_segmentation}
                                                                        name="customer_segmentation"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Interactive WhatsApp Chat &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.interactive_whatsapp_chat}
                                                                        name="interactive_whatsapp_chat"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Customized Chat Flows &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.customized_chat_flows}
                                                                        name="customized_chat_flows"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Message Broadcasting &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.message_broadcasting}
                                                                        name="message_broadcasting"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Integration with CRM / ERP &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.integration_with_crm}
                                                                        name="integration_with_crm"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>WhatsApp Commerce &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.whatsapp_commerce}
                                                                        name="whatsapp_commerce"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>AI &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.ai}
                                                                        name="ai"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_top_20" />
                                                    {/*===============spacing==============*/}
                                                    <hr width="100%" size="2" />
                                                    {/*===============spacing==============*/}
                                                    <div className="pd_top_20" />
                                                    {/*===============spacing==============*/}
                                                    <div className="col-lg-12">
                                                        <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>What are you intersted in<br />
                                                        </p>
                                                        <p className='mt-3' style={{ fontWeight: "bold", textTransform: "capitalize", display: "flex", flexDirection: "row", fontSize: 15, color: "#2E8B57" }}>Select All &nbsp;
                                                            <input type="checkbox"
                                                                name="select_all_second"
                                                                onChange={handleSecondSelectAll}
                                                                aria-invalid="false"
                                                                style={{ width: 15 }} />
                                                        </p>
                                                        <div className='row'>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Team Inbox &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.team_inbox_second}
                                                                        name="team_inbox_second"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>WhatsApp Flow &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.whatsapp_flow_second}
                                                                        name="whatsapp_flow_second"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Subscriber Management &nbsp;
                                                                    <input type="checkbox"
                                                                        onChange={handleChange}
                                                                        checked={formData.subscribe_management_second}
                                                                        name="subscribe_management_second"
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Customer Segmentation &nbsp;
                                                                    <input type="checkbox"
                                                                        name="customer_segmentation_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.customer_segmentation_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Interactive WhatsApp Chat &nbsp;
                                                                    <input type="checkbox"
                                                                        name="interactive_whatsapp_chat_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.interactive_whatsapp_chat_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Customized Chat Flows &nbsp;
                                                                    <input type="checkbox"
                                                                        name="customized_chat_flows_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.customized_chat_flows_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Message Broadcasting &nbsp;
                                                                    <input type="checkbox"
                                                                        name="message_broadcasting_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.message_broadcasting_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>Integration with CRM / ERP &nbsp;
                                                                    <input type="checkbox"
                                                                        name="integration_with_crm_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.integration_with_crm_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>WhatsApp Commerce &nbsp;
                                                                    <input type="checkbox"
                                                                        name="whatsapp_commerce_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.whatsapp_commerce_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />

                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-6">
                                                                <p style={{ textTransform: "capitalize", fontWeight: "normal", display: "flex", flexDirection: "row", fontSize: 15 }}>AI &nbsp;
                                                                    <input type="checkbox"
                                                                        name="ai_second"
                                                                        onChange={handleChange}
                                                                        checked={formData.ai_second}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <input type="submit" defaultValue="Submit" className="wpcf7-form-control has-spinner wpcf7-submit" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_70" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
