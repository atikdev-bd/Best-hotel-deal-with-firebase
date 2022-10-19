import React from "react";
import { FaBed, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = ({ data }) => {
  const { img, name, capacity, bed,price,id } = data;
  return (
    <div className="mx-auto">
      <div className="card w-96 glass">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <Link to={`/bookNow/:${id}`}><button className="btn btn-primary">Book now !</button></Link>
          </div>
          <div className="flex justify-evenly mt-4 text-white">
            <span className="flex items-center">
              <span>
                <FaBed />
              </span>
              <span> : {bed}</span>
            </span>
            <span className="flex items-center">
              <span>
                <FaMale />{" "}
              </span>
              <span> : {capacity}</span>
            </span>
            <span>$ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
