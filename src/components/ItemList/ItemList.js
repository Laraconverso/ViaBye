import React from "react";
import { Item } from "../Item/Items";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};



