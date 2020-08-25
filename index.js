const express = require("express");
const path = require("path");

const port = 8000;

const app = express();

var contactList = [
  {
    name: "Nick",
    phone: "8319469688",
  },
  {
    name: "Chandan",
    phone: "1234567890",
  },
  {
    name: "Ashish",
    phone: "123099929302",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.render("home", {
    TITLE: "I am Nick",
    contact_list: contactList,
  });
});

app.post("/create-contact", function (req, res) {
  contactList.push(req.body);
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log("Server is running on port", port);
});
