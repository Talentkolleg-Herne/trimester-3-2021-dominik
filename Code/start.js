const express = require('express');
const app = express();
const mongoose = require('mongoose');

const vereinSchema = new mongoose.Schema(
  {
    name: String,
    gruendungsjahr: Number
  },
  { collection: "vereine" }
);

var vereine = mongoose.model('vereine', vereinSchema);



mongoose.connect('mongodb://dominik:' + process.env.MONGODB_PASSWORD +  '@' + process.env.MONGODB_URL + ':' + process.env.MONGODB_PORT + '/dominik?authSource=admin')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});



app.get("/api/v1/vereine", function (req, res) {
  vereine.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  /*
  try {
    const v = await vereine.find({});
    res.json(v)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  */
})

app.listen(3000, function() {
  console.log('listening on 3000')
})