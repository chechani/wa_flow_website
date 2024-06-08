import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./demo_videos.module.css";
import Healthcare from "@/pages/elements/healthcare_videos";
import TaskManagement from "@/pages/elements/task_management_videos";
import ICIElection from "@/pages/elements/ici_election_videos";
import Others from "@/pages/elements/others_videos";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Election from "./election_videos";

const componentMap = {
    "Healthcare": Healthcare,
    "Task Management": TaskManagement,
    "ICAI": ICIElection,
    "Election": Election,
    "Other": Others,
};

const DemoVideos = () => {
    const [filterKey, setFilterKey] = useState("");
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
                const response = await axios.get(
                    "https://foss-erp.in/api/method/smarty_web.api.get_category"
                );
                const fetchedCategories = response.data.message
                    .filter(category => category)
                    .map(category => ({
                        name: category,
                        label: category
                    }));
                setCategories(fetchedCategories);
                if (fetchedCategories.length > 0) {
                    setFilterKey(fetchedCategories[0].name);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleTabClick = (key) => {
        setFilterKey(key);
    };

    // Retrieve the component based on the selected category
    const ActiveComponent = componentMap[filterKey] || null;

    return (
        <>
            <div className={styles.tabsContainer}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <>
                        <div className={styles.tabButtons}>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`${styles.tabButton} ${filterKey === category.name ? styles.active : ""
                                        }`}
                                    onClick={() => handleTabClick(category.name)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            {/* Render the selected component or a message if none selected */}
                            {ActiveComponent ? <ActiveComponent category={filterKey} openModal={openModal} /> : <p>Select a tab to view content.</p>}
                        </div>
                    </>
                )}

                {/* Modal for displaying videos */}
                <Modal show={showModal} onHide={closeModal} centered style={{ marginTop: '20px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Demo Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            width="100%"
                            height="300px"
                            src={videoUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Modal.Body>
                </Modal>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_50" />
            {/*===============spacing==============*/}
        </>
    );
};

export default DemoVideos;
