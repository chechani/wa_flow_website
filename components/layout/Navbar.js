import Link from "next/link"
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()

    return (
        <>
            <ul id="myNavbar" className="navbar_nav">
                <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/" className="dropdown-toggle nav-link">
                        <span style={{fontWeight:800}}>HOME</span>
                    </Link>
                </li>


                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/#" className="dropdown-toggle nav-link">
                        <span style={{fontWeight:800}}>BY INDUSTRY</span>
                    </Link>
                    <ul className="dropdown-menu">
                        <li className="menu-item  nav-item">
                            <Link href="/healthcare" className="dropdown-item nav-link">
                                <span style={{fontWeight:800}}>HEALTHCARE</span>
                            </Link>
                        </li> 
                        <li className="menu-item  nav-item">
                            <Link href="/welcome" className="dropdown-item nav-link">
                                <span style={{fontWeight:800}}>SMALL BUSINESSES</span>
                            </Link>
                        </li>                        
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>


                <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/pricing-packages" className="dropdown-toggle nav-link">
                        <span style={{fontWeight:800}}>PRICING</span>
                    </Link>
                   
                </li>
                <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/Products_Services" className="dropdown-toggle nav-link">
                        <span style={{fontWeight:800}}>SERVICES</span>
                    </Link>
                   
                </li>
                <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                    <Link href="/Demo" className="dropdown-toggle nav-link">
                        <span>Excel To Json</span>
                    </Link>
                   
                </li>
            </ul>
        </>
    )
}
