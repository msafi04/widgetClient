import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaWindowMaximize, FaCircleArrowRight } from "react-icons/fa6";

import "./popup.css";
import Ratings from "../ratings/Ratings";
import RatingIcons from "../ratingIcons/RatingIcons";

const Popup = ({ closePopup, setClosePopup }) => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [minimizePopup, setMinimizePopup] = useState(false);
  const [clickNext, setClickNext] = useState(false);
  const [formInput, setFormInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formInput, selectedNumber);
    setFormInput("");
    setClosePopup(true);
  };

  const containerStyle = {
    backgroundColor: "#e5d0d0",
  };

  const minContainerStyle = {
    backgroundColor: "#e5d0d0",
  };

  const closeBtnStyle = {
    fontSize: "18px",
    color: "#4f4e4e",
  };

  const contentStyle = {
    backgroundColor: "#e5d0d0",
  };
  const headerStyle = {
    fontSize: "24px",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    color: "black",
  };
  const clickNextStyle = {
    fontSize: "25px",
    color: "#5c5b5b",
  };

  const submitBtnStyle = {
    fontSize: "15px",
    color: "#fcfafa",
    width: "6rem",
    height: "2rem",
    backgroundColor: "#414f41",
    borderRadius: "14px",
  };

  return (
    <div
      className={`${minimizePopup ? "popup-minContainer" : "popup-container"}`}
      style={minimizePopup ? minContainerStyle : containerStyle}
      onClick={() => (minimizePopup ? setMinimizePopup((prev) => !prev) : null)}
    >
      <div className="popup-topBtn">
        {
          !minimizePopup ? (
            <FaMinus
              className="minBtn"
              onClick={() => setMinimizePopup((prev) => !prev)}
            />
          ) : null
          // (
          // <FaWindowMaximize
          //   className="maxBtn"
          //   onClick={() => setMinimizePopup((prev) => !prev)}
          // />
          //)
        }
        <IoClose
          className="popup-closeBtn"
          onClick={() => setClosePopup(true)}
          style={closeBtnStyle}
        />
      </div>
      {!minimizePopup && !clickNext && (
        <div className="popup-content" style={contentStyle}>
          <p className="popup-header" style={headerStyle}>
            How do you like our service?
          </p>
          <div className="popup-feedback">
            {/* <Ratings
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            /> */}
            <RatingIcons
              iconCount={5}
              iconType={"star"}
              iconNoFillColor={"orange"}
              iconFillColor={"orange"}
              iconSize={"40px"}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </div>
          <FaCircleArrowRight
            className="popup-nextStep"
            style={clickNextStyle}
            onClick={() => setClickNext(true)}
            disabled={selectedNumber === 0}
          />
        </div>
      )}
      {clickNext && (
        <div className="popup-nextContent">
          <p className="popup-header" style={headerStyle}>
            Tell Us More
          </p>
          <div className="popup-feedback">
            <textarea
              className="popup-inputBox"
              name="textArea"
              form="textForm"
              onChange={(e) => setFormInput(e.target.value)}
            ></textarea>
            <form
              name="textForm"
              className="popup-textForm"
              onSubmit={handleOnSubmit}
            >
              <button
                type="submit"
                className="popup-submitBtn"
                style={submitBtnStyle}
                disabled={!formInput}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
