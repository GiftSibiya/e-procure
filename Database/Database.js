/// Import Dependancies ///

require("dotenv").config();
const express = require("express");
const connectToDb = require("./ConnectToDb");
const Tender = require("./models/step1");
const cors = require("cors");
//--//

// starting/calling ou express app //

const app = express();
app.use(express.json());
app.use(cors());
// Give express glasses so it can see json

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
  try {
    res.json({ tender: tender });
    console.log("Data Has been sent to mongo");
  } catch (err) {
    console.log(`Could not ge the data back: ${err}`);
  }
});

// 3000 is our frontend and 4000 is our backend./

app.listen(process.env.PORT, async () => {
  try {
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.log(
      `couldn't start the server on port ${process.env.PORT}, ${err}`
    );
  }
});

app.post("/submit", (req, res) => {
  // Process the data from the request body
  const data = req.body;

  // Perform some logic and send a response
  res.json({ message: "Data received successfully", data });
});

// return database data here //

app.get("/tenderView", async (req, res) => {
  try {
    const allTenders = await Tender.find();

    // Loop through each tender and log specific elements
    allTenders.forEach((tender) => {
      const {
        _id,
        tenderName,
        tenderScope,
        tenderBid,
        tenderClosing,
        tenderSessionDate,
        tenderVenue,
      } = tender;
      console.log(`Tender ID: ${_id}`);
      console.log(`Tender Name: ${tenderName}`);
      console.log(`Tender Scope: ${tenderScope}`);
      console.log(`Tender Bid: ${tenderBid}`);
      console.log(`Tender Closing: ${tenderClosing}`);
      console.log(`Tender Session Date: ${tenderSessionDate}`);
      console.log(`Tender Venue: ${tenderVenue}`);
      console.log("---------------");
    });

    res.json({ tenders: allTenders });
  } catch (err) {
    console.error(`Error fetching data from the database: ${err}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
