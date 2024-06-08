import Link from "next/link";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function TaskManagement(props) {
    const [TaskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://foss-erp.in/api/method/smarty_web.api.get_videos?category=${props.category}`);
            const videos = response.data.data.map(video => {
                let videoId = null;

                try {
                    const videoUrl = new URL(video.url);
                    if (videoUrl.hostname === 'www.youtube.com' && videoUrl.searchParams.has('v')) {
                        videoId = videoUrl.searchParams.get('v');
                    } else if (videoUrl.hostname === 'youtu.be') {
                        videoId = videoUrl.pathname.slice(1);
                    }
                } catch (error) {
                    console.error('Invalid URL:', video.url);
                }

                return {
                    ...video,
                    embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : null
                };
            });
            setTaskData(videos);
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
        return <div>Loading...</div>; // Loading state
    }

    return (
        <>
            {/* <div className="row">
                {TaskData.map((item, index) => (
                    <div key={index} className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
                                            justifyContent: "space-between", 
                                            marginTop: "auto",
                                            bottom: 0,
                                        }}
                                    >
                                        <div>
                                            <button
                                                onClick={() => props.openModal(item.embedUrl)}
                                                className="theme-btn one"
                                                target="_blank"
                                                rel="nofollow"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    background: "white",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/youtube.png"
                                                    alt="WhatsApp Image"
                                                    style={{
                                                        width: "28px",
                                                        borderRadius: "50px",
                                                        textDecoration: "none",
                                                    }}
                                                />
                                                <span style={{ marginLeft: "5px", color: "black" }}>
                                                    play Video
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="row">
                {TaskData.map((item, index) => (
                    <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="choose_box type_one">
                            <div className="image_box">
                                <img
                                    src="/assets/images/Appointment_Listing_and_Encounter_Status.jpg"
                                    className="img-fluid svg_image"
                                    style={{
                                        width: "70px",
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
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <p style={{ height: "auto" }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                            <img
                                                src="/assets/images/healthcare5.png"
                                                className="img-fluid svg_image"
                                                alt="icon png"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="theme_btn_all color_two"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "auto",
                                            bottom: 0,
                                        }}
                                    >
                                        <div style={{ marginTop: "20px" }}>
                                            <button
                                                onClick={() => props.openModal(item.embedUrl)}
                                                className="theme-btn one"
                                                target="_blank"
                                                rel="nofollow"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    background: "white",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <img
                                                    src="/assets/images/youtube.png"
                                                    alt="WhatsApp Image"
                                                    style={{
                                                        width: "28px",
                                                        borderRadius: "50px",
                                                        textDecoration: "none",
                                                    }}
                                                />
                                                <span style={{ marginLeft: "5px", color: "black" }}>
                                                    Play Video
                                                </span>
                                            </button>
                                        </div>
                                        <div style={{ marginTop: "20px" }}>
                                            <button
                                                // onClick={() => openModal(item.embedUrl)}
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
                                                    src="/assets/images/whatsapp_flow1.png"
                                                    alt="Web Icon"
                                                    style={{
                                                        width: "25px",
                                                        borderRadius: "50px",
                                                        textDecoration: "none",
                                                    }}
                                                />
                                                <span style={{ marginLeft: "5px", color: "black" }}>
                                                    Show Preview
                                                </span>
                                            </button>
                                        </div>
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
