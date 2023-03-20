import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import Navbar from './Navbar'
const Details = ({ detail }) => {
  return (
    <>
      <Navbar/>
      <Link to="/Products">
        <div className="Back">Go To Product Category</div>
      </Link>
      <div className="heading">
        <h1> {detail.category} Category</h1>
      </div>
      <div className="detail">
        <div className="Details">
          <div className="left">
            <img src={detail.image} alt="" height={300} />
          </div>
          <div className="Right">
            <div className="name">
              <h4>Product Name</h4>
              <div>{detail.title}</div>
            </div>
            <div className="name">
              <h4>Product Price</h4>
              <div>{detail.price} $</div>
            </div>
            <div className="name">
              <h4>Description</h4>
              <div>{detail.description}</div>
            </div>
            <div className="name">
              <h4>rating</h4>
              <div>{detail.rating.rate}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
