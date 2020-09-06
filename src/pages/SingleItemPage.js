import React from "react";
import database from "../FakeData/database";
import ItemsList from "../Components/ItemsList";
import NotFound from "./NotFoundPage";
const ListItemsPage = ({ match }) => {
  const name = match.params.name;
  
  const foundItem = database.find((content) => content.name === name);
  const otherItems = database.filter((content) => content.name !== name);

  if (!foundItem) return <NotFound />
  return (
    <>
      <div>This is a Single Item</div>
      <h3>Url Value was {name}</h3>
      <h3>{foundItem.title}</h3>
      {foundItem.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ItemsList items={otherItems}/>
    </>
  );
};

export default ListItemsPage;
