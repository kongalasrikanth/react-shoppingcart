import React from 'react';
import { FaInstagram } from "react-icons/fa"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { Link } from "react-router-dom";


function Footer1() {
    return (
        <>
            <hr />
            <footer className="footer ">
                <div className="container">
                    <div className="foot-1">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='foot_ac'>
                                    <h6>Account</h6>
                                    <ul className="foot_ac_1">
                                        <li><Link to="/">Sign In</Link></li>
                                        <li><Link to="/signup">Register</Link></li>
                                        <li><a href="/">Order Status</a> </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='footer_about'>
                                    <h6>About Us</h6>
                                    <ul className="foot_about">
                                        <li><a href="/">Our Story</a></li>
                                        <li><a href="/">Careers</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='foot_return'>
                                    <h6>Help</h6>
                                    <ul className="foot_return_1">
                                        <li><a href="/">Contact Us</a></li>
                                        <li><a href="/">Order Status</a> </li>
                                        <li><a href="/">Returns</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='foot_down'>
                                    <h6>Follow Us!</h6>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                                <div className="social-links">
                                    <a href='#'><FaInstagram /></a> &nbsp;&nbsp;
                                    <a href='#'><FiFacebook /></a> &nbsp;&nbsp;
                                    <a href='#'><FiTwitter /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer1