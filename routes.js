const express = require("express");
const router = express.Router();

const {getData} = require('./helpers/scrapping')
const {
  getOpeningDataByCode,
  getOpeningData,
  getAllEcos,
} = require("./handlers");

router.get("/", getAllEcos);
router.param("code", getOpeningDataByCode);
router.get('/:code', getOpeningData)

module.exports=router;