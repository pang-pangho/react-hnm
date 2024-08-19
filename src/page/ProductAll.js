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
      // searchQuery를 가져와 URL에 포함
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

  // 쿼리 파라미터 변경 시마다 제품 목록을 새로 요청
  useEffect(() => {
    getProducts();
  }, [query]);

  // 제품 목록을 필터링하여 filteredProducts 상태 업데이트
  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes((query.get("q") || "").toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [productList, query]);

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
