import React from "react";
import Navbar from "../components/navbar";
import Menu from "../components/menu";

export default function Campaigns() {
  return (
    <div className="back-orange">
      <Navbar />
      <div className="center">
        <div className="row container text-center m-auto">
          <div className="col-3">
            <Menu
              menuName="Mixed"
              content="mushroom, cheddar, tomato, sausage, and salami with potato and beverage"
              price="22"
            />
          </div>
          <div className="col-3">
            <Menu
              menuName="3 cheese "
              content="gouda, cheddar,mozzarella, tomato with potato and beverage"
              price="18"
            />
          </div>
          <div className="col-3">
            <Menu
              menuName="Spicy "
              content="cheddar, tomato, sausage,red chilli powder and pepper with potato and beverage"
              price="18"
            />
          </div>
          <div className="col-3">
            <Menu
              menuName="Chicken"
              content="mushroom, cheddar, chicken, tomato, pepper with potato and beverage"
              price="19"
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
