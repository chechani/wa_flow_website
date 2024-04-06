
import Link from "next/link"
export default function Footer1({ }) {
    return (
        <>
            <div className="footer_area footer_sticky_enable_foo footer_eight" id="footer_contents">
                <hr style={{color:"lightgray"}}/>
                <div className="footer-copyright bg_light">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="footer_copy_content" style={{color:"#4a4e56",fontSize:13,textAlign:"center"}}>
                                   Copyright © {new Date().getFullYear()} <Link style={{textDecoration:"none"}} href="https://smartysoft.in">Smarty Software Pvt. Ltd.</Link>. All Rights
                                    Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_10" />
                    {/*===============spacing==============*/}
                </div>
            </div>

        </>
    )
}
