const router = require("express").Router();
const verifyToken = require("../utils/auth");

const userControllers = require("../controllers/userControllers");
const arrayControllers = require("../controllers/arrayControllers");

const user = new userControllers();
const array = new arrayControllers();

//user routes
router.route("/signup").post(user.save);
router.route("/login").post(user.findOne);
router.route("/logout").get(user.logout);
router.route("/user").get(verifyToken, user.verify);

//array routes
router.route("/asc").get(verifyToken, array.asc);
router.route("/des").get(verifyToken, array.desc);
router.route("/mix").get(verifyToken, array.mix);

module.exports = router;
