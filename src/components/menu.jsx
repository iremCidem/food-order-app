import React, { useState } from "react";
import menupic from "../images/menu.png";
import { AddCartList } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function Menu({ menuName, content, price }) {
  const [showPop, setShowPop] = useState(false);
  function showPopUp() {
    setShowPop(true);
    const timeout = setTimeout(() => {
      setShowPop(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }
  const popup = (
    <div>
      <p className="fs-3 text-orange-2">Added to cart...</p>
    </div>
  );
  function handleAddCartList() {
    dispatch(AddCartList({ menuName, price }));
    showPopUp();
  }
  const dispatch = useDispatch();

  return (
    <div className="card ">
      {showPop && popup}
      <img src={menupic} alt="menu" height="180px" />
      <div className="card-body">
        <h2 className="card-title">{menuName} menu</h2>

        <p className="card-text">{content}</p>
        <h5>${price}</h5>
        <button
          onClick={handleAddCartList}
          className="btn"
          style={{ backgroundColor: "#E59866" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
