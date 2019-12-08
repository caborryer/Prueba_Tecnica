const router = require("express").Router();
const verifyToken = require("../utils/auth");

const userControllers = require("../controllers/userControllers");

const user = new userControllers();

router.route("/signup").post(user.save);
// router.route("/login").get(user.findOne);
router.route("/user").get(verifyToken, user.verify);

module.exports = router;
