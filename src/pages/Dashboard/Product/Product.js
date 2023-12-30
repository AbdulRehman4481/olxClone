import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import olxLogo from 'assets/image/logo/olx.png'
import { Link } from 'react-router-dom';
import { Col, Form, Input, Row, message } from 'antd';
import { TbCameraPlus } from "react-icons/tb";
import { doc, setDoc } from 'firebase/firestore';
import { firestore, storage } from 'config/firebase';
import { useAuthContext } from 'context/AuthContext';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const initialState = {
  productTitle: "",
  productCategory: "",
  productDescription: "",
  productBrand: "",
  productLocation: "",
  phoneNo: ""

}


export default function Product() {
  const { user } = useAuthContext()
  const [state, setState] = useState(initialState)
  const [file, setFile] = useState(null)
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)
  const [file3, setFile3] = useState(null)
  const [file4, setFile4] = useState(null)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))



  const postAd = async (e) => {
    e.preventDefault()

    let { productTitle,
      productDescription,
      productBrand,
      productLocation,
      phoneNo,
      productCategory } = state

    if (!productTitle) { return message.error("Please enter Product Title") }
    if (!productDescription) { return message.error("Please enter Product Description") }
    if (!productBrand) { return message.error("Please enter Product Brand") }
    if (!productLocation) { return message.error("Please enter Product Location") }
    if (!productCategory) { return message.error("Please enter Product Category") }
    if (!phoneNo) { return message.error("Please enter Phone No") }

    const productDetail = {
      productTitle, productDescription, productBrand, productLocation, phoneNo, productCategory,
      status: "active",
      dateCreated: new Date().getTime(),
      id: Math.random().toString(36).slice(2),
      file: "",
      file1: "",
      file2: "",
      file3: "",
      file4: "",
      createdBy: {

        email: user.email,
        uid: user.uid,
      }
    }
    if (file) {
      uploadFile(productDetail)
    } else {
      createDocument(productDetail)

    }

  }



  //   if (file) {
  //     uploadFile(todo)
  //   } else {
  // createDocument(todo)
  //   }
  // }

  const createDocument = async (productDetail) => {
    try {
      await setDoc(doc(firestore, "productDetail", productDetail.id), productDetail);
      console.log('productDetail.id', productDetail.id)
      message.success("A new Product added successfully")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const uploadFile = (productDetail) => {

    const fileName = productDetail.id
    var fileExtension = file.name.split('.').pop();

    const storageRef = ref(storage, `images/${fileName}.${fileExtension}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        message.error("Something went wrong while uploading file")
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let data = { ...productDetail, file: downloadURL }
          createDocument(data)
        });
      }
    );
  }


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
                  <select name="productCategory" id="select-category" className="form-control" onChange={handleChange} >
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
                  <input placeholder='Product Title' name='productTitle' className="form-control mb-3" onChange={handleChange} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label htmlFor="">Product Description:</label>
                  <textarea placeholder='Product Description' name='productDescription' className="form-control mb-3" onChange={handleChange} ></textarea>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label htmlFor="">Brand :</label>
                  <input placeholder='Brand' name='productBrand' className="form-control mb-3" onChange={handleChange} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div style={{ border: "1px solid black", display: "flex", padding: "10px", borderRadius: "10px", marginBottom: "20px" }}>
                    <Row >

                      <div id='iconsDiv'>

                        <label htmlFor="imageInput">
                          <TbCameraPlus size={30} />
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          style={{ display: 'none' }}
                          onChange={(e) => setFile(e.target.files[0])}
                        />
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
                  <input placeholder='Location' name='productLocation' className="form-control mb-3" onChange={handleChange} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label htmlFor="">Phone No :</label>
                  <input placeholder='Phone No' name='phoneNo' className="form-control mb-3" onChange={handleChange} />
                </Col>
              </Row>
              <Row>
                <Col span={24} className='text-center'>
                  <button id='postBtn' onClick={postAd}>
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
