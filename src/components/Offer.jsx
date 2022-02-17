import React from "react";
import offerData from "../offerData";

const Offer = () => {
  const isNewTag = (name) => (
    <div className="box box1">
      {name}
      <span>(nowość)</span>
      <div className="point"></div>
    </div>
  );
  const isntNewTag = (name, id) => (
    <div id={id} className="box">
      {name}
    </div>
  );
  return (
    <div className="containerInsideThird">
      {offerData.map(({ id, name, isNew }) => (isNew ? isNewTag(name ) : isntNewTag(name, id)))}
    </div>
  );
};

export default Offer;
