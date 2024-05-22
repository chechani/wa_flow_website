import demoContent from "../../pages/elements/demoContent.json"
import { useState,useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Healthcare from "./healthcare_videos";
import TaskManagement from "./task_management_videos";
import ICIElection from "./ici_election_videos";
import axios from "axios";
import Others from "./others_videos";

export default function Demo() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const category1 = categoryData[2];
  const category2 = categoryData[3];
  const category3 = categoryData[1];
  const category4 = categoryData[5];
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const openModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setShowModal(false);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://foss-erp.in/api/method/smarty_web.api.get_category');
        setCategoryData(response.data.message);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchVideos();

  }, []);

  return (
    <>
      {demoContent.Heading.map((heading) => (
        <div
          style={{
            textAlign: "center",
            marginTop: "autox",
            marginBottom: "50px",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>{heading.head}</h1>
        </div>
      ))}

      {/* First Container */}

      <section className="price-plan-tab-section">
        <div className="container">
          <div className="row gutter_30px">
            <div className="col-lg-12">
              <div className="price_plan_with_tab price_tb_style_one">
                <div className="tab_pricing_list">
                  {demoContent.DemoFor.map((demofor) => (
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={
                            activeIndex === 1 ? "nav-link active" : "nav-link"
                          }
                          onClick={() => handleOnClick(1)}
                          style={{ fontSize: "18px" }}
                        >
                          {demofor.Healthcare}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={
                            activeIndex === 2 ? "nav-link active" : "nav-link"
                          }
                          onClick={() => handleOnClick(2)}
                          style={{ fontSize: "18px" }}
                        >
                          {demofor.Task_Management}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={
                            activeIndex === 3 ? "nav-link active" : "nav-link"
                          }
                          onClick={() => handleOnClick(3)}
                          style={{ fontSize: "18px" }}
                        >
                          {demofor.ICI_Election}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={
                            activeIndex === 4 ? "nav-link active" : "nav-link"
                          }
                          onClick={() => handleOnClick(4)}
                          style={{ fontSize: "18px" }}
                        >
                          {demofor.Others}
                        </button>
                      </li>
                    </ul>
                  ))}
                </div>
                <div
                  className="tab-content price_tab_content"
                  id="myTabContent"
                >
                  {/* For Healthcare */}
                  <div
                    className={
                      activeIndex === 1
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <div
                      className="tab-content price_tab_content"
                      id="myTabContent"
                    >
                      <Healthcare openModal={openModal} category={category3}/>
                    </div>
                  </div>
                  {/* For Task Management */}
                  <div
                    className={
                      activeIndex === 2
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <div
                      className="tab-content price_tab_content"
                      id="myTabContent"
                    >

                      <TaskManagement openModal={openModal} category={category2}/>
                    </div>
                  </div>
                  {/* For ICI Election */}
                  <div
                    className={
                      activeIndex === 3
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <div
                      className="tab-content price_tab_content"
                      id="myTabContent"
                    >

                      <ICIElection openModal={openModal} category={category1}/>
                    </div>
                  </div>
                    {/* For Others */}
                    <div
                    className={
                      activeIndex === 4
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <div
                      className="tab-content price_tab_content"
                      id="myTabContent"
                    >

                      <Others openModal={openModal} category={category4}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
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
  );
}
