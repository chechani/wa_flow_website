import dynamic from 'next/dynamic'
import Link from "next/link"

export default function ExcelToJson() {
    return (
        <>
            <section className="contact-box-sections">
                <div className="container">
                    <div className="price_plan_box style_one">
                        <div className="inner_box">
                            <div className="row">
                                <div className="col-lg-12 col-12 mt-3">
                                    <h1 className="text-center" style={{ fontWeight: "bold" }}>Effortless Excel to JSON Conversion</h1>
                                    <div>
                                        <p className="text-center mt-4" style={{ fontSize: "18px" }}>Convert Excel to JSON seamlessly with our user-friendly form. Effortlessly transform your spreadsheet data into structured JSON format for easy integration. Say goodbye to manual entry and formatting headaches</p>
                                    </div>
                                    <div className="text-center mt-4">
                                    <Link href="https://app.bhilwarahealthcare.in/build-wa-flow-json-from-excel" style={{ textDecoration: "none" }}>
                                    <button
                                        className="theme-btn three"
                                        target="_blank"
                                        rel="nofollow"
                                    >
                                        <span>
                                            click now
                                        </span>
                                    </button>                                    
                                    </Link>
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
        </>
    )
}
