import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Col } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <Container className="NavigationBar__Container">
        <Row>
          <div className="NavigationBar__RowWrap">
            <div className="NavigationBar__Category">
              <nav>
                <NavLink
                  to="/Shop/all"
                  className="NavigationBar__Category--Item"
                >
                  ALL
                </NavLink>
                <NavLink
                  to="/Shop/outerwear"
                  className="NavigationBar__Category--Item"
                >
                  OUTERWEAR
                </NavLink>
                <NavLink
                  to="/Shop/upperwear"
                  className="NavigationBar__Category--Item"
                >
                  UPPERWEAR
                </NavLink>
                <NavLink
                  to="/Shop/pant"
                  className="NavigationBar__Category--Item"
                >
                  PANT
                </NavLink>
                <NavLink
                  to="/Shop/accessory"
                  className="NavigationBar__Category--Item"
                >
                  ACCESSORY
                </NavLink>
              </nav>
            </div>
            <div className="NavigationBar__Filter">
              <nav>
                <NavLink to="/Shop/filter">
                  FILTER
                  <FilterAltIcon />
                </NavLink>
              </nav>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
