const express = require("express");
const router = express.Router();

const {getData} = require('./helpers/scrapping')
const { getOpeningDataByCode, getOpeningData } = require('./handlers')

router.get('/', async (req, res) => {
    const data = await getData()
    res.send(data)
})
router.param("code", getOpeningDataByCode);
router.get('/:code', getOpeningData)

module.exports=router;