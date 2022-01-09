const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const Eco = require("../models/eco");
//data we need to extract from the html file
// [
//     {
//         id,
//         title,
//         number,
//     }
// ]
// <tr>
//     <td>
//         <font>id</font>
//     </td>
//     <td>
//         <font>
//             <b>Title</b>
//             <font>Number</font>
//         </font>

//     </td>
// </tr>

const url = "https://www.chessgames.com/chessecohelp.html";

const loadData = async () => {
  console.log("loading ........");
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const trElement = $("tr");
  // console.log(trElement);
  console.log(trElement.length);
  trElement.each(function (idx, el) {
    const data = { code: "", opening: "", move: "" };
    const tdElement = $(el).children("td");

    const code = $(tdElement[0]).children("font").text();
    const opening = $(tdElement[1]).children("font").children("b").text();
    const move = $(tdElement[1]).children("font").children("font").text();

    data.code = code;
    data.opening = opening;
    data.move = move;
    var eco = new Eco(data);
    eco.save((err, eco) => {
      if (err) {
        return res.status(400).json({
          error: "Unable to save the todo list ",
        });
      }
    });
    console.log("loading complete :)");
  });
};

module.exports = { loadData };
