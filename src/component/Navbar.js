import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="login-button">
        <div className="menu mobile" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="auth" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          {authenticate ? "로그아웃" : "로그인"}
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faTimes} onClick={toggleSidebar} />
        </div>
        <ul className="sidebar-menu">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyDown={search} placeholder="검색" />
      </div>
      <div className="logo">
        <img
          onClick={goToMain}
          width={100}
          src="https://i.pinimg.com/564x/60/30/0c/60300c52085ba4c70ec47d3183709538.jpg"
          alt="H&M"
        />
      </div>
    </div>
  );
};

export default Navbar;
