// Selector.js
import React from "react";

function Selector({ theType }) {
    
  return (
    <select className="form-select" onChange={theType}>
      <option value="">All</option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
}

export default Selector;
