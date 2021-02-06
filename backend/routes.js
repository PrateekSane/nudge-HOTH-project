const Router = require("express").Router();
let User = require("./userModel");
let Group = require("./groupModel");
/*
GET return user by ID (we can use this to get nudges too)
PUT add friend
PUT create nudge
*/

//GET return all data user by
Router.route("/getUserFriends").get((req, res) => {
  const username = req.username;
  User.findOne(username)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

//PUT add user to group
Router.route("/addUserToGroup").put((req, res) => {
  const username = req.username;
  const group = req.group;
  const curGroup = Group.findOne({ group });
  const curUser = User.findOne({ username });
  curGroup.users
    .push(username)
    .save()
    .then(() => res.json("user successfully added to group"))
    .catch((err) =>
      res.status(400).json(`${username} not added to group` + err)
    );
  curUser.groups
    .push(group)
    .save()
    .then(() => res.json("group successfully added to user"))
    .catch((err) => res.status(400).json(`${group} not added to user` + err));
});

//POST create new group
Router.route("/newGroup")
  .post((req, res) => {
    const name = req.name;
    const users = req.users;
    const newGroup = new Group({
      name,
      users,
    });
    newGroup
      .save()
      .then(() => res.json("new group successfully made"))
      .catch((err) => res.status(400).json("group not created" + err));
  })
  .put((req, res) => {
    const users = req.users;
    users.forEach((curUser) => {
      const user = User.findOne({ curUser });
      user.groups.push(req.name);
      user
        .save()
        .then(() => res.json("user added to group"))
        .catch((err) =>
          res.status(400).json(`${user.username} not added to group` + err)
        );
    });
  });

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
