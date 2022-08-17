import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";

import { useState, useEffect, useRef } from "react";

const FolderList = () => {
  return (
    <div>
      <motion.div className="carousel">
        <motion.div className="innerCarousel d-flex justify-content-around">
          <Card style={{ width: "11rem" }}>
            <Card.Body>
              <Card.Title>90s</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "11rem" }}>
            <Card.Body>
              <Card.Title>90s</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "11rem" }}>
            <Card.Body>
              <Card.Title>90s</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "11rem" }}>
            <Card.Body>
              <Card.Title>90s</Card.Title>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FolderList;
