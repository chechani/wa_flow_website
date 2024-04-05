import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect } from "react";
import { useState } from "react";

export default function SmartyWhy() {
    const [benefitsData, setBenefitsData] = useState([]);


    const segment = "Smarty Home";

    useEffect(() => {
        fetch(`https://smartysoftware.in/api/method/professional.web.get_usp?segment=${encodeURIComponent(segment)}`)
            .then(response => response.json())
            .then(data => {
                const sortedData = data.message.sort((a, b) => a.usp_order - b.usp_order);
                setBenefitsData(sortedData);
                console.log(sortedData)
                setExpanded(Array(sortedData.length).fill(false));

            })
            .catch(error => console.log(error));
    }, [segment]);

    return (
        <>
            <Layout breadcrumbTitle="Why Us">
                <div>
                    <section className="image-section">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                {benefitsData.map((benefit, index) => (
                                    <div
                                        className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-4 mb-xl-0"
                                        key={index}
                                    >
                                        <div className="icon_box_all style_four">
                                            <div className="icon_content icon_imgs">
                                                <div className="icon">
                                                    <img
                                                        src={`https://smartysoftware.in${benefit.image}`}
                                                        className="img-fluid svg_image"
                                                        alt="icon png"
                                                        style={{ marginLeft: "10px" }}
                                                    />
                                                    <img
                                                        src="/assets/images/shape-1-small.png"
                                                        className="shape"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="txt_content">
                                                    <h3>
                                                        <Link href="#">{benefit.name}</Link>
                                                    </h3>
                                                    <p>{benefit.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </section>

                </div>

            </Layout>
        </>
    )
}