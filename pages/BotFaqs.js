import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function BotFaq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="container">
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="title_all_box style_seven text-center dark_color">
                            <div className="title_sections">
                                <div className="before_title">
                                    Frequently Asked Questions
                                </div>
                                <h2 style={{fontSize:38}}>WhatsApp API FAQ</h2>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_10" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                <div className="row default_row">
                    <div className="full_width_box">
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <section className="faq_section type_two">
                                    <div className="block_faq">
                                        <div className="accordion">
                                            <dl>
                                                <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                    Is there an API for WhatsApp?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                    <p>
                                                        Yes, there is a <strong>WhatsApp API</strong>. It’s specially designed for small and medium businesses that want to take advantage of WhatsApp’s popularity to improve their sales and boost their customer support. With this API, companies can easily introduce WhatsApp into their tech stack. Then they can provide the best possible customer care in multiple ways. They can participate in multichannel/multiparty interactions; create automated chatbots; deliver notifications, alerts and updates; integrate WhatsApp with their CRM; and more. Since WhatsApp is popular all over the world, brands can leverage this API to talk to customers, no matter their location.
                                                    </p>
                                                </dd>
                                                <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>

                                                    What is WhatsApp Business API?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                    <p>
                                                        The <strong>WhatsApp API</strong> is a solution for medium and large businesses to introduce WhatsApp into their customer support tech stack. It enables them to connect with their customers at scale to share information, answer questions, address concerns/complaints, and even send auto-notifications and alerts. The WhatsApp API is not an app, and there is no front-end interface.
                                                    </p>
                                                </dd>
                                                <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                    Is WhatsApp business API free?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                    <p>
                                                        Unlike the WhatsApp for Business app, the WhatsApp Business API is not free.
                                                    </p>
                                                </dd>
                                                <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                                    How do I get the WhatsApp API?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                    <p>
                                                        <ul>
                                                        <li><strong>Create a Facebook Business Manager account</strong> and a <strong>Facebook Business Page</strong>.</li>
                                                        <li><strong>Apply for WhatsApp Business API</strong> through our assistance , if requires</li>
                                                        <li><strong>Register a phone number</strong> for your WhatsApp business account.</li>
                                                        <li><strong>Set up your WhatsApp Business profile</strong> with your business details.</li>
                                                        <li><strong>Apply Meta for Business Approval </strong> with Business Establishment evidences</li>
                                                        <li><strong>Integrate the WhatsApp API</strong> with your business systems </li>
                                                        <li><strong>Ensure compliance</strong> with WhatsApp’s policies and guidelines.</li>
                                                    </ul>

                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <section className="faq_section type_two">
                                    <div className="block_faq">
                                        <div className="accordion">
                                            <dl>
                                                <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>
                                                    How can I get a free WhatsApp API?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                    <p>
                                                        It’s not possible to get a 100% free version of WhatsApp API for Business. 
                                                        <br/>
                                                        <br/>
                                                        Some BSPs charge companies a per-message fee for  both session messaging and template messaging. Some BSPs like AIWABot charge a minuscule 0.0010 USD per message for outgoing text/media up to 64KB and all incoming text/media. WhatsApp charges BSPs for template messaging, and BSPs in turn charge companies a small fee per message.
                                                    </p>
                                                </dd>
                                                <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>
                                                    How much does WhatsApp API cost?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                    <p>
                                                        The price of the <strong>WhatsApp API</strong> solution differs by BSP. Apart from the setup/deployment cost, BSPs also charge their customers for the two types of WhatsApp API messaging.
                                                        <br/>
                                                        <br/>
                                                        With Session Messaging, businesses can reply to customer messages within 24 hours. WhatsApp does not charge BSPs for these messages, and they may pass on this saving to businesses. But usually, BSPs do charge a small amount per session message (outgoing and incoming) that can
                                                        <br/>
                                                        <br/>
                                                        range from $0.001 to $0.073. AIWABot for example charges only $0.001 per session message.
                                                        <br/>
                                                        <br/>
                                                        Template Messages also attract a small fee (WhatsApp destination charges) that BSPs must pay to WhatsApp. This fee is based on WhatsApp’s rate card and depends on message destination and volume. BSPs then charge companies on a per-message basis.
                                                    </p>
                                                </dd>
                                                <dt className={isActive.key == 7 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(7)}>
                                                    What can I do with the WhatsApp Business API?<span className="icon-play" />
                                                </dt>
                                                <dd className="accordion-content hide" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                    <p>
                                                        With a WhatsApp API, businesses can:<br/>
                                                       1. Talk to customers anywhere in the world<br/>
                                                       2. Share important information, e.g., business address, description, website, email address<br/>
                                                       3. Send timely notifications and alerts<br/>
                                                       4. Bring customers closer to the brand to boost its equity and recall value<br/>
                                                       By partnering with BSP like AIWABot, small/medium businesses also get access to data-rich analytics to gauge the effectiveness of their sales or customer support functions.
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
