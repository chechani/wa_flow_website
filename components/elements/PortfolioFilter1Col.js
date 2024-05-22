
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"
import Healthcare from "@/pages/elements/healthcare_videos";
import TaskManagement from "@/pages/elements/task_management_videos";
import ICIElection from "@/pages/elements/ici_election_videos";
import Others from "@/pages/elements/others_videos";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioFilter1Col() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');


    const openModal = (url) => {
        console.log("Modal opened with URL:", url);
        setVideoUrl(url);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setVideoUrl('');
        setShowModal(false);
      };


    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".project_container", {
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "current" : "")

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="fliter_group" style={{ textAlign: 'center!important' }}>
                        <ul className="project_filter dark clearfix">
                            <li className={activeBtn("healthcare")} onClick={handleFilterKeyChange("healthcare")}>Healthcare</li>
                            <li className={activeBtn("task_management")} onClick={handleFilterKeyChange("task_management")}>Task Management
                            </li>
                            <li className={activeBtn("icai_election")} onClick={handleFilterKeyChange("icai_election")}>ICAI Election</li>
                            <li className={activeBtn("others")} onClick={handleFilterKeyChange("others")}>Others</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project_container clearfix">
                <div className="row clearfix">
                    <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12 healthcare">
                        <div className="project_box style_three clearfix">
                        <Healthcare openModal={openModal}/>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  task_management">
                        <div className="project_box style_three clearfix"> 
                              <TaskManagement openModal={openModal}/>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  icai_election">
                        <div className="project_box style_three clearfix">
                        <ICIElection openModal={openModal}/>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  others">
                        <div className="project_box style_three clearfix">
                         <Others openModal={openModal}/>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={closeModal} style={{ marginTop: "70px" }}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {/* Embed the video using an iframe */}
          {videoUrl && (
            <iframe
              width="100%"
              height="300"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
        </>
    )
}
