import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from 'axios';
import Healthcare from "@/pages/elements/healthcare_videos";
import TaskManagement from "@/pages/elements/task_management_videos";
import ICIElection from "@/pages/elements/ici_election_videos";
import Others from "@/pages/elements/others_videos";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PortfolioFilter1Col() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("healthcare"); // Default to "healthcare"
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setVideoUrl("");
    setShowModal(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://foss-erp.in/api/method/smarty_web.api.get_category');
        setCategories(response.data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const renderComponent = (key) => {
    const category = categories.find(cat => cat.toLowerCase().replace(/\s/g, "_") === key);
    switch (key) {
      case "healthcare":
        return <Healthcare openModal={openModal} category={category} />;
      case "task_management":
        return <TaskManagement openModal={openModal} category={category} />;
      case "icai":
        return <ICIElection openModal={openModal} category={category} />;
      case "other":
        return <Others openModal={openModal} category={category} />;
      default:
        return null;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="fliter_group" style={{ textAlign: "center!important" }}>
            <ul className="project_filter dark clearfix">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={activeBtn(category.toLowerCase().replace(/\s/g, "_"))}
                  onClick={handleFilterKeyChange(category.toLowerCase().replace(/\s/g, "_"))}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container clearfix">
        <div className="row clearfix">
          <div className={`grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12 ${filterKey}`}>
            <div className="project_box style_three clearfix">
              {renderComponent(filterKey)}
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} style={{ marginTop: "70px" }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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
