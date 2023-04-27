import express from "express";
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// localhost:3000/api/getAllInvoice
// localhost:3000/api/getInvoice

app.use(bodyParser.json());
app.use("/api/v1", require("./routes/Get/get"));
