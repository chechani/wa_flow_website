import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function SmartyServices() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const [activeIndex2, setActiveIndex2] = useState(1);
    const handleOnClick2 = (index) => {
        setActiveIndex2(index);
    };

    const [features, setFeatures] = useState([]);

    const segment = "Smarty Home";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://smartysoftware.in/api/method/professional.web.get_solutions?segment=${encodeURIComponent(segment)}`
                );
                const data = await response.json();
                setFeatures(data.message);
                console.log(data.message)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [segment]);


    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

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
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="Smarty Solutions">
                <div>
                    {/*-service end-*/}
                    <section className="service-section-two bg_light_1">
                        {/*===============spacing==============*/}
                        <div className="pd_top_90" />
                        {/*===============spacing==============*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title_all_box style_one text-center dark_color">
                                        <div className="title_sections">
                                            <div className="before_title">Smarty</div>
                                            <h2>Solutions We Offer</h2>
                                        </div>
                                        {/*===============spacing==============*/}
                                        <div className="pd_bottom_50" />
                                        {/*===============spacing==============*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row gutter_40px">
                                {features.map((feature, index) => (
                                    <div
                                        className="col-xxl-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                        key={index}
                                    >
                                        <div className="service_box style_three dark_color">
                                            <div className="service_content">
                                                <div className="content_inner">
                                                    <span style={{backgroundColor:"whiteSmoke"}}>
                                                        <img src={"https://smartysoftware.in/" + feature.image} alt="Icon" style={{width:"60px",height:"60px"}} />
                                                    </span>
                                                    <small className="nom">{index + 1}</small>
                                                    <h2>
                                                        <Link href="#">{feature.name}</Link>
                                                    </h2>
                                                    <h6>
                                                        <Link href="#">{feature.short_title}</Link>
                                                    </h6>
                                                    <p>{feature.descriptive_title}</p>
                                                    <Link href="#" className="read_more">
                                                        Read more <i className="icon-right-arrow" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}