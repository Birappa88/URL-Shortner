const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const route = require("./routes/route")
require("dotenv").config()

const app = express();
app.use(bodyparser.json());


// -----++++-----=+=-------[ Connect to MongoDb ]-----=+=-----+++++------ //

mongoose
  .connect(
    "mongodb+srv://coolboyalan:q5uvHFHuERjn6f5K@cluster0.yzrqd.mongodb.net/group16url-shortner",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.log(err));

app.use("/",route)

// -----++++-----=+=-------[ Connect to PORT ]-----=+=-----+++++------ //

app.listen(process.env.PORT || 3000,function(){
    console.log("Runnig on PORT " + process.env.PORT || 3000)
})

// -----++++-----=+=-------****************-----=+=-----+++++------ //