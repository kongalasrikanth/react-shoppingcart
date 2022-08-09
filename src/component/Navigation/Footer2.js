import React from 'react';


function Footer2() {
    return (
        <>
            <hr />
            <footer className="footer ">
                <div className='container'>
                    <div className="aem-Grid aem-Grid--12 footerdesktop">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className="foot_left">
                                <h5>VENIA</h5>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className='footmiddle'>
                                <p>© Company Name Address Ave, City Name, State ZIP</p>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='foot_right'>
                                <a href="/" className="">
                                    <p>Terms of Use</p>
                                </a>
                                <a href="/" className="">
                                    <p>Privacy Policy</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 footerphone">
                        <div className="aem-GridColumn  aem-GridColumn--phone--12">
                            <div className='foot_rightphone'>
                                <a href="/" className="">
                                    <p>Terms of Use</p>
                                </a>
                                <a href="/" className="">
                                    <p>Privacy Policy</p>
                                </a>
                            </div>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--phone--12">
                            <div className='footerphone'>
                                <p className="">© Company Name <br />Address Ave, City Name, State ZIP </p>

                            </div>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--phone--12">
                            <div className="footone">
                                <h5>V E N I A</h5>
                            </div>
                        </div>

                    </div>





                </div>
            </footer>

        </>
    )
}

export default Footer2