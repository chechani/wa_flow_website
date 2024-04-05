import Layout from '@/components/layout/Layout';
import { useState } from 'react';

export default function ElementFaq() {
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
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="title_all_box style_seven text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Frequently Asked Questions
                                    </div>
                                    <div className="title" style={{ fontSize: 40 }}>Any Questions? Answered</div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_50" />
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
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                                    <section className="faq_section type_two">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 1 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(1)}>
                                                        Why Telegram chatbot is important?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                        <p>
                                                            It is now the most popular Messaging platform next to Facebook Messenger, Instagram DM, and WhatsApp. However, all these Facebook stuff has limitations to broadcasting messages, such as a 24 hour rule that prohibits bulk sending. Telegram does not have that limitation.That is why telegram is better suited to broadcasting. Let`s not limit our responses to email marketing. We should also build alternative lists to broadcast. We can do so using Telegram. Open rate in telegram is more than 80%.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 2 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(2)}>

                                                        Is there any limit to how many bulk messages you may send to Telegram users?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                        <p>
                                                            No, there aren`t any restrictions. You can send as many messages as you want at any moment. Unlike WhatsApp, there is no 24-hour rule. That is the Telegram Bot`s power. Subscribers can, of course, unsubscribe or block your bot at any moment.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 3 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(3)}>
                                                        Is it possible to import subscribers from another provider into Telegram Bot?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                        <p>
                                                            Yes, you may use AIWABot to import your current bot subscriber list from other chat platforms. All you have to do now is get your existing subscribers Chat ID. Then import it into AIWABot as a CSV file.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 4 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(4)}>
                                                        Is a new phone number required for the WhatsApp Business Platform?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                        <p>
                                                            You must completely transfer an existing number to the business platform if you wish to use it in the WhatsApp customer or business app. You won`t be able to access the WhatsApp customer or business app after the number is moved. For further information, go to This Link and migrate App Phone Number to Business Platform.
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <section className="faq_section type_two">
                                        <div className="block_faq">
                                            <div className="accordion">
                                                <dl>
                                                    <dt className={isActive.key == 5 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(5)}>
                                                        Does WhatsApp charge for sending messages?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                        <p>
                                                            Facebook does indeed have a messaging fee structure. Businesses using the WhatsApp Business Platform are charged per conversation. Each WhatsApp Business account will receive 1K free conversation per month. The pricing plans are available at WhatsApp Pricing
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 6 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(6)}>
                                                        Who is going to oversee WhatsApp Business Platform?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                        <p>
                                                            You must control your business accounts, WhatsApp business account, phone number, and payment mechanism in order to use WhatsApp. Nothing is under our control. You`ll be in charge of everything.
                                                        </p>
                                                    </dd>
                                                    <dt className={isActive.key == 7 ? "faq_header active" : "faq_header"} onClick={() => handleToggle(7)}>
                                                        Do I need business verification & approval from WhatsApp?<span className="icon-play" />
                                                    </dt>
                                                    <dd className="accordion-content hide" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                        <p>
                                                            No, the business and the app`s approval are not required. Business verification is necessary, nevertheless, if you wish to include your phone number and the name of your company. alternatively, no. Also, approval of the app is not necessary.
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
            </Layout>
        </>
    )
}
