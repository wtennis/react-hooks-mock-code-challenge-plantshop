import React, { useState } from "react";

function PlantCard({plant}) {
  const {name, price, image = "https://via.placeholder.com/400"} = plant
  const [buttonStatus, setButtonStatus] = useState(true)

  return (
    <li className="card">
      {/* conditionally render image string based on whether it's local or not */}
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {buttonStatus ? (
        <button onClick = {() => setButtonStatus(!buttonStatus)}className="primary">In Stock</button>
      ) : (
        <button onClick = {() => setButtonStatus(!buttonStatus)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;


//Original image tag with placeholder src: 
{/* <img src={"https://via.placeholder.com/400"} alt={"plant name"} /> */}
{/* <img src={`http://localhost:6001/${image}`} alt={name} /> */}
