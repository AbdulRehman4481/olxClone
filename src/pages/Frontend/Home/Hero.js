import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

// Pic
import ad1 from 'assets/image/Ad/ad.png'


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
import { ProductContext } from 'context/ProductContext';


export default function Hero() {
    const { products, getProduct } = useContext(ProductContext)
    const [mobilesProduct, setMobilesProduct] = useState([]);
    const [carsProduct, setCarsProduct] = useState([]);
    const [bikesProduct, setBikesProduct] = useState([]);
    const [housesProduct, setHousesProduct] = useState([]);
    const [audiosProduct, setAudiosProduct] = useState([]);
    const [tabletsProduct, setTabletsProduct] = useState([]);

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
        const filtered = products.filter((product) => product.productCategory === "mobile");
        setMobilesProduct(filtered);
    }, [products]);
    useEffect(() => {
        const filtered = products.filter((product) => product.productCategory === "cars");
        setCarsProduct(filtered);
    }, [products]);
    useEffect(() => {
        const filtered = products.filter((product) => product.productCategory === "bike");
        setBikesProduct(filtered);
    }, [products]);
    useEffect(() => {
        const filtered = products.filter((product) => product.productCategory === "property");
        setHousesProduct(filtered);
    }, [products]);
    useEffect(() => {
        const filtered = products.filter((product) => product.productCategory === "electornic");
        setAudiosProduct(filtered);
    }, [products]);



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
                                {mobilesProduct.slice(0, 4).map((mobile, i) => {
                                    return (
                                        <Col key={i} className='m-2'>
                                            <Link to={`adDetails/${mobile.id}`} >
                                                <div className="card" style={{ width: "16rem" }}>
                                                    <img src={mobile.files} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                                    <div className="card-body">
                                                        <h6 className="card-title">{mobile.price}</h6>
                                                        <p className="card-text">{mobile.productTitle}</p>
                                                        <p className="card-text">{mobile.productLocation}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                    )
                                })}


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
                                {carsProduct.slice(0, 4).map((car, i) => {
                                    return (
                                        <Col key={i} className='m-2'>
                                            <div className="card" style={{ width: "16rem" }}>
                                                <img src={car.files} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{car.price}</h6>
                                                    <p className="card-text">{car.productTitle}</p>
                                                    <p className="card-text">{car.productLocation}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}


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
                                {bikesProduct.slice(0, 4).map((bike, i) => {
                                    return (
                                        <Col key={i} className='m-2'>
                                            <div className="card" style={{ width: "16rem" }}>
                                                <img src={bike.files} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{bike.price}</h6>
                                                    <p className="card-text">{bike.productTitle}</p>
                                                    <p className="card-text">{bike.productLocation}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}


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
                                {housesProduct.slice(0, 4).map((house, i) => {
                                    return (
                                        <Col key={i} className='m-2'>
                                            <div className="card" style={{ width: "16rem" }}>
                                                <img src={house.files} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{house.price}</h6>
                                                    <p className="card-text">{house.productTitle}</p>
                                                    <p className="card-text">{house.productLocation}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}



                            </Row>
                            <Row gutter={30}>
                                {audiosProduct.slice(0, 4).map((audio, i) => {
                                    return (
                                        <Col key={i} className='m-2'>
                                            <div className="card" style={{ width: "16rem" }}>
                                                <img src={audio.files} className="card-img-top" style={{ width: "16rem", height: "150px" }} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{audio.price}</h6>
                                                    <p className="card-text">{audio.productTitle}</p>
                                                    <p className="card-text">{audio.productLocation}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
