const router = require("express").Router();
const verifyToken = require("../utils/auth");

const userControllers = require("../controllers/userControllers");

const user = new userControllers();

router.route("/signup").post(user.save);
router.route("/login").post(user.findOne);
router.route("/logout").get(user.logout);
router.route("/user").get(verifyToken, user.verify);

module.exports = router;
