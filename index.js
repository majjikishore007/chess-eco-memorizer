require('dotenv').config()
const express = require('express')
const app = express()


const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

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

// server startup

app.listen(PORT, () => {
  console.log(`💚 💙 💛 app is  listening on ${PORT}`);
});
