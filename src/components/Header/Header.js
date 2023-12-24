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
import { Link } from 'react-router-dom';



const options = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' },
];

export default function Header() {
    const [selectedOption, setSelectedOption] = useState(null);

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
        <div className="container-fluid my-2">
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
                                    <li className="nav-item px-3">
                                        <Link to="product" style={{ textDecoration: "none", color: "black" }}>
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
                    {/* <div>
                        <img src={logo2} width={60} />
                    </div>
                    <div>
                        <div>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                components={{ DropdownIndicator: CustomDropdownIndicator }}
                                placeholder="Search or filter"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
