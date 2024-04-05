import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="crt_mobile_menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="icon-close" /></div>
                    <div className="menu-outer">
                        <ul id="myNavbar" className="navbar_nav">
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/" className="dropdown-toggle nav-link">
                                    <span>HOME</span>
                                </Link>
                            </li>
                            <li className="menu-item menu-item-has-children dropdown nav-item">
                                <Link href="#" className="dropdown-toggle nav-link">
                                    <span>BY INDUSTRY</span>
                                </Link>
                                <ul className="dropdown-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li className="menu-item  nav-item">
                                        <Link href="/healthcare" className="dropdown-item nav-link">
                                            <span>HEALTHCARE</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item  nav-item">
                                        <Link href="/welcome" className="dropdown-item nav-link">
                                            <span>SMALL BUSINESSES</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-down" />
                                </div>
                            </li>
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/pricing-packages" className="dropdown-toggle nav-link">
                                    <span>PRICING</span>
                                </Link>

                            </li>
                            <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                                <Link href="/Products_Services" className="dropdown-toggle nav-link">
                                    <span>SERVICES</span>
                                </Link>
                            </li>
                        </ul>
                        <div style={{ float: "right" }}>
                            <Link href="/free_form" style={{ textDecoration: "none", fontSize: 13, background: "#3CB371" }} onMouseOver={(e) => (e.target.style.background = "#2E8B57")}
                                onMouseOut={(e) => (e.target.style.background = "#3CB371")}
                                className="theme-btn five mt-2">Get Started for FREE</Link>
                            <a href="https://cal.com/aiwabot/whatsapp-ai-bots" className="theme-btn five mt-2" style={{ fontSize: 13, textDecoration: "none", background: "#FFA500", color: "white" }} onMouseOver={(e) => (e.target.style.background = "#DAA520")}
                                onMouseOut={(e) => (e.target.style.background = "#FFA500")}> Schedule a Demo
                            </a>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}
