import React, { useState } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";
import { DishData } from "./utils/constant/CardData";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [modal, ismodal] = useState(false);
  return (
    <>
      <Header />
      <div className="container image w-[90%] mx-auto ">
        <img
          className="rounded-lg"
          src="https://mandihouse.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1711523822-_0010_Popular-Items-category.jpg%3Fq%3D10&w=1920&q=75"
          alt=""
        />
      </div>
      <div className="card-wrapper">
        {DishData.map((item) => {
          return <Card data={item} key={item.id} togglemodal={ismodal} />;
        })}
      </div>

      <div>{modal && <Modal data={"hi"} setmodal={ismodal} />}</div>
    </>
  );
};

export default App;
