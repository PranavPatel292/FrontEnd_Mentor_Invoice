import express from "express";
const bodyParser = require("body-parser");

const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];

const app = express();
const port = 3000;

// TODO: - add localhost:3000 the only allowed origins
app.use(cors());

// localhost:3000/api/getAllInvoice
// localhost:3000/api/getInvoice

app.use(bodyParser.json());
app.use("/api/v1", require("./routes/Get/get"));
app.use("/api/v1", require("./routes/Post/post"));
app.use("/api/v1", require("./routes/Delete/delete"));

app.listen(port, () => console.log("Server listening on port " + port));
