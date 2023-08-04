const express = require("express");
const { connection } = require("./db");

const app = express();

app.get("/api/shopping-list", (req, res) => {
  connection.query("SELECT * FROM shopping_list", (err, data) => {
    if (err) return callback(err, null);
    res.status(200).json({
      status: "success",
      length: data.length,
      data,
    });
  });
});

app.listen(8080, () => console.log(`Server is listening on port ${8080}`));