import Layout from '@/components/layout/Layout';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Link from 'next/link';

export default function Scale_Level_Form() {

    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const [isAccountVerified, setIsAccountVerified] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [Api_message, setApi_message] = useState("");
    const [successMessage, setSuccessmessage] = useState(false);
    const [otp, setOtp] = useState('');
    const [ScaleFormData, setScaleFormData] = useState({
        customer_name: '',
        email: '',
        mobile_number: '',
        password: '',
        confirm_password: '',
        terms_and_condition: false,
        package_id: "3427"
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setConfirmShowPassword(!confirmShowPassword);
    }

    useEffect(() => {
        // Check if all required fields are filled
        const { customer_name, email, mobile_number, password, confirm_password } = ScaleFormData;
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Regex to validate email format
        const isValid =
            customer_name !== '' &&
            isValidEmail &&
            mobile_number.length === 10 &&
            password !== '' &&
            password === confirm_password;
        setIsSubmitDisabled(!isValid);
    }, [ScaleFormData]);


    const handleClosePage = () => {
        window.location.reload();
    }

    const handleChnageOTP = (e) => {
        const inputValue = e.target.value;
        // Check if the input is numeric and less than or equal to 6 characters
        if (/^\d*$/.test(inputValue) && inputValue.length <= 6) {
            setOtp(inputValue);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile_number") {
            const isValidNumber = /^\d{0,10}$/.test(value);
            if (!isValidNumber) {
                return;
            }
        }
        if (name === "confirm_password" && value !== ScaleFormData.password) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
        setScaleFormData({
            ...ScaleFormData,
            [name]: value
        });
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://foss-erp.in/api/method/smarty_web.ai_wa_bot.send_otp_via_email',
                { email: ScaleFormData.email }
            );
            if (response.data.status_code === 200) {
                setSubmitted(true);
            } else {
                setIsAccountVerified(true);
                setSuccessmessage(true);
                setApi_message(response.data.message);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post(
                'https://foss-erp.in/api/method/smarty_web.ai_wa_bot.verify_otp_code',
                {
                    email: ScaleFormData.email,
                    otp: otp
                }
            );
            if (response.data.status_code === 200) {
                handlePayNowClick();
            } else {
                // Handle error
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    const handlePayNowClick = () => {
        // Check if Razorpay SDK has been loaded
        if (window.Razorpay) {
            // Trigger Razorpay payment
            const options = {
                key: 'rzp_live_aOeZ40yh0k3YN3', // Replace with your Razorpay API key
                amount: 2100000, // Example: 50000 represents Rs. 500.00
                currency: 'INR',
                name: 'Smarty Software Private Limited',
                description: 'Product Description',
                image: '/assets/images/smarty_logo.png', // Replace with your company logo URL
                handler: async function (response) {
                    if (response) {
                        const response = await axios.post('https://foss-erp.in/api/method/smarty_web.ai_wa_bot.create_customer', ScaleFormData);
                        if (response.data.status_code === 200) {
                            setApi_message(response.data.message);
                            setIsAccountVerified(true);
                        } else {
                            alert(response.data.message);
                        }
                    }
                },
                prefill: {
                    name: ScaleFormData.customer_name,
                    email: ScaleFormData.email,
                    contact: ScaleFormData.mobile_number
                }
            };
            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        } else {
            // Razorpay SDK not loaded, handle error or retry loading
            console.error('Razorpay SDK not loaded');
        }
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => {
            console.log('Razorpay SDK loaded');
        };
        document.body.appendChild(script);

        // Cleanup on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyOtp();
    };

    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                {/*===============spacing==============*/}
                <div className="pd_top_50" />
                {/*===============spacing==============*/}
                <div className="auto-container" >
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 pd_left_60 md_pd_left_15">
                            <div className="title_all_box style_one text-left dark_color">
                                <div className="title_sections">
                                    <div className="title">Scale Pricing : Unlock Advance Features</div>
                                </div>
                                <div>
                                    <p>An <strong>OTP</strong>An <strong>OTP</strong> sent to your registered <strong>mail Id</strong>. Access advance top-tier bot solutions tailored to your business needs.</p>
                                </div>
                            </div>
                            <div className="image_boxes style_two">
                                <img src="/assets/images/whatsapp_catalog.png" className="img-fluid" alt="image" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <section className="contact_form_box_all type_one">
                                <div className='container'>
                                    <div className="contact_form_box_inner">
                                        <div className="contact_form_shortcode">
                                            <div role="form" className="wpcf7">
                                                {isAccountVerified ? (
                                                    <div className="text-center">
                                                        {successMessage ? (
                                                            <>
                                                                <i className="fa fa-times-circle fa-5x text-warning">
                                                                </i>
                                                                <h2
                                                                    className="mt-5"
                                                                    style={{ fontWeight: "bold" }}>
                                                                    {Api_message}
                                                                </h2>
                                                                <button
                                                                    className="btn btn-secondary mt-5"
                                                                    style={{ width: 100 }}
                                                                    onClick={handleClosePage}>
                                                                    Close
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="fa fa-check-circle fa-5x text-success">
                                                                </i>
                                                                <h2
                                                                    className="mt-5"
                                                                    style={{ fontWeight: "bold" }}>
                                                                    {Api_message}
                                                                </h2>
                                                                <button
                                                                    className="btn btn-secondary mt-5"
                                                                    style={{ width: 100 }}
                                                                    onClick={handleClosePage}>
                                                                    Close
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="_form">
                                                        {submitted ? (
                                                            <form
                                                                onSubmit={handleSubmit}
                                                                className="wpcf7-form init"
                                                                noValidate="novalidate"
                                                                data-status="init">
                                                                <div className="row">
                                                                    <p>
                                                                        <label
                                                                            style={{ textAlign: "center", fontSize: 20 }}>
                                                                            Enter Otp
                                                                            <br />
                                                                            <span
                                                                                className="wpcf7-form-control-wrap your-number mt-4">
                                                                                <input
                                                                                    type="text"
                                                                                    name="otp"
                                                                                    size={10}
                                                                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false"
                                                                                    placeholder="Enter OTP"
                                                                                    value={otp}
                                                                                    onChange={handleChnageOTP} />
                                                                            </span>
                                                                            <br />
                                                                            <i className="fa fa-key mt-4" />
                                                                            <br />
                                                                        </label>
                                                                    </p>
                                                                    <div
                                                                        className="mt-2"
                                                                        style={{ width: 60 }}>
                                                                        <input type="submit"
                                                                            value="Verify"
                                                                            className="wpcf7-form-control has-spinner wpcf7-submit"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        ) : (
                                                            <form onSubmit={handleSendOTP} method="post" className="wpcf7-form init">
                                                                <p><label> Customer Name<br />
                                                                    <span className="wpcf7-form-control-wrap your-name">
                                                                        <input type="text" name="customer_name" required size={20}
                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                            aria-required="true" aria-invalid="false"
                                                                            placeholder="Enter Customer Name"
                                                                            value={ScaleFormData.customer_name}
                                                                            onChange={handleChange} />
                                                                    </span>
                                                                    <br />
                                                                    <i className="fa fa-user" />
                                                                    <br />
                                                                </label>
                                                                </p>
                                                                <p><label>Email Address<br />
                                                                    <span className="wpcf7-form-control-wrap your-email">
                                                                        <input type="email"
                                                                            name="email"
                                                                            size={20}
                                                                            required
                                                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                            aria-required="true"
                                                                            aria-invalid="false"
                                                                            placeholder="Enter Your Email"
                                                                            value={ScaleFormData.email}
                                                                            onChange={handleChange} />
                                                                    </span>
                                                                    <br />
                                                                    <i className="fa fa-envelope" />
                                                                    <br />
                                                                </label>
                                                                </p>
                                                                <p><label>Mobile Number<br />
                                                                    <span className="wpcf7-form-control-wrap your-number">
                                                                        <input type="tel"
                                                                            name="mobile_number"
                                                                            size={10}
                                                                            required
                                                                            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                                            aria-invalid="false"
                                                                            placeholder="Enter Your Number"
                                                                            value={ScaleFormData.mobile_number}
                                                                            onChange={handleChange} />
                                                                    </span>
                                                                    <br />
                                                                    <i className="fa fa-phone" />
                                                                    <br />
                                                                </label>
                                                                </p>
                                                                <p><label>Password<br />
                                                                    <span className="wpcf7-form-control-wrap your-password">
                                                                        <input
                                                                            type={showPassword ? 'text' : 'password'}
                                                                            name="password"
                                                                            size={10}
                                                                            required
                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                            aria-required="true"
                                                                            aria-invalid="false"
                                                                            placeholder="Enter Your Password"
                                                                            value={ScaleFormData.password}
                                                                            onChange={handleChange} />
                                                                    </span>
                                                                    <br />
                                                                    <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
                                                                    <br />
                                                                </label>
                                                                </p>
                                                                <p>
                                                                    <label>Confirm Password<br />
                                                                        <span
                                                                            className="wpcf7-form-control-wrap your-password">
                                                                            <input
                                                                                type={confirmShowPassword ? 'text' : 'password'}
                                                                                name="confirm_password"
                                                                                size={10}
                                                                                required
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter Confirm Password"
                                                                                value={ScaleFormData.confirm_password}
                                                                                style={{ borderColor: passwordMismatch ? 'red' : '' }}
                                                                                onChange={handleChange} />
                                                                        </span>
                                                                        <br />
                                                                        <i className={`fa ${confirmShowPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility1} style={{ cursor: 'pointer' }} />
                                                                        <br />
                                                                    </label>
                                                                </p>
                                                                {/* <p style={{ marginTop: 10 }}>
                                                                    <label>
                                                                        <span> <input type='checkbox'
                                                                            onChange={(e) => setScaleFormData({ ...ScaleFormData, terms_and_condition: e.target.checked })}
                                                                            style={{ width: 15 }} /></span>
                                                                        <span style={{ paddingLeft: 15 }}>I agree to the <Link style={{ textDecoration: "none" }} href="/terms&condition">Terms of Condition</Link> & <Link style={{ textDecoration: "none" }} href="/privacypolicy">Privacy Policy</Link></span>
                                                                    </label>
                                                                </p> */}
                                                                <p style={{ display: "flex", flexDirection: "row", fontSize: 14 }}>
                                                                    <input type="checkbox"
                                                                        onChange={(e) => setScaleFormData({ ...ScaleFormData, terms_and_condition: e.target.checked })}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                    &nbsp; I agree to the &nbsp;<Link style={{ textDecoration: "none" }} href="/terms&condition"> Terms of Condition &nbsp;</Link> & <Link style={{ textDecoration: "none" }} href="/privacypolicy">&nbsp;Privacy Policy</Link>
                                                                </p>

                                                                <p style={{ width: 100 }}>
                                                                    <input
                                                                        type="submit"
                                                                        disabled={isSubmitDisabled}
                                                                        value="Submit"
                                                                        className="theme-btn five"
                                                                        style={isSubmitDisabled ? { backgroundColor: 'gray', color: 'white', cursor: 'not-allowed' } : {}}
                                                                    /></p>
                                                            </form>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </div>
            </Layout>
        </>
    )
}
