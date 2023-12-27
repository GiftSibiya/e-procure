/// Import Dependancies ///

const express = require("express");

//--//

// starting/calling ou express app //

const app = express();

//-//

// This is for form submission

/// The get and post thisngs are here in the router
app.get("/", (req, res) => {
  res.json({ Hello: "world" });
});
// 300 is our frontend and 4000 is our backend.

app.listen(4000, () => {
  console.log(`server is running on port 4000`);
});
