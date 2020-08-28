// Require library
const mongoose = require("mongoose");

// Connecting to DataBase
mongoose.connect("mongodb://localhost/contacts_list_db");

//Aquiring DataBase To Check If it is available or not
const db = mongoose.connection;

//Error
db.on("error", console.error.bind(console, "Error in Connecting to DataBase"));

//Up And Running
db.once("open", function () {
  console.log("Successfully connect to MongoDB");
});
