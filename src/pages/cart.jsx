import React from "react";
import Navbar from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { DeleteCartList, deleteAllItems } from "../store/slices/cartSlice";
import { BsFillBasket2Fill } from "react-icons/bs";

export default function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => {
    return state.Cart.cartList;
  });
  const totalCost = useSelector((state) => {
    return state.Cart.totalCost;
  });

  function handleClick(id) {
    dispatch(DeleteCartList(id));
  }
  function handleOrderClick() {
    alert("Your order has been taken");
    dispatch(deleteAllItems());
  }
  return (
    <div className="back-orange">
      <Navbar />
      <div className="center fs-3 ">
        {" "}
        <div className=" text-center border border-light p-5">
          <h3 className="border-bottom text-light">
            <BsFillBasket2Fill />
            {""} My Cart
          </h3>
          <div className="my-3">
            {cartList.map((item) => {
              return (
                <div key={item.id} className="my-2 ">
                  {item.name} Menu ${item.cost} {""}
                  <button
                    className="text-light"
                    style={{ backgroundColor: "#E59866", border: "none" }}
                    onClick={() => handleClick(item.id)}
                  >
                    {" "}
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            Total Cost: <b>${totalCost} </b>{" "}
          </div>
          <button
            className="btn"
            style={{ backgroundColor: "white", color: "#E59866" }}
            onClick={handleOrderClick}
          >
            Order Now
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
