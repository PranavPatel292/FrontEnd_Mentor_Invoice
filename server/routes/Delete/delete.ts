import { deleteInvoice } from "../../controllers/deleteController";
import { validateInvoiceId } from "../../middleware/checkId";

const router = require("express").Router();

router.delete("/deleteInvoice", validateInvoiceId, deleteInvoice);
module.exports = router;
