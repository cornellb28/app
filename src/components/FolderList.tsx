import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import image1 from "../images";

const FolderList = () => {
  console.log(image1);
  return (
    <div>
      <motion.div className="carousel">
        <motion.div className="innerCarousel"></motion.div>
      </motion.div>
    </div>
  );
};

export default FolderList;
