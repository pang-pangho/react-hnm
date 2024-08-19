import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="product-info">
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <div>{product?.new == true ? "concious choice" : ""}</div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                {product?.size[0]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                {" "}
                {product?.size[1]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                {" "}
                {product?.size[2]}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
