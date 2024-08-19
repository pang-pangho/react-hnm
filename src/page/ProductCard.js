import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item, authenticate }) => {
  const navigate = useNavigate();

  const gotoDetail = () => {
    if (authenticate) {
      navigate(`/product/${item.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="item-container" onClick={gotoDetail}>
      <div className="img-container">
        <img className="item-img" width={500} src={item?.img} alt="" />
      </div>
      <div>{item?.choice == true ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
