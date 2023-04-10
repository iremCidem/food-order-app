import React from "react";
import Navbar from "../components/navbar";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function HomePage() {
  return (
    <div className="bg-image">
      <Navbar />
      <div className="text-center">
        <div className="text-light">
          <h1>PizzaFiesta</h1>
          <p>
            <BsFillTelephoneFill /> 455 0 450
          </p>
        </div>
      </div>
    </div>
  );
}
