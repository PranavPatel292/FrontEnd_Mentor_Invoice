import { draftInvoice, saveInvoice } from "../../controllers/postController";

const router = require("express").Router();

router.post("/saveInvoice", saveInvoice);
router.post("/draftInvoice", draftInvoice);

module.exports = router;
