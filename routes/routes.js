const router = require("express").Router();

const userControllers = require("../controllers/userControllers");

const user = new userControllers();

router.route("/signup").post(user.save);

module.exports = router;
