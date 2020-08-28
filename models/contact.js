// Require library
const mongoose = require("mongoose");

//Creating contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

//Assining name to the model which will be seen as collection in DB
const Contact = mongoose.model("Contact", contactSchema);

//Exporting out model
module.exports = Contact;
