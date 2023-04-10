import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBasket2Fill } from "react-icons/bs";

export default function Navbar() {
  const cost = useSelector((state) => {
    return state.Cart.totalCost;
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg back-orange ">
        <ul className="navbar-nav">
          <Link to="/" className="nav-link ">
            Home Page
          </Link>
          <Link to="/aboutus" className="nav-link ">
            About Us
          </Link>
          <Link to="/campaigns" className="nav-link ">
            Campaigns
          </Link>
          <Link to="/restaurants" className="nav-link me-auto">
            Restaurants
          </Link>
          <Link to="/cart" className="nav-link" style={{ color: "#ECF0F1 " }}>
            <BsFillBasket2Fill /> Cart <b> ${cost} </b>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
