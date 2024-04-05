import Layout from '@/components/layout/Layout';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Free_Form() {

    const route = useRouter();

    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const [Api_message, setApi_message] = useState("");
    const [successMessage, setSuccessmessage] = useState(false);
    const [isAccountVerified, setIsAccountVerified] = useState(false);
    const [otp, setOtp] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [newFormData, setNewFormData] = useState({
        customer_name: '',
        email: '',
        mobile_number: '',
        password: '',
        confirm_password: '',
        terms_and_condition: false,
        package_id: "3364"
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setConfirmShowPassword(!confirmShowPassword);
    }

    useEffect(() => {
        // Check if all required fields are filled
        const { customer_name, email, mobile_number, password, confirm_password } = newFormData;
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Regex to validate email format
        const isValid =
            customer_name !== '' &&
            isValidEmail &&
            mobile_number.length === 10 &&
            password !== '' &&
            password === confirm_password;
        setIsSubmitDisabled(!isValid);
    }, [newFormData]);



    const handleClosePage = () => {
        route.push("https://web.aiwabot.in/login")
    }

    const handleClosePage1 = () => {
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
        if (name === "confirm_password" && value !== newFormData.password) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
        setNewFormData({
            ...newFormData,
            [name]: value
        });
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://foss-erp.in/api/method/smarty_web.ai_wa_bot.send_otp_via_email',
                { email: newFormData.email }
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


    const verifyOtp = () => {
        // Make API call to verify OTP
        axios.post(`https://foss-erp.in/api/method/smarty_web.ai_wa_bot.verify_otp_code?email=${newFormData.email}&otp=${otp}`)
            .then(response => {
                if (response.data.status_code === 200) {
                    // Make second API call to create customer
                    axios.post('https://foss-erp.in/api/method/smarty_web.ai_wa_bot.create_customer', newFormData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            if (response.data.status_code === 200) {
                                setApi_message(response.data.message);
                                setIsAccountVerified(true);
                            } else {
                                setIsAccountVerified(true);
                                setSuccessmessage(true);
                                setApi_message(response.data.message);
                            }
                        })
                        .catch(error => {
                            console.error("Error creating customer:", error);
                        });
                } else {
                    // Handle error
                    alert(response.data.message)
                }
            })
            .catch(error => {
                console.error("Error verifying OTP:", error);
            });
    };


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
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 pd_left_60 md_pd_left_15">
                            <div className="title_all_box style_one text-left dark_color">
                                <div className="title_sections">
                                    <div className="title">Free Trial : Enterprise Bot Solutions</div>
                                </div>
                                <div>
                                    <p>An <strong>OTP</strong> will be sent to your registered <strong>mail Id</strong>. Enter the OTP on the next screen to unlock your free trial</p>
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
                                                                    onClick={handleClosePage1}>
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
                                                                    className="btn btn-success mt-5"
                                                                    style={{ width: 100 }}
                                                                    onClick={handleClosePage}>
                                                                    Next
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
                                                                    <p><label
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
                                                                    <div className="mt-2" style={{ width: 60 }}>
                                                                        <input type="submit"
                                                                            value="Verify"
                                                                            className="wpcf7-form-control has-spinner wpcf7-submit"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        ) : (
                                                            <form
                                                                onSubmit={handleSendOTP}
                                                                method="post"
                                                                className="wpcf7-form init">
                                                                <p>
                                                                    <label> Customer Name
                                                                        <br />
                                                                        <span
                                                                            className="wpcf7-form-control-wrap your-name">
                                                                            <input
                                                                                type="text"
                                                                                name="customer_name"
                                                                                required size={20}
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter Customer Name"
                                                                                value={newFormData.customer_name}
                                                                                onChange={handleChange} />
                                                                        </span>
                                                                        <br />
                                                                        <i className="fa fa-user" />
                                                                        <br />
                                                                    </label>
                                                                </p>
                                                                <p>
                                                                    <label>Email Address<br />
                                                                        <span
                                                                            className="wpcf7-form-control-wrap your-email">
                                                                            <input
                                                                                type="email"
                                                                                name="email"
                                                                                size={20}
                                                                                required
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter Email Address"
                                                                                value={newFormData.email}
                                                                                onChange={handleChange} />
                                                                        </span>
                                                                        <br />
                                                                        <i className="fa fa-envelope" />
                                                                        <br />
                                                                    </label>
                                                                </p>
                                                                <p>
                                                                    <label>Mobile Number<br />
                                                                        <span
                                                                            className="wpcf7-form-control-wrap your-number">
                                                                            <input
                                                                                type="tel"
                                                                                name="mobile_number"
                                                                                size={10}
                                                                                required
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter Mobile Number"
                                                                                value={newFormData.mobile_number}
                                                                                onChange={handleChange} />
                                                                        </span>
                                                                        <br />
                                                                        <i className="fa fa-phone" />
                                                                        <br />
                                                                    </label>
                                                                </p>
                                                                <p>
                                                                    <label>Password<br />
                                                                        <span
                                                                            className="wpcf7-form-control-wrap your-password">
                                                                            <input
                                                                                type={showPassword ? 'text' : 'password'}
                                                                                name="password"
                                                                                size={10}
                                                                                required
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter Password"
                                                                                value={newFormData.password}
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
                                                                                value={newFormData.confirm_password}
                                                                                style={{ borderColor: passwordMismatch ? 'red' : '' }}
                                                                                onChange={handleChange} />
                                                                        </span>
                                                                        <br />
                                                                        <i className={`fa ${confirmShowPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility1} style={{ cursor: 'pointer' }} />
                                                                        <br />
                                                                    </label>
                                                                </p>

                                                                <p style={{display: "flex", flexDirection: "row",fontSize:14}}>
                                                                    <input type="checkbox"
                                                                        onChange={(e) => setNewFormData({ ...newFormData, terms_and_condition: e.target.checked })}
                                                                        aria-invalid="false"
                                                                        style={{ width: 15 }} />
                                                                        &nbsp; I agree to the &nbsp;<Link style={{ textDecoration: "none" }} href="/terms&condition"> Terms of Condition &nbsp;</Link> & <Link style={{ textDecoration: "none" }} href="/privacypolicy">&nbsp;Privacy Policy</Link>
                                                                </p>
                                                                <p className='mt-2' style={{ width: 100 }}>
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
