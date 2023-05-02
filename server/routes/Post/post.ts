import { createInvoice } from "../../controllers/postController";

const router = require("express").Router();

router.post("/createInvoice", createInvoice);

module.exports = router;
