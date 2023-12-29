const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema({
  tenderName: String,
  tenderScope: String,
  tenderBid: String,
  tenderIssue: String,
  tenderClosing: String,
  tenderSessionDate: String,
  tenderVenue: String,
});

const Tender = mongoose.model("Tender", tenderSchema);

module.exports = Tender;
