import React from "react";

function Cards({item}) {
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <h4>price- $ {item.price}</h4>
      <p>{item.rating} stars</p>
    </div>
  );
}

export default Cards;
