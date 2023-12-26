import {
  draftInvoice,
  paidInvoice,
  saveInvoice,
} from "../../controllers/postController";
import { validateInvoiceId } from "./../../middleware/checkId";

const router = require("express").Router();

router.post("/saveInvoice", saveInvoice);
router.post("/draftInvoice", draftInvoice);
// TODO: make this route in update Invoice
router.post("/madeInvoicePaid", validateInvoiceId, paidInvoice);

module.exports = router;
