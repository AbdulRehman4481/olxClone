import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import olxLogo from 'assets/image/logo/olx.png'
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { TbCameraPlus } from "react-icons/tb";

export default function Product() {
  return (
    <>
      <div className="container-fluid p-4" >
        <div className="row">
          <div className="col">
            <Link to="/">
              <i><FaArrowLeft color='black' /></i>
              <img src={olxLogo} width={100} className="px-3" /></Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="text-center">Ad Your Post</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id='postDiv' style={{ border: "1px solid black", padding: "30px" }} className="form-control">
              <Row>
                <Col span={24}>
                  <select name="dog-names" id="select-category" className="form-control">
                    <option>Select Category</option>
                    <option value="mobile">Mobile or Phones</option>
                    <option value="cars">Cars & Vehicels</option>
                    <option value="bike">Bikes</option>
                    <option value="property">Property</option>
                    <option value="electornic">Electornic Appliances</option>
                    <option value="paint">Paint</option>
                    <option value="jobs">Jobs</option>
                    <option value="animals">Animals</option>
                    <option value="furniture">Furniture</option>
                    <option value="cloth">Cloth</option>
                    <option value="books">Books</option>
                    <option value="games">Games</option>
                  </select>
                </Col>
                </Row>
                <Row>
                <h6 className='py-3'>Details</h6>
                <Col span={24}>
                  <label htmlFor="">Product Title :</label>
                  <input placeholder='Product Title' className="form-control mb-3" />
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                  <label htmlFor="">Product Description:</label>
                  <textarea placeholder='Product Description' className="form-control mb-3" ></textarea>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                  <label htmlFor="">Brand :</label>
                  <input placeholder='Brand' className="form-control mb-3" />
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                  <div style={{ border: "1px solid black", display: "flex", padding: "10px", borderRadius: "10px", marginBottom: "20px" }}>
                    <Row >
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                      <div id='iconsDiv'>
                        <TbCameraPlus size={30} />
                      </div>
                    </Row>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                  <label htmlFor="">Location :</label>
                  <input placeholder='Location' className="form-control mb-3" />
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                  <label htmlFor="">Phone No :</label>
                  <input placeholder='Phone No' className="form-control mb-3" />
                </Col>
                </Row>
                <Row>
                <Col span={24} className='text-center'>
                  <button id='postBtn'>
                    Post
                  </button>
                </Col>
                </Row>




            </div>
          </div>
        </div>
      </div>

    </>
  )
}
