import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import JSON from "../../database/banner.json";

const SectionOne = () => {
  return (
    <div className="SectionOne">
      <div className="SectionOne__Carousel">
        <Carousel>
          {/* <Carousel.Item interval={10000000}>
            <img
              src="./public/images/minimal_shop_1.jpg"
              alt="minimal shop image 1"
              className="Carousel__Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="./public/images/minimal_shop_2.jpg"
              alt="minimal shop image 2"
              className="Carousel__Image"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="./public/images/minimal_shop_3.jpg"
              alt="minimal shop image 3"
              className="Carousel__Image"
            />
          </Carousel.Item> */}
          {JSON.map((item, id) => {
            return (
              <Carousel.Item interval={100000} key={id}>
                <img src={item.img} alt="hinh" className="Carousel__Image" />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="SectionOne__Cover">
          <div className="SectionOne__Cover--Title">
            <h1>just minimalism</h1>
          </div>
          <div className="SectionOne__Cover--Button">
            <Button>Shop now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
