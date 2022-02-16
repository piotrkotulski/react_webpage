import React from "react";
import offer from "../offer";

const Offer = () => {
  return (
    <div className="containerInsideThird">
      {offer.map(({ id, name, isNew }) => {
        if (isNew)  
        { <div className="box box1">
        {name}<span>(nowość)</span>
        <div className="point"></div>
      </div>}
      else
        <div id={id} className="box">
          {name}
          </div>
      }
      )}
   </div>
  );
};

export default Offer;
