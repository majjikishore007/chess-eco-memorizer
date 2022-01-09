require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const { loadData } = require("./helpers/scrapping");
//Routes
const memoizeRoutes = require("./routes");
app.use("/", memoizeRoutes);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("💚 DB IS CONNECTED");
  })
  .catch((err) => {
    console.error(err);
  });

//loading the scaped  data form the website to db
loadData();

// server startup

app.listen(PORT, () => {
  console.log(`💚 💙 💛 app is  listening on ${PORT}`);
});
