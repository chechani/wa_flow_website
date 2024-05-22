import Link from "next/link";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Others(props) {
    const [otherData, setOtherData] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const other_category = props.category;


    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://foss-erp.in/api/method/smarty_web.api.get_videos?category=${other_category}`);
            const videos = response.data.data.map(video => ({
                ...video,
                embedUrl: `https://www.youtube.com/embed/${new URL(video.url).searchParams.get("v")}`
            }));
            setOtherData(videos);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="row">
                {otherData.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="choose_box type_one">
                            <div className="image_box">
                                <img
                                    src="/assets/images/register_doctor.jpg"
                                    className="img-fluid svg_image"
                                    style={{
                                        width: "90px",
                                        borderRadius: "30px",
                                    }}
                                    alt="icon png"
                                />
                            </div>
                            <div className="content_box" style={{ height: "auto" }}>
                                <span
                                    className="step_no"
                                    style={{
                                        background: "rgb(32, 178, 170)",
                                        color: "white",
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="text_box">
                                    <h2>
                                        <Link href="#" style={{ textDecoration: "none" }}>
                                            {item.title}
                                        </Link>
                                    </h2>
                                    <p style={{ height: "auto" }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    <div
                                        className="theme_btn_all color_two"
                                        style={{
                                            display: "flex",
                                            marginTop: "auto",
                                            // position: "absolute",
                                            bottom: 0,
                                        }}
                                    >
                                        <button
                                            onClick={() => props.openModal(item.embedUrl)}
                                            className="theme-btn one"
                                            target="_blank"
                                            rel="nofollow"
                                            style={{
                                                marginRight: "5px",
                                                display: "flex",
                                                alignItems: "center",
                                                background: "white",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <img
                                                src="/assets/images/whatsapp_flow1.png"
                                                alt="WhatsApp Image"
                                                style={{
                                                    width: "28px",
                                                    borderRadius: "50px",
                                                    textDecoration: "none",
                                                }}
                                            />
                                            <span style={{ marginLeft: "5px", color: "black" }}>
                                                Wa Bot
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => props.openModal(item.embedUrl)}
                                            className="theme-btn one"
                                            target="_blank"
                                            rel="nofollow"
                                            style={{
                                                marginRight: "5px",
                                                display: "flex",
                                                alignItems: "center",
                                                background: "#F0F0F0",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <img
                                                src="/assets/images/Web_icon.png"
                                                alt="Web Icon"
                                                style={{
                                                    width: "25px",
                                                    borderRadius: "50px",
                                                    textDecoration: "none",
                                                }}
                                            />
                                            <span style={{ marginLeft: "10px", color: "black" }}>
                                                Web App
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
