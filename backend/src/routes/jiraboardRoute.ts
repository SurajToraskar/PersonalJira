import { getJiraBoardData } from "../controllers/jiraboardController";

const express = require("express");
const router = express.Router();

router.get("/", getJiraBoardData);

export default router;
