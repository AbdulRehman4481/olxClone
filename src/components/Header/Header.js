import React, { useState } from 'react'
import Select, { components } from 'react-select';

import logo2 from 'assets/image/logo/olx.png'
import sellBorder from 'assets/image/logo/sellborder.png'
import { FaSearch } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Col, Modal, Row } from 'antd';



const options = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' },
];

export default function Header() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const isAuth = false
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };



    const CustomDropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaSearch />
            </components.DropdownIndicator>
        );
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <>
            <div className="container-fluid my-2 mt-0">
                <div className="row px-5">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <div >
                                        <Link to="/">

                                            <img src={logo2} width={60} />
                                        </Link>
                                    </div>

                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item px-3 mt-1" style={{ width: "300px" }} >
                                            <Select
                                                value={selectedOption}
                                                onChange={handleChange}
                                                options={options}
                                                components={{ DropdownIndicator: CustomDropdownIndicator }}
                                                placeholder="Search or filter"
                                            />
                                        </li>
                                        <li className="nav-item mt-1">
                                            <input type='text' placeholder='Find Car,Mobile and Phone and more...' id='searchbar' className="control-from" />
                                            <button id='searchbtn'><IoSearch size={20} /></button>
                                        </li>
                                        {!isAuth
                                            ? <li className="nav-item px-4 mt-2">
                                                <span id='loginBtn' onClick={() => { setOpenModal3(true) }}>Login</span>
                                            </li>
                                            : <>
                                                <li className="nav-item px-3 mt-2">
                                                    <Link to="chat" style={{ textDecoration: "none", color: "black" }}>
                                                        <i style={{ paddingLeft: "30px" }}><BsChat size={25} /></i>
                                                    </Link>
                                                </li>
                                                <li className="nav-item px-2 mt-2">
                                                    <i>
                                                        <MdNotificationsNone size={25} />
                                                    </i>
                                                </li>
                                                <li className="nav-item px-2 mt-2">
                                                    <i>
                                                        <FaAngleDown size={25} />
                                                    </i>
                                                </li>
                                            </>
                                        }

                                        <li className="nav-item px-3">
                                            <Link to="dashboard/product" style={{ textDecoration: "none", color: "black" }}>
                                                <div id='selBtn'  >
                                                    <span style={{ fontWeight: "bold", fontSize: "18px" }} >
                                                        <i><HiPlus size={20} /></i>
                                                        sell
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Modal

                open={openModal}
                onCancel={() => { setOpenModal(false) }}
                footer={false}
                width={350}
            >
                <Row>
                    <Col span={24} className='text-center mt-5'>
                        <img src={logo2} width={60} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-4'>
                        <h5>Welcome to OLX</h5>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <p style={{ fontSize: "larger" }}>The trusted community of buyers <br /> and sellers.</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <button id='forLoginBtn'><i><FcGoogle size={20} /></i> Continue With Google</button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <button id='forLoginBtn'><i><FaFacebook size={20} color='blue' /></i> Continue With Facebook</button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <button id='forLoginBtn' onClick={() => { setOpenModal2(true) }}><i><MdEmail size={20} /></i> Continue With Email</button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <button id='forLoginBtn'><i><FaPhoneAlt size={20} /></i> Continue With Phone</button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-3'>
                        <p style={{ fontSize: "small" }}>By continuing, you are accepting <br />
                            OLX <Link>Terms of use</Link> and <Link>Privacy Policy</Link></p>
                    </Col>
                </Row>
            </Modal>
            <Modal

                open={openModal2}
                onCancel={() => { setOpenModal2(false) }}
                footer={false}
                width={350}
            >
                <Row>
                    <Col span={24} className='text-center mt-5'>
                        <img src={logo2} width={60} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-4'>
                        <h5>Welcome to OLX</h5>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='text-center mt-2'>
                        <p style={{ fontSize: "larger" }}>The trusted community of buyers <br /> and sellers.</p>
                    </Col>
                </Row>
            </Modal>
            <Modal
                open={openModal3}
                onCancel={() => { setOpenModal3(false) }}
                footer={false}
            >
                {/* Render content based on the current page */}
                {currentPage === 1 && <>  <Row>
                    <Col span={24} className='text-center mt-5'>
                        <img src={logo2} width={60} />
                    </Col>
                </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Welcome to OLX</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <p style={{ fontSize: "larger" }}>The trusted community of buyers <br /> and sellers.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <button id='forLoginBtn'><i><FcGoogle size={20} /></i> Continue With Google</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <button id='forLoginBtn'><i><FaFacebook size={20} color='blue' /></i> Continue With Facebook</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <button id='forLoginBtn' onClick={() => { setOpenModal2(true) }}><i><MdEmail size={20} /></i> Continue With Email</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <button id='forLoginBtn' onClick={handleNextPage }><i><FaPhoneAlt size={20} /></i> Continue With Phone</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-3'>
                            <p style={{ fontSize: "small" }}>By continuing, you are accepting <br />
                                OLX <Link>Terms of use</Link> and <Link>Privacy Policy</Link></p>
                        </Col>
                    </Row> </>
                }
                {currentPage === 2 && <><Row>
                    <Col span={24} className='text-center mt-5'>
                        <img src={logo2} width={60} />
                    </Col>
                </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Welcome to OLX</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <p style={{ fontSize: "larger" }}>The trusted community of buyers <br /> and sellers.</p>
                        </Col>
                    </Row></>}
                {currentPage === 3 && <p>Content for Page 3</p>}
            </Modal>
        </>
    )
}
