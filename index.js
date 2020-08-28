const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");
const Contact = require("./models/contact");
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
app.use(express.static("assets"));

//Fetch Data From DB
app.get("/", function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log("Error in Fetching Data");
    }
    res.render("home", {
      TITLE: "Contact List",
      contact_list: contacts,
    });
  });
});

//! Delete Contacts////////////////////
app.get("/delete-contact", function (req, res) {
  let id = req.query.id;
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting Contact");
    }
    return res.redirect("back");
  });
});

//Create Contact Controller
app.post("/create-contact", function (req, res) {
  // contactList.push(req.body);
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log("Error in creating new contact");
      }
      console.log("Successfully Created new Contact", newContact);
      return res.redirect("back");
    }
  );
});

//Server Status
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log("Server is running on port", port);
});
