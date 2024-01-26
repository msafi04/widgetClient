import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaCircleArrowRight } from "react-icons/fa6";
import socketIOClient from "socket.io-client";

import "./popup.css";
import Ratings from "../ratings/Ratings";
import RatingIcons from "../ratingIcons/RatingIcons";
import { publicAxios } from "../../app/api/client";

const Popup = ({
  closePopup,
  setClosePopup,
  config,
  productId,
  customerId,
}) => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [minimizePopup, setMinimizePopup] = useState(false);
  const [clickNext, setClickNext] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [socketData, setSocketData] = useState({});

  useEffect(() => {
    if (Object.keys(socketData).length) {
      const socket = socketIOClient("http://localhost:3009/");
      socket.emit("widgetStream", socketData);
      setSocketData({});
    }
  }, [socketData]);

  const handleCancel = async (e) => {
    e.preventDefault();
    setSocketData({
      userId: productId,
      customerId: customerId,
      isCancelled: true,
      updatedAt: new Date(),
    });
    try {
      await publicAxios.post("/survey/post", {
        id: productId,
        customerId: customerId,
        isCancelled: true,
      });
    } catch (err) {
      console.log(err);
    }
    setClosePopup(true);
  };

  const handleClickNext = async (e) => {
    e.preventDefault();
    setSocketData({
      userId: productId,
      customerId: customerId,
      ratingsGiven: selectedNumber,
      updatedAt: new Date(),
    });
    try {
      await publicAxios.post("/survey/post", {
        id: productId,
        customerId: customerId,
        ratingsGiven: selectedNumber,
      });
    } catch (err) {
      console.log(err);
    }
    setClickNext(true);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSocketData({
      userId: productId,
      customerId: customerId,
      comment: formInput,
      updatedAt: new Date(),
    });
    try {
      await publicAxios.post("/survey/post", {
        id: productId,
        customerId: customerId,
        comment: formInput,
      });
    } catch (err) {
      console.log(err);
    }
    setFormInput("");
    setClosePopup(true);
  };

  const containerStyle = {
    backgroundColor: config?.widgetBGColor || "#e5d0d0",
    right: `${config?.widgetPosition}rem` || "2rem",
  };

  const minContainerStyle = {
    backgroundColor: config?.widgetBGColor || "#e5d0d0",
  };

  const closeBtnStyle = {
    fontSize: "18px",
    color: "#4f4e4e",
  };

  const contentStyle = {
    backgroundColor: config?.widgetBGColor || "#e5d0d0",
  };
  const headerStyle = {
    fontSize: config?.headerFontSize || "20px",
    fontFamily: config?.fontFamily || "Verdana, Geneva, Tahoma, sans-serif",
    color: config?.headerTextColor || "black",
  };
  const clickNextStyle = {
    fontSize: config?.nextButtonSize || "25px",
    color: config?.nextButtonColor || "#5c5b5b",
  };

  const submitBtnStyle = {
    fontSize: config?.submitFontSize || "15px",
    color: config?.submitTextColor || "#fcfafa",
    width: config?.submitBtnWidth || "6rem",
    height: config?.submitBtnHeight || "2rem",
    backgroundColor: config?.submitButtonBG || "#414f41",
    borderRadius: "14px",
  };
  return (
    <div
      className={`${minimizePopup ? "popup-minContainer" : "popup-container"}`}
      style={minimizePopup ? minContainerStyle : containerStyle}
      onClick={() => (minimizePopup ? setMinimizePopup((prev) => !prev) : null)}
    >
      <div className="popup-topBtn">
        {!minimizePopup ? (
          <FaMinus
            className="minBtn"
            onClick={() => setMinimizePopup((prev) => !prev)}
          />
        ) : null}
        <IoClose
          className="popup-closeBtn"
          onClick={handleCancel}
          style={closeBtnStyle}
        />
      </div>
      {!minimizePopup && !clickNext && (
        <div className="popup-content" style={contentStyle}>
          <p className="popup-header" style={headerStyle}>
            {config?.headerText}
          </p>
          <div className="popup-feedback">
            {config?.iconName === "scale" ? (
              <Ratings
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />
            ) : (
              <RatingIcons
                iconCount={config?.iconCount}
                iconType={config?.iconName || "star"}
                iconNoFillColor={config?.iconColor || "orange"}
                iconFillColor={config?.iconColor || "orange"}
                iconSize={config?.iconSize}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />
            )}
          </div>
          <FaCircleArrowRight
            className="popup-nextStep"
            style={clickNextStyle}
            onClick={handleClickNext}
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
