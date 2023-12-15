import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaWindowMaximize, FaCircleArrowRight } from "react-icons/fa6";

import "./popup.css";
import Ratings from "../ratings/Ratings";

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
  return (
    <div className={`${minimizePopup ? "minContainer" : "container"}`}>
      <div className="topBtn">
        {!minimizePopup ? (
          <FaMinus
            className="minBtn"
            onClick={() => setMinimizePopup((prev) => !prev)}
          />
        ) : (
          <FaWindowMaximize
            className="maxBtn"
            onClick={() => setMinimizePopup((prev) => !prev)}
          />
        )}
        <IoClose className="closeBtn" onClick={() => setClosePopup(true)} />
      </div>
      {!minimizePopup && !clickNext && (
        <div className="content">
          <p className="header">How do you like the service?</p>
          <div className="feedback">
            <Ratings
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </div>
          <FaCircleArrowRight
            className="nextStep"
            onClick={() => setClickNext(true)}
            disabled={selectedNumber === 0}
          />
        </div>
      )}
      {clickNext && (
        <div className="nextContent">
          <p className="header">Tell Us More</p>
          <div className="feedback">
            <textarea
              className="inputBox"
              name="textArea"
              form="textForm"
              onChange={(e) => setFormInput(e.target.value)}
            ></textarea>
            <form
              name="textForm"
              className="textForm"
              onSubmit={handleOnSubmit}
            >
              <button type="submit" className="submitBtn" disabled={!formInput}>
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
