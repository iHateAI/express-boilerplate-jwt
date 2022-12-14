const express = require("express");

const router = express.Router();

const { authCtrl } = require("../controllers");

router.post("/login", authCtrl.login);
router.post("/register", authCtrl.register);

module.exports = router;
