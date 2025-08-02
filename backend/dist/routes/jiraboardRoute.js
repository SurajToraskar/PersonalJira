"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jiraboardController_1 = require("../controllers/jiraboardController");
const express = require("express");
const router = express.Router();
router.get("/", jiraboardController_1.getJiraBoardData);
exports.default = router;
