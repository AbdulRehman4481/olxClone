import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

// Pic
import ad1 from 'assets/image/Ad/ad.png'
import mobile1 from 'assets/image/Ad/viv1.jpeg'
import mobile2 from 'assets/image/Ad/vive.jpeg'
import mobile3 from 'assets/image/Ad/infix.jpeg'
import mobile4 from 'assets/image/Ad/onePlu.jpeg'
import car1 from 'assets/image/Ad/car1.jpeg'
import car2 from 'assets/image/Ad/car2.jpeg'
import car3 from 'assets/image/Ad/car3.jpeg'
import car4 from 'assets/image/Ad/car4.jpeg'
import bike1 from 'assets/image/Ad/bike3.jpeg'
import bike2 from 'assets/image/Ad/bike2.jpeg'
import bike3 from 'assets/image/Ad/bike1.jpeg'
import bike4 from 'assets/image/Ad/bike4.jpeg'
import home1 from 'assets/image/Ad/home1.jpeg'
import home2 from 'assets/image/Ad/hom2.jpeg'
import home3 from 'assets/image/Ad/home3.jpeg'
import audio1 from 'assets/image/Ad/audio.jpeg'
import audio2 from 'assets/image/Ad/audio1.jpeg'
import audio3 from 'assets/image/Ad/audio3.jpeg'
import audio4 from 'assets/image/Ad/audio.jpeg'

// LOGO
import mobileLogo from 'assets/image/logo/phone-removebg-preview.png'
import carLogo from 'assets/image/logo/car-removebg-preview.png'
import homeLogo from 'assets/image/logo/Home-removebg-preview.png'
import keyLogo from 'assets/image/logo/Key-removebg-preview.png'
import cameraLogo from 'assets/image/logo/camera-removebg-preview.png'
import bikeLogo from 'assets/image/logo/Bike-removebg-preview.png'
import tractorLogo from 'assets/image/logo/Tractor-removebg-preview.png'
import paintLogo from 'assets/image/logo/Paint-removebg-preview.png'
import bagLogo from 'assets/image/logo/Bag-removebg-preview.png'
import foodLogo from 'assets/image/logo/Chiekhenpng-removebg-preview.png'
import chairLogo from 'assets/image/logo/Chair-removebg-preview.png'
import clothLogo from 'assets/image/logo/Cloth-removebg-preview.png'
import bookLogo from 'assets/image/logo/Book-removebg-preview.png'
import gameLogo from 'assets/image/logo/Game-removebg-preview.png'


export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ad1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ad1} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-4' id='catLogo'>
                            <h5>All categoires</h5>
                            <Row gutter={45}>

                                <Col><div className='text-center'>
                                    <Link>
                                        <img src={mobileLogo} width={80} />
                                        <p>Mobile</p>
                                    </Link>
                                </div></Col>

                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={carLogo} width={80} />
                                            <p>Vehicles</p>
                                        </div>
                                    </Link>

                                </Col>

                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={homeLogo} width={80} />
                                            <p>Property <br /> For Sale</p>
                                        </div>
                                    </Link>
                                </Col>

                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={keyLogo} width={80} />
                                            <p>Property <br /> For Rent</p>
                                        </div>
                                    </Link>
                                </Col>

                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={cameraLogo} width={80} />
                                            <p>Electronics <br /> & Home ,<br /> Appliances</p>
                                        </div>
                                    </Link>
                                </Col>

                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={bikeLogo} width={80} />
                                            <p>Bikes</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={tractorLogo} width={80} />
                                            <p>Business,<br /> Industrial & <br /> Agriculture</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={paintLogo} width={80} />
                                            <p>Services</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={bagLogo} width={80} />
                                            <p>Jobs</p>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={45}>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={foodLogo} width={80} />
                                            <p>Animal</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={chairLogo} width={80} />
                                            <p>Furniture & <br /> Home Decor</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={clothLogo} width={80} />
                                            <p>Fashion & <br /> Beauty</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={bookLogo} width={80} />
                                            <p>Books, Sports <br /> & Hobbies</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link>
                                        <div className='text-center'>
                                            <img src={gameLogo} width={80} />
                                            <p>Kids</p>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <div id='cardContainer'>
                            <Row>
                                <Col span={20}>
                                    <h6>Mobile & Phones</h6>
                                </Col>
                                <Col span={4}>
                                    <Link>
                                        View More <IoIosArrowForward size={20} />
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={mobile1} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 15000</h6>
                                            <p className="card-text">Vivo s1</p>
                                            <p className="card-text">Gojra ,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={mobile2} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 26000</h6>
                                            <p className="card-text">Vivo Y17</p>
                                            <p className="card-text">Lahore,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={mobile3} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 49000</h6>
                                            <p className="card-text">Infinix Zero 30</p>
                                            <p className="card-text">Jungh , Punjab , Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={mobile4} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 51000</h6>
                                            <p className="card-text">One pluse 7T</p>
                                            <p className="card-text">FaislbadPunjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <div id='cardContainer'>
                            <Row>
                                <Col span={20}>
                                    <h6>Cars</h6>
                                </Col>
                                <Col span={4}>
                                    <Link>
                                        View More <IoIosArrowForward size={20} />
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={car1} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 15000</h6>
                                            <p className="card-text">Vivo s1</p>
                                            <p className="card-text">Gojra ,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={car2} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 26000</h6>
                                            <p className="card-text">Vivo Y17</p>
                                            <p className="card-text">Lahore,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={car3} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 49000</h6>
                                            <p className="card-text">Infinix Zero 30</p>
                                            <p className="card-text">Jungh , Punjab , Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={car4} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 51000</h6>
                                            <p className="card-text">One pluse 7T</p>
                                            <p className="card-text">FaislbadPunjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <div id='cardContainer'>
                            <Row>
                                <Col span={20}>
                                    <h6>Bikes</h6>
                                </Col>
                                <Col span={4}>
                                    <Link>
                                        View More <IoIosArrowForward size={20} />
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={bike1} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 15000</h6>
                                            <p className="card-text">Vivo s1</p>
                                            <p className="card-text">Gojra ,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={bike2} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 26000</h6>
                                            <p className="card-text">Vivo Y17</p>
                                            <p className="card-text">Lahore,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={bike3} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 49000</h6>
                                            <p className="card-text">Infinix Zero 30</p>
                                            <p className="card-text">Jungh , Punjab , Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={bike4} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 51000</h6>
                                            <p className="card-text">One pluse 7T</p>
                                            <p className="card-text">FaislbadPunjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <div id='cardContainer'>
                            <Row>
                                <Col span={20}>
                                    <h6>Home</h6>
                                </Col>
                                <Col span={4}>
                                    <Link>
                                        View More <IoIosArrowForward size={20} />
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={home1} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 15000</h6>
                                            <p className="card-text">Vivo s1</p>
                                            <p className="card-text">Gojra ,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={home2} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 26000</h6>
                                            <p className="card-text">Vivo Y17</p>
                                            <p className="card-text">Lahore,Punjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={home3} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 49000</h6>
                                            <p className="card-text">Infinix Zero 30</p>
                                            <p className="card-text">Jungh , Punjab , Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="card" style={{ width: "16rem" }}>
                                        <img src={home1} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                        <div className="card-body">
                                            <h6 className="card-title">Rs 51000</h6>
                                            <p className="card-text">One pluse 7T</p>
                                            <p className="card-text">FaislbadPunjab,Pakistan</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
