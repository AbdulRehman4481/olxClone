import React, { useState } from 'react'
import Select, { components } from 'react-select';
// import {  createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from 'config/firebase'
import logo2 from 'assets/image/logo/olx.png'
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
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Col, Modal, Row, message } from 'antd';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from 'config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from 'context/AuthContext';



const options = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' },
];

export default function Header() {

    const { dispatch, isAuth } = useAuthContext()
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [state, setState] = useState({ email: "", password: "" })
    const [selectedOption, setSelectedOption] = useState(null);
    const [openModal3, setOpenModal3] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
    // const isAuth = false
    console.log("isAuth", isAuth)

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const handleNextPage2 = () => {
        setCurrentPage(currentPage + 2);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    const handlePrevPage2 = () => {
        setCurrentPage(currentPage - 2);
    };



    const CustomDropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaSearch />
            </components.DropdownIndicator>
        );
    };

    const handleOption = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))




    // Email Auth

    const handleEmail = (e) => {
        e.preventDefault()

        let { email } = state
        if (!email) {
            message.error("Plz Enter Your Email Correctly")
        } else {
            setCurrentPage(currentPage + 2);


        }

    }
    const handleNumber = (e) => {
        e.preventDefault()

        let { email } = state
        if (!email) {
            message.error("Plz Enter Your Email Correctly")
        } else {
            setCurrentPage(currentPage + 2);


        }

    }
    const handleCreatePassword = () => {
        if (state.password !== confirmedPassword) {
            message.error("Passwords do not match. Please enter matching passwords.");
        } else {
            let { email, password } = state
            console.log("emai", email)
            console.log("password", password)

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    createUserProfile(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
            // console.log("password", state.password)
            // console.log("confirmedPassword", confirmedPassword)
            // // Continue with your logic for creating the password
            // // You can call your authentication method here
        }
    };

    // const handleRegister = e => {

    //     e.preventDefault()

    //     let { email } = state

    //     createUserWithEmailAndPassword(auth, email)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             createUserProfile(user)
    //             // console.log("user"  , user)
    //         })
    //         .catch(err => {
    //             message.error("Something went wrong while creating user")
    //             console.error(err)
    //         })
    // }

    const createUserProfile = async (user) => {

        const { email, uid } = user

        const userData = {
            email, uid,
            dateCreated: serverTimestamp(),
            status: "active",
            roles: ["superAdmin"]
        }

        try {
            await setDoc(doc(firestore, "users", uid), userData);
            message.success("A new user has been created successfully")
            dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } })
        } catch (e) {
            message.error("Something went wrong while creating user profile")
            console.error("Error adding document: ", e);
        }
    }

    const handleSellClick = () => {
        if (!isAuth) {
            // Open the modal for authentication
            setOpenModal3(true);
        } else {
            navigate("dashboard/product")
        }
    };


    return (
        <>
            <div className="container-fluid my-2 mt-0">
                <div className="row px-5">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <span className="navbar-brand" >
                                    <div >
                                        <Link to="/">

                                            <img src={logo2} width={60} />
                                        </Link>
                                    </div>

                                </span>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item px-3 mt-1" style={{ width: "300px" }} >
                                            <Select
                                                value={selectedOption}
                                                onChange={handleOption}
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
                                            <div  onClick={handleSellClick} style={{ textDecoration: "none", color: "black" }}>
                                                <div id='selBtn'  >
                                                    <span style={{ fontWeight: "bold", fontSize: "18px" }} >
                                                        <i><HiPlus size={20} /></i>
                                                        sell
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <Modal
                open={openModal3}
                onCancel={() => { setOpenModal3(false) }}
                footer={false}
                width={350}
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
                            <button id='forLoginBtn' onClick={handleNextPage}><i><MdEmail size={20} /></i> Continue With Email</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <button id='forLoginBtn' onClick={handleNextPage2}><i><FaPhoneAlt size={20} /></i> Continue With Phone</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-3'>
                            <p style={{ fontSize: "small" }}>By continuing, you are accepting <br />
                                OLX <Link>Terms of use</Link> and <Link>Privacy Policy</Link></p>
                        </Col>
                    </Row> </>
                }
                {currentPage === 2 && <>
                    <Row>
                        <Col>
                            <i onClick={handlePrevPage}>
                                <FaArrowLeft />
                            </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-5'>
                            <img src={logo2} width={60} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Enter Your Email</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <input id='PhoneInput' type='email' placeholder='Email ' name='email' onChange={handleChange} className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <button className="form-control" id='nxtBtn' onClick={handleEmail}>
                                Next
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <p>We won't reveal your Email to anyone else  nor use it to send you spam.</p>
                        </Col>
                    </Row>
                </>
                }
                {currentPage === 3 && <>
                    <Row>
                        <Col>
                            <i onClick={handlePrevPage2}>
                                <FaArrowLeft />
                            </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-5'>
                            <img src={logo2} width={60} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Enter Your Phone No</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <input id='PhoneInput' type='number' placeholder='Phone No ' className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <button className="form-control" id='nxtBtn'>
                                Next
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <p>We won't reveal your phone number to anyone else  nor use it to send you spam.</p>
                        </Col>
                    </Row>
                </>}
                {currentPage === 4 && <>
                    <Row>
                        <Col>
                            <i onClick={handlePrevPage2}>
                                <FaArrowLeft />
                            </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <img src={logo2} width={60} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Create a password to log in faster next time</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-3'>
                            <p>You are creating a password for <b>{state.email}</b>. This will help you login faster next time</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <input
                                id='PhoneInput'
                                type='password'
                                placeholder='New Password'
                                name='password'  // Add this line to associate the input with the password field in the state
                                className="form-control"
                                onChange={handleChange}  // Add this line to update the state when the password changes
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <input
                                id='PhoneInput'
                                type='password'
                                placeholder='Confirm password'
                                className="form-control"
                                value={confirmedPassword}
                                onChange={(e) => setConfirmedPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <button
                                className="form-control"
                                id='nxtBtn'
                                onClick={handleCreatePassword}
                            >
                                Create Password
                            </button>
                        </Col>
                    </Row>

                </>}
                {/* {currentPage === 3 && <>
                    <Row>
                        <Col>
                            <i onClick={handlePrevPage2}>
                                <FaArrowLeft />
                            </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <img src={logo2} width={60} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-4'>
                            <h5>Create a password to log in faster next time</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-3'>
                            <p>You are creating a password for <b>03167106594</b>. This will help you login faster next time</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center mt-2'>
                            <input id='PhoneInput' type='password' placeholder='New Password' className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <input id='PhoneInput' type='password' placeholder='Confirm password' className="form-control" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='text-center my-3'>
                            <button className="form-control" id='nxtBtn'>
                                Create Password
                            </button>
                        </Col>
                    </Row>

                </>} */}
            </Modal>
        </>
    )
}
