const { getData } = require("./helpers/scrapping")

const getOpeningDataByCode = async (req, res, next, code) => {

    console.log("getting opening data by code");
    const data = await getData()
    const result = data.filter(d => d.code === code)
    console.log("result: " + result.length);
    if (result == null|| result.length === 0) {
        return res.status(400).json({
             error:"Opening not found"
        })
    }
    res.result = result;
    next();
}

const getOpeningData = (req, res)=>{ 
  return res.json(res.result);
};
module.exports ={getOpeningDataByCode,getOpeningData}