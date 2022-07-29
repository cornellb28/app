const express = require("express");
const multer = require("multer");

const router = express.Router();

router.get("/", function (request, response, next) {
  response.render("fileupload", { title: "my json object" });
});
