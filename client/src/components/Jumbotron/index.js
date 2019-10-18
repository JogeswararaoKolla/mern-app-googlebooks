import React from "react";
import images from "../../Image.js";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4 text-right"> Google Books Search</h1>
          <p className="text-right lead">
            Search for and Save Books of Interest
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            id={images[1].id}
            src={images[1].img}
            alt={images[1].name}
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
