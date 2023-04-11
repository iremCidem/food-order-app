import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function Restaurants() {
  const [inputValue, setInputValue] = useState();
  const [renderedAddress, setRenderedAddress] = useState();
  const [showContent, setShowContent] = useState(false);
  const Addresses = [
    { city: "eskişehir", address: "Espark Mall" },
    { city: "bursa", address: "Korupark Mall" },
    { city: "izmir", address: "Alsancak, No:120" },
  ];

  function handleSearchAddress(e) {
    e.preventDefault();
    const data = Addresses.filter((value) => value.city === inputValue);
    setRenderedAddress(data);
    setShowContent(true);
  }
  function handleChangeValue(e) {
    setShowContent(false);
    setInputValue(e.target.value.toLowerCase());
  }
  return (
    <div className="bg-map">
      <Navbar />
      <div className="center">
        <form className="text-center text-light">
          <label className="form-label p-2 fs-3">
            <b>Search City Name </b>
          </label>
          <input
            className="form-control p-2"
            type="text"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <button
            onClick={handleSearchAddress}
            className="btn m-3 text-light"
            style={{ backgroundColor: "#E59866" }}
          >
            Search
          </button>
          <div className="fs-3 ">
            {showContent && renderedAddress && renderedAddress.length === 1 ? (
              <div>
                <b>
                  There is a restaurant in{" "}
                  {renderedAddress.map((item) => item.address)}{" "}
                </b>
              </div>
            ) : (
              showContent && (
                <div>
                  <b>
                    {" "}
                    We do not have a restaurant in {inputValue.toUpperCase()}{" "}
                  </b>
                </div>
              )
            )}
          </div>{" "}
        </form>
      </div>
    </div>
  );
}
