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
      const searchQuery = query.get("q") || "";
      const url = `https://my-json-server.typicode.com/pang-pangho/react-hnm/products?q=${searchQuery}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProductList(data);
      } else {
        console.error("Failed to fetch products:", response.status);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes((query.get("q") || "").toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [productList, query]);

  return (
    <div>
      <div className="span-container">
        <span>회원 혜택:3만원 이상 무료배송&첫구매10%할인</span>
      </div>
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
