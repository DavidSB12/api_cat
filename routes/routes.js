const express = require('express');
const router = express.Router();
const {getJsonData} = require("../controller/apiController")

router.get("/apiCat", getJsonData)

module.exports = router;