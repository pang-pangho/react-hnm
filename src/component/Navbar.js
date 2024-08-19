import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = ({ authenticate, setAuthenticate }) => {
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
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div onClick={() => goToLogin()}>
          {authenticate ? "로그아웃" : "로그인"}
        </div>
      </div>
      <div className="nav-section">
        <img
          onClick={() => goToMain()}
          width={100}
          src="https://i.pinimg.com/564x/94/8c/7f/948c7f31df5eb63955907221228842d7.jpg"
          alt="H&M"
        />
      </div>
      <div className="menu-area">
        <div className="menu-container">
          {/* PC 화면 */}
          <ul className="menu-list pc">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
          {/* 모바일 화면 */}
          <DropdownButton
            title={<FontAwesomeIcon icon={faBars} />}
            className="menu mobile"
          >
            {menuList.map((menu, index) => (
              <Dropdown.Item as="button" key={index}>
                {menu}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;