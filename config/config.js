require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  secretAuthKey: process.env.SECRET_KEY,

  db_url: process.env.DB_URL
};
