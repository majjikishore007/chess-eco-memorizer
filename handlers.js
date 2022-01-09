const { getData } = require("./helpers/scrapping")
const Eco = require("./models/eco");
const getAllEcos = (req, res) => {
  Eco.find().exec((err, ecos) => {
    if (err) {
      return res.status(404).json({
        error: "product not found",
      });
    }
    res.send(ecos);
  });
};
const getOpeningDataByCode = async (req, res, next, code) => {
  Eco.find({ code }).exec((err, eco) => {
    if (err) {
      return res.status(404).json({
        error: "product not found",
      });
    }
    req.result = eco;
    next();
  });
};

const getOpeningData = (req, res) => {
  return res.json(req.result);
};
module.exports = { getOpeningDataByCode, getOpeningData, getAllEcos };