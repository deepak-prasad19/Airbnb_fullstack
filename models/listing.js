const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/white-and-red-wooden-house-miniature-on-brown-table-rgJ1J8SDEAY",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/white-and-red-wooden-house-miniature-on-brown-table-rgJ1J8SDEAY"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;
