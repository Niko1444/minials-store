import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import JSON from "../../database/banner.json";

const SectionOne = () => {
  return (
    <div className="SectionOne">
      <div className="SectionOne__Carousel">
        <Carousel controls={false}>
          {JSON.map((item, id) => {
            return (
              <Carousel.Item interval={100000} key={id}>
                <img
                  src={item.img}
                  alt="just store image"
                  loading="lazy"
                  className="Carousel__Image"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="SectionOne__Cover">
        <div className="SectionOne__Cover--Title">
          <h1>just minimalism</h1>
        </div>
        <div className="SectionOne__Cover--Description">
          <div className="TextBox">
            <h5 id="first">
              "Kindness, patience, and grace. <br /> The extraordinary found in
              the ordinary".
            </h5>
            <h5 id="second">
              Bringing not the most luxurious, but the feeling of comfort and
              worthy.
            </h5>
          </div>
        </div>
        <div className="SectionOne__Cover--Button">
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
