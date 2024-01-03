import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import olxLogo from 'assets/image/logo/olx.png'
import { Link } from 'react-router-dom';
import { Col, Form, Image, Input, Row, message } from 'antd';
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
  phoneNo: "",
  price: ""

}
export default function Product() {
  const { user } = useAuthContext();
  const [state, setState] = useState(initialState);
  const [files, setFiles] = useState(null);

  const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const postAd = async (e) => {
    e.preventDefault();

    const {
      productTitle,
      productDescription,
      productBrand,
      productLocation,
      phoneNo,
      productCategory,
      price
    } = state;

    // Check for required fields
    if (!price || !productTitle || !productDescription || !productBrand || !productLocation || !phoneNo || !productCategory) {
      return message.error("Please fill in all the required fields");
    }

    const productDetail = {
      productTitle,
      productDescription,
      productBrand,
      productLocation,
      phoneNo,
      productCategory,
      price,
      status: "active",
      dateCreated: new Date().getTime(),
      id: Math.random().toString(36).slice(2),
      createdBy: {
        email: user.email,
        uid: user.uid,
      },
    };

    if (files.some((file) => file !== null)) {
      uploadFiles(productDetail);
    } else {
      createDocument(productDetail);
      
    }
    setState(initialState)
      setFiles(null)
  };
  
  const createDocument = async (productDetail) => {
    try {
      await setDoc(doc(firestore, "productDetail", productDetail.id), productDetail);
      message.success("A new Product added successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const uploadFiles = async (productDetail) => {
    try {
      const promises = files.map(async (file) => {
        const fileName = productDetail.id;
        const fileExtension = file.name.split('.').pop();

        const storageRef = ref(storage, `images/${fileName}.${fileExtension}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload progress:', progress);
            },
            (error) => {
              console.error('Error uploading file:', error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  resolve(downloadURL);
                })
                .catch((urlError) => {
                  console.error('Error getting download URL:', urlError);
                  reject(urlError);
                });
            }
          );
        });
      });

      const fileUrls = await Promise.all(promises);

      const data = { ...productDetail, files: fileUrls };
      createDocument(data);
    } catch (error) {
      console.error('Error uploading files:', error);
      message.error('Something went wrong while uploading files');
    }
  };


  // const uploadFile = (productDetail) => {

  //   const fileName = productDetail.id
  //   var fileExtension = file.name.split('.').pop();

  //   const storageRef = ref(storage, `images/${fileName}.${fileExtension}`);
  //   console.log("storageRef", storageRef)

  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   console.log("uploadTask", uploadTask)
  //   uploadTask.on('state_changed',
  //     (snapshot) => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("progress", progress)
  //     },
  //     (error) => {
  //       message.error("Something went wrong while uploading file")
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         let data = { ...productDetail, file: downloadURL }
  //         createDocument(data)
  //       });
  //     }
  //   );
  // }



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
              <Form>
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
                    <Form.Item>

                    <Input type='text' placeholder='Product Title' name='productTitle' className="form-control " onChange={handleChange} />
                    </Form.Item>
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
                    <Form.Item>
                    
                    <Input type='text' placeholder='Brand' name='productBrand' className="form-control mb-3" onChange={handleChange} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}  >
                    <h6>If you have  Multiple Images select All Of Them :</h6>
                  </Col>
                  <Col span={24}>
                    <div style={{ border: "1px solid black", display: "flex", padding: "10px", borderRadius: "10px", marginBottom: "20px" }}>

                      {!files ? <>
                        < div id='iconsDiv'>
                          <label htmlFor="imageInput">
                            <TbCameraPlus size={30} />
                          </label>
                          <input
                            type="file"
                            multiple={true}
                            id="imageInput"
                            style={{ display: 'none' }}
                            onChange={e => {
                              // Convert FileList to an array
                              const selectedFiles = Array.from(e.target.files);
                              setFiles(selectedFiles);
                              console.log(selectedFiles)
                            }}
                          />
                        </div>
                      </> : (
                        <>
                          {files.map((file, index) => (
                            <div key={index}>
                              {file && <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ width: 80, height: 80, paddingLeft: "10px" }} />} {/* Corrected Image component */}
                              {/* {file && <Image src={URL.createObjectURL(file)} style={{ width: 50, height: 50 }} />}
                           */}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <label htmlFor="">Location :</label>
                    <Form.Item>
                    <Input type='text' placeholder='Location' name='productLocation' className="form-control " onChange={handleChange} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <label htmlFor="">Phone No :</label>
                    <Form.Item>
                    <Input type='number' placeholder='Phone No' name='phoneNo' className="form-control " onChange={handleChange} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <label htmlFor="">Price :</label>
                    <Form.Item>
                    <Input type='number' placeholder='Price' name='price' className="form-control " onChange={handleChange} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className='text-center'>
                    <button id='postBtn' onClick={postAd}>
                      Post
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}
