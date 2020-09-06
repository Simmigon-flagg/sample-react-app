import React from "react";
import content from "../FakeData/database";

import ItemsList from '../Components/ItemsList';
const ItemsListPage = () => {
  return (
    <>
      <h1>List of items Page</h1>
      <ItemsList items={content} />
    </>
  );
};

export default ItemsListPage;
