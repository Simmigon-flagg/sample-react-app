import React from "react";
import { Link } from "react-router-dom";

const ItemsList = ({ items }) => {
  return (
    <>
        <p>This is a list of items</p>
      {items.map((item, key) => (
        <Link key={key} to={`/item/${item.name}`}>
          <h6>{item.title}</h6>
          <p>{item.content[0].substr(0, 120)}...</p>
          
        </Link>
      
      ))}
    </>
  );
};

export default ItemsList;
