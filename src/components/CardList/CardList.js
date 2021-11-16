import React from "react";
import Card from "../Card/Card";
function CardList() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
export default CardList;
