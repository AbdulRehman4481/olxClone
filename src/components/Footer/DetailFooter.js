import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

// Icon
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebook } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// Image
import  png1  from "assets/image/logo/googlePly.png";
import  png2  from "assets/image/logo/appstore.png";
import  png3  from "assets/image/logo/appGallary.png";
export default function DetailFooter() {
    return (
        <detailfooter style={{ backgroundColor: "#EBEEEF" }} >
            <div className="container">
                <div className="row">
                    <div className="col" id='detailFooter'>
                        <Row span={24} style={{ display: "flex", padding: "20px" }}>
                            <Col>
                                <div style={{ padding: "0 35px" }}>
                                    <h6>
                                        POPULAR CATEGORIES
                                    </h6>
                                    <div style={{ display: "flex", flexDirection: "column" }}>

                                        <Link>
                                            Car
                                        </Link>
                                        <Link>
                                            Flats for rent
                                        </Link>
                                        <Link>
                                            Mobile Phones
                                        </Link>
                                        <Link>
                                            Jobs
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ padding: "0 35px" }}>
                                    <h6>
                                        TRENDING SEARCHES
                                    </h6>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Link>
                                            Books
                                        </Link>
                                        <Link>
                                            Bikes
                                        </Link>
                                        <Link>
                                            Watches
                                        </Link>
                                        <Link>
                                            Dogs
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ padding: "0 35px" }}>
                                    <h6>
                                        ABOUT US
                                    </h6>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Link>
                                            About Dubizzle Group
                                        </Link>
                                        <Link>
                                            OLX Blog
                                        </Link>
                                        <Link>
                                            Contact Us
                                        </Link>
                                        <Link>
                                            OLX for Businesses
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ padding: "0 35px" }}>
                                    <h6>
                                        OLX
                                    </h6>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Link>
                                            Help
                                        </Link>
                                        <Link>
                                            Sitemap
                                        </Link>
                                        <Link>
                                            Terms of use
                                        </Link>
                                        <Link>
                                            Privacy Policy
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ padding: "0 50px" }}>
                                    <h6>
                                        FOLLOW US
                                    </h6>
                                    <div>
                                        <div id='idDiv'>
                                            <Link>
                                                <i><FaXTwitter size={15} /></i>
                                            </Link>
                                            <Link>
                                                <i><LiaFacebook size={23} /> </i>
                                            </Link>
                                            <Link>
                                                <i><FaYoutube size={20} /></i>
                                            </Link>
                                            <Link>
                                                <i><FaInstagram size={20} /></i>
                                            </Link>
                                        </div>
                                        <div id='pngDiv'>
                                            <Link>
                                                <img src={png1}  />
                                            </Link>
                                            <Link>
                                                <img src={png2}  />
                                            </Link>
                                            <Link>
                                                <img src={png3}  />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </detailfooter>
    )
}
