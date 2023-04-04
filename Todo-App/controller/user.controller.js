const UserService = require("../services/user.services");
require("dotenv").config();

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const sucessRes = await UserService.userRegistration(email, password);

    res.json({ status: true, sucessRes: "User Registered Sucessfully" });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const User = await UserService.checkUser(email);

    if (!User) {
      throw new Error("User Doesn't exist");
    }

    const isMatch = await User.comparePassword(password);
    if (isMatch === false) {
      throw new Error("Invalid Password");
    }

    let tokenData = { _id: User._id, email: User.email };
    const token = await UserService.generateToken(
      tokenData,
      process.env.SECRET_KEY,
      "1h"
    );
    res.status(200).json({ status: true, token: token });
  } catch (error) {
    throw error;
  }
};
