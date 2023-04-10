import React from "react";
import Navbar from "../components/navbar";

export default function AboutUs() {
  return (
    <div className="back-orange">
      <Navbar />
      <div className="center">
        <div className="container">
          <h3 className="text-light">PizzaFiesta</h3>
          <p className="border p-5 fs-5">
            This pizza restaurant has become a popular destination for pizza
            lovers with its delicious pizzas prepared with fresh ingredients and
            a cozy atmosphere. Various pizza options on the menu are offered to
            appeal to all tastes. There is also a garden section for those who
            want to dine outdoors on hot summer days. Fast service and friendly
            staff are also among the other pluses of the restaurant.
          </p>
        </div>
      </div>
    </div>
  );
}
