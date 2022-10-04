const express = require("express");

const router = express.Router();

const { authCtrl } = require("../controllers");

router.get("/login", authCtrl.login);
router.get("/logout", authCtrl.logout);

module.exports = router;
