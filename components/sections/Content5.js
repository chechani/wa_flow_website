import { useEffect, useRef } from "react";

export default function Content5() {
    const playerRef = useRef(null);

    useEffect(() => {
        // Create a script element to load the YouTube Iframe API
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Function to initialize the YouTube player
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId: "wug_OWVoXsY", // Replace with your video ID
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange // Add event listener for state change
                },
                playerVars: {
                    autoplay: 1,
                    mute: 1, // Optional: Mute the video if desired
                },
            });
        };
    }, []);

    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            // Video has ended, play it again
            event.target.playVideo();
        }
    };

    return (
        <>
            <section className="content-section" style={{ background: "#f0f3f9", height: "700px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12" style={{ marginTop: "100px" }}>
                            <div className="title_all_box style_one dark_color">
                                <div className="title_sections">
                                    <div className="before_title mt-3" style={{ textDecoration: "none" }}>WhatsApp Flows</div>
                                    <div className="title mt-3">Boost performance by creating more seamless and customized experiences for customers.</div>
                                    <div className="description_box mt-3">
                                        <p>From appointment bookings to signups, WhatsApp Flows gets results by making customer interactions more streamlined and convenient.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="simple_image_boxes">
                                <div className="parallax_cover" style={{marginLeft:"50px", position: 'relative', width: '100%', paddingBottom: '177.78%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                    <div id="youtube-player" style={{ position: 'absolute', top: '10%', left: '10%', width: '60%', height: '50%', borderRadius: "20px" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
