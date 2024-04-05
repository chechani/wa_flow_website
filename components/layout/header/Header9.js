import Link from "next/link"
import Navbar from "../Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header9({ handleMobileMenu }) {

    return (
        <>
            <div className="header_area" id="header_contents">
                <div className="header_style_six_nw ver_2">
                    <header className="header header_default style_six get_sticky_header">
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                                    <div className="header_logo_box">
                                        <Link href="/" className="logo navbar-brand">
                                            <img src="assets/images/bot_logo.png" alt="Creote Elementor" className="logo_default" style={{ width: 60 }} />
                                            <img src="assets/images/bot_logo.png" alt="Creote Elementor" className="logo__sticky" style={{ width: 60 }} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                                    <div className="navbar_togglers hamburger_menu" onClick={handleMobileMenu}>
                                        <span className="line" />
                                        <span className="line" />
                                        <span className="line" />
                                    </div>
                                    <div className="header_content_collapse">
                                        <div className="header_menu_box">
                                            <div className="navigation_menu" style={{ float: "left" }}>
                                                <Navbar />
                                            </div>
                                        </div>
                                        <div style={{ float: "right" }}>
                                            {/* <Link href="/free_form" style={{ textDecoration: "none", fontSize: 13, background: "#3CB371" }} onMouseOver={(e) => (e.target.style.background = "#2E8B57")}
                                                onMouseOut={(e) => (e.target.style.background = "#3CB371")}
                                                className="theme-btn five">Get Started for FREE</Link> */}
                                            <a href="#" className="theme-btn five" 
                                            style={{ fontSize: 13, textDecoration: "none", background: "#3CB371", textTransform:"initial", color: "white"}}
                                                onMouseOver={(e) => (e.target.style.background = "#2E8B57")}
                                                onMouseOut={(e) => (e.target.style.background = "#3CB371")}> Book a demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
