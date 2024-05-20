const express = require("express");
const app = express();
const connection = require("./mysqlConnection");
const cors = require("cors");
const port = 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const apiUrl = "/api/v1";

app.get(`${apiUrl}/users`, (req, res) => {
  connection.query(
    "SELECT email FROM Users WHERE id = 1",
    function (err, rows, fields) {
      console
      if (err) throw err;
      setTimeout(() => {
        res.json(rows);
      }, 500);
    }
  );
});

app.listen(port, () => console.log(`Node API live at http://localhost:${port}`));