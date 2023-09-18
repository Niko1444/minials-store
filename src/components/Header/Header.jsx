import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Container className="Header__Container">
        <Row>
          <div className="Header__RowWrap">
            <Col md={3}>
              <div className="Header__ColWrap1">
                <Link to="/" className="Header__Logo">
                  <h1>MINIALS</h1>
                </Link>
              </div>
            </Col>
            <Col md={9}>
              <div className="Header__ColWrap2">
                <div className="Header__Menu">
                  <nav>
                    <NavLink to="/" className="Header__Menu__Item">
                      Home
                    </NavLink>
                    <NavLink to="/Shop" className="Header__Menu__Item">
                      Shop
                    </NavLink>
                    <NavLink to="/Pages" className="Header__Menu__Item">
                      Pages
                    </NavLink>
                    <NavLink to="/Blog" className="Header__Menu__Item">
                      Blog
                    </NavLink>
                    <NavLink to="/Contact" className="Header__Menu__Item">
                      Contact
                    </NavLink>
                  </nav>
                </div>
                <div className="Header__Setting">
                  <Link>
                    <SearchIcon />
                  </Link>
                  <Link>
                    <SettingsIcon />
                  </Link>
                  <Link>
                    <ShoppingCartIcon />
                  </Link>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
