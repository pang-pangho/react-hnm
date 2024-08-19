import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = ({ authenticate }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    try {
      let url = `http://localhost:3004/products`;
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setProductList(data);
      } else {
        console.error("실패 :", response.status);
      }
    } catch (error) {
      console.error("에러 :", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes((query.get("q") || "").toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [query, productList]);

  return (
    <div>
      <Container>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Col lg={3} key={item.id}>
                <ProductCard item={item} authenticate={authenticate} />
              </Col>
            ))
          ) : (
            <p>검색하신 상품이 없습니다.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
