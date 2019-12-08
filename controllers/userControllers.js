const users = require("../models/user");
const jwt = require("jsonwebtoken");

const verifyToken = require("../utils/auth");
const { encryptPassword, decryptPassword } = require("../utils/bycript");
const config = require("../config/config");

class userController {
  constructor() {}
  //Registrar usuario
  async save(req, res, next) {
    try {
      let { email, password, username } = req.body;
      password = await encryptPassword(password);
      const user = new users({ email, password, username });

      user.save(err => {
        if (err)
          return res.status(400).json({ message: "Error on create user" });

        const token = jwt.sign({ id: user._id }, config.secretAuthKey, {
          expiresIn: 60 * 60 * 24
        });

        res.status(200).json({ auth: true, token });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error: " + err.toString() });
    }
  }

  //Verificar JWT
  async verify(req, res, next) {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).send("No user found.");
    }
    res.status(200).json(user);
  }
}

module.exports = userController;
