// Header.js
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="header-row">
          <Col md={3} className="logo-col">
            <h1 className="logo">MINIALS</h1>
          </Col>
          <Col md={9} className="menu-setting-col">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="setting">
              <a href="#">
                <SearchIcon />
              </a>
              <a href="#">
                <SettingsIcon />
              </a>
              <a href="#">
                <ShoppingCartIcon />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
