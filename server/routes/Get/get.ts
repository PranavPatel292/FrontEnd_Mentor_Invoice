import {
  getAllInvoices,
  getFilterInvoices,
  getInvoice,
} from "../../controllers/getController";
import { validateInvoiceId } from "../../middleware/checkId";

const router = require("express").Router();

router.get("/getAllInvoices", getAllInvoices);
// pass filter type in query parameters
router.get("/filterInvoices", getFilterInvoices);
router.get("/getInvoice", validateInvoiceId, getInvoice);

module.exports = router;
