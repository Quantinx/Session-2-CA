const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fakedatabase = [];

//Require is how importing works in node, import may work with TS however

const PORT = process.env.PORT || 8080; //Will select a env variable, otherwise default will be 8080
//Enviroment variables are stored on the local machine which can be configured on tthe machine which is running the server

const logger = (req, _, next) => {
  console.log(req.headers);
  next(); //next is needed on middleware to run the next function
};

const handlePost = (req, res, _) => {
  fakedatabase.push(req.body);
  res.status(201).end();
};

const handleGet = (req, res, _) => {
  res.json(fakedatabase);
};

app.use(bodyParser.json());
app.use(logger);
app.listen(PORT, () => {
  //creates the server listening on the port
  console.log("Server listening on " + PORT);
});

app.post("/todo", handlePost);

app.get("/todo", handleGet);
