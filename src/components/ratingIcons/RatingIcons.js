import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaHand,
  FaRegHand,
  FaFaceGrinBeam,
  FaRegFaceGrinBeam,
  FaFaceGrinHearts,
  FaRegFaceGrinHearts,
  FaFaceSmile,
  FaRegFaceSmile,
} from "react-icons/fa6";
import {
  BsHandThumbsUpFill,
  BsHandThumbsUp,
  BsGiftFill,
  BsGift,
} from "react-icons/bs";
import { MdCelebration, MdOutlineCelebration } from "react-icons/md";
import {
  IoBalloon,
  IoBalloonOutline,
  IoPaw,
  IoPawOutline,
  IoPlanet,
  IoPlanetOutline,
  IoHandRight,
  IoHandRightOutline,
} from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "./ratingicons.css";

const iconObject = {
  star: [AiFillStar, AiOutlineStar],
  balloon: [IoBalloon, IoBalloonOutline],
  paw: [IoPaw, IoPawOutline],
  planet: [IoPlanet, IoPlanetOutline],
  celebration: [MdCelebration, MdOutlineCelebration],
  thumbsUp: [BsHandThumbsUpFill, BsHandThumbsUp],
  gift: [BsGiftFill, BsGift],
  heart: [FaHeart, FaRegHeart],
  faceGrin: [FaFaceGrinBeam, FaRegFaceGrinBeam],
  faceGrinHearts: [FaFaceGrinHearts, FaRegFaceGrinHearts],
  faceSmile: [FaFaceSmile, FaRegFaceSmile],
  hiFive: [IoHandRight, IoHandRightOutline],
};

const RatingIcons = ({
  iconCount = 5,
  iconType,
  iconNoFillColor = "black",
  iconFillColor = "black",
  iconSize = "40px",
  selectedNumber,
  setSelectedNumber,
}) => {
    const IconFillName = iconObject[iconType][0]
    const IconNoFillName = iconObject[iconType][1]

    console.log(IconFillName)
  const iconNoFillStyle = {
    color: iconNoFillColor,
    fontSize: iconSize,
  };

  const iconFillStyle = {
    color: iconFillColor,
    fontSize: iconSize,
  };
  return (
    <div className="ratingContainer">
      {[...Array(iconCount).keys()].map((_, index) =>
        selectedNumber < index + 1 ? (
          <IconNoFillName
            key={index}
            style={iconNoFillStyle}
            className="icon-nofill-style"
            onClick={() => setSelectedNumber(index + 1)}
          />
        ) : (
          <IconFillName
            key={index}
            style={iconFillStyle}
            className="icon-fill-style"
            onClick={() => setSelectedNumber(index + 1)}
          />
        )
      )}
    </div>
  );
};

export default RatingIcons;
