import { Col, Row } from 'antd';
import { firestore } from 'config/firebase';
import { useAuthContext } from 'context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function AdDetails() {
  const { user } = useAuthContext
  const [product, setProduct] = useState({});
  const params = useParams()

  const getProduct = useCallback(async () => {
    onSnapshot(doc(firestore, "productDetail", params.id), (doc) => {
      const data = doc.data()
      setProduct(data)
    })
  }, [params.id])

  useEffect(() => {
    getProduct()
  }, [user])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>

              <Row>
              <Col span={16}>
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      {product.files && product.files.map((file, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img src={file} className="d-block w-100" alt={`Image ${index}`} />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <h1>phone no</h1>
                  </div>
                  <div>
                    <h1>phone no</h1>
                  </div>
                  <div>
                    <h1>phone no</h1>
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
