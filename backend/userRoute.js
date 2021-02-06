const Router = require("express").Router();
let User = require("./userModel");

/*
GET return user by ID (we can use this to get nudges too)
GET return all friends of user
GET return all groups user is in
PUT add friend
PUT add user to group
PUT create nudge
*/

//POST create new user
Router.route("/newUser").post((req, res) => {
  const username = req.username;
  const password = req.password;

  const newUser = new User({
    username,
    password,
  });
  newUser
    .save()
    .then(() => res.json("user successfully added"))
    .catch((err) => res.status("400").json("user not added " + err));
});

//GET login for existing user
Router.route("/loginUser/:id").get((req, res) => {
  const username = req.username;
  const user = User.findOne({ username });
  let valid = false;
  if (user.password == req.password) {
    valid = true;
  }

  return res.json({ validUser: valid });
});
