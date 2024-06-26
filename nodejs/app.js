const express = require("express");
const playerRouter = require('./routes/playerRouter');
const countryRouter = require('./routes/countryRouter');
const predictionRouter = require('./routes/predictionRouter');
const fixtureRouter = require('./routes/fixtureRouter');
const matchRouter = require('./routes/matchRouter');
const authRouter = require('./routes/authRouter'); 
const cors = require("cors");

const app = express();
const db = require("./mysqlConnection");
const port = 3008;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter); 

app.use(playerRouter);
app.use(countryRouter);
app.use(predictionRouter);
app.use(fixtureRouter);
app.use(matchRouter);

app.listen(port, () => console.log(`Node API live at http://localhost:${port}`));
