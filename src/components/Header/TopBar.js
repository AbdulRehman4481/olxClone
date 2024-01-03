import React from 'react'
import { Link } from 'react-router-dom'
import { LuBuilding2 } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import logo from 'assets/image/logo/OLX1.png'

export default function TopBar() {

    const disableHeader = () => {
        let mainHeader = document.getElementById("mainHeaderContainer")
        mainHeader.classList.add("forDisableHeader")
    }
    return (
        <div className="container-fluid bg-light" id='mainTopbar'>
            <div className="row px-5">
                <div className="col">
                    <div style={{ margin: "30px 0 0 30px", display: "flex" }}>
                        <Link to="/">
                            <img src={logo} width={30} />
                        </Link>
                        <Link to="motors" id='topBarLink' className='px-5' onClick={disableHeader}>
                            <i className='p-2' id='carIc'><FaCar /></i>
                            <p className="px-2" style={{ display: "inline" }}>MOTORS</p>
                        </Link>
                        <Link to="property" id='topBarLink'>
                            <i className='p-2' id='carIc' ><LuBuilding2 /></i>
                            <p className="px-2" style={{ display: "inline" }}>PROPERTY</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
