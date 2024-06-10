const express = require("express");
const bodyParser = require('body-parser');
const playerRouter = require('./routes/playerRouter')
const countryRouter = require('./routes/countryRouter')
const predictionRouter = require('./routes/predictionRouter')
const fixture = require('./routes/fixtureRouter')
const matchRouter = require('./routes/matchRouter')

const app = express();
const db = require("./mysqlConnection");
const cors = require("cors");
const port = 3008;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser);
app.use(cors());

const apiUrl = "/api/v1";

app.get(`${apiUrl}/users`, (req, res) => {
  db.query(
    "SELECT * FROM Players",
    function (err, rows, fields) {
      if (err) throw err;
      setTimeout(() => {
        res.json(rows);
      }, 500);
    }
  );
});

app.use(playerRouter);
app.use(countryRouter);
app.use(predictionRouter)
app.use(fixture)
app.use(matchRouter)

app.listen(port, () => console.log(`Node API live at http://localhost:${port}`));