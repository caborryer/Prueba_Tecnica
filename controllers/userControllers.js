const users = require("../models/user");
const { encryptPassword, decryptPassword } = require("../utils/bycript");

class userController {
  constructor() {}
  async save(req, res, next) {
    try {
      let { email, password } = req.body;
      password = await encryptPassword(password);
      const user = new users({ email, password });

      user.save(err => {
        if (err)
          return res.status(400).json({ message: "Error on create user" });

        res.status(200).json({
          message: "The user has been registered",
          user
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error: " + err.toString() });
    }
  }
}

module.exports = userController;
