const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.get("/login", authController.getLogin);
router.get("/sign-in", authController.getSignIn);

module.exports = router;
