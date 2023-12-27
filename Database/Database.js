/// Import Dependancies ///

require("dotenv").config();
const express = require("express");
const connectToDb = require("./ConnectToDb");
const Tender = require("./models/step1");
//--//

// starting/calling ou express app //

const app = express();

// Give express glasses so it can see json
app.use(express.json());

//-//
connectToDb();
// This is for form submission

/// The get and post thisngs are here in the router
app.get("/", (req, res) => {
  res.json({ Hello: "world" });
});

app.post("/tenders", async (req, res) => {
  // Get the sent data from the body
  const tenderName = req.body.tenderName;
  const tenderBid = req.body.tenderBid;
  const tenderScope = req.body.tenderScope;
  const tenderClosing = req.body.tenderClosing;
  const tenderSessionDate = req.body.tenderSessionDate;
  const tenderVenue = req.body.tenderVenue;

  // Create a tender
  const tender = await Tender.create({
    tenderName: tenderName,
    tenderBid: tenderBid,
    tenderScope: tenderScope,
    tenderClosing: tenderClosing,
    tenderSessionDate: tenderSessionDate,
    tenderVenue: tenderVenue,
  });

  // Sespond with sent note
  res.json({ tender: tender });
});

// 300 is our frontend and 4000 is our backend.

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
