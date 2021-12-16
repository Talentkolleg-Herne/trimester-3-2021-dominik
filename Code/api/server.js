const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());


const vereinsSchema = new mongoose.Schema(
  {
    name: String,
    gruendungsjahr: Number
  },
  { collection: "vereine" }
);
var vereine = mongoose.model('vereine', vereinsSchema);



mongoose.connect('mongodb://dominik:' + process.env.MONGODB_PASSWORD +  '@' + process.env.MONGODB_URL + ':' + process.env.MONGODB_PORT + '/dominik?authSource=admin')
const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));

db.once('open', function() {
  console.log("MongoDB database connection established successfully");
})


app.get("/tkr", function (req, res) {
  res.send("Hello World and TKR");
})

app.post("/test", function (req, res) {
  console.log(req.body);

  vereine.insertMany(req.body);
  res.sendStatus(201);
})


app.get("/beispiel/:name", function (req, res) {
  let limit = req.query.limit !== undefined ? parseInt(req.query.limit) : 0;
  let skip = req.query.skip !== undefined ? parseInt(req.query.skip) : 0;
  let asc = req.query.asc !== undefined ? parseInt(req.query.asc) : -1;

  let sort = {};

  if (req.query.sort !== undefined) {
    sort[req.query.sort] = asc;
  }

  vereine.find({})
    .limit(limit)
    .skip(skip)
    .sort(sort)
    .exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
})


app.listen(3000, function () {
  console.log('listening on port 3000');
})
