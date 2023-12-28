const User = require("../models/user");

exports.postSignup = (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        return res.status(422);
      }
      return User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        password: password,
        role: "user",
      }).then(() => {
        res.status(200).json({ message: "Signup successful" });
      });
    })
    .catch((err) => {
      const error = new Error(err);
      res.status(500).json({ message: "Server error" });
    });
};

//     "first_name" : "Rostyslav",
//     "last_name" : "Tester",
//     "email": "test@gmail.com",
//     "phone" : "57809812121",
//     "password" : "qwerty1"

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ message: "Invalid email" });
      }
      res.status(200).json({
        message: `Name: ${user.first_name}, Surname: ${user.last_name}, Email: ${user.email}, Phone: ${user.phone}, Role: ${user.role}`,
      });
    })
    .catch((err) => {
      const error = new Error(err);
      res.status(500).json({ message: "Server error" });
    });
};
