import React from "react";
import { fetchApi } from "./FetchApi.jsx";
import { Container } from "react-bootstrap";

const ProductList = () => {
  return (
    <div className="ProductList__Container">
      <Container>
        <div className="ProductList">
          <div id="ProductList__Wrap" className="ProductList__Wrap"></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
