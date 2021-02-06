const Router = require("express").Router();
let User = require("./userModel");
let Group = require("./groupModel");

// PUT create nudge
Router.route("/getNudged").put(async (req, res) => {
  try {
    const username = req.body.username;
    const message = req.body.message;
    const sender = req.body.sender;
    const nudgeData = {
      from: sender,
      message: message
    }
    const currUser = await User.findOne({ username: username })
      .catch(() => res.status(404).json({ error: "User not found" }))
    currUser.nudges.push(nudgeData)
    currUser.save()
      .then(() => res.status(200).json({ currUser }))
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error adding friend. Please try again.",
    });
  }
});

// PUT add friend
Router.route("/addFriend").put(async (req, res) => {
  try {
    const username = req.body.username;
    const friendUsername = req.body.friendUsername;
    const currUser = await User.findOne({ username: username })
      .catch(() => res.status(404).json({ error: "User not found" }))
    currUser.friends.push(friendUsername)
    currUser.save()
      .then(() => res.status(200).json({ currUser }))
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error adding friend. Please try again.",
    });
  }
});

//GET return all data user by
Router.route("/getUserInfo").get(async (req, res) => {
  try {
    const username = req.body.username;
    const currUser = await User.findOne({ username: username });
    if (!currUser)
      return res.status(404).json({
        error: "User not found",
      });
    return res.status(200).json({ currUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error getting friends. Please try again.",
    });
  }
});

//PUT add user to group
Router.route("/addUserToGroup").put(async (req, res) => {
  try {
    const username = req.body.username;
    const groupName = req.body.groupName;

    const curGroup = await Group.findOne({ name: groupName })
      .catch(() => res.status(404).json({ error: "Group not found" }))
    curGroup.users.push(username)
    curGroup.save()

    const curUser = await User.findOne({ username: username })
      .catch(() => res.status(404).json({ error: "User not found" }))
    curUser.groups.push(groupName)
    curUser.save()

    return res.status(200).json({
      group: curGroup,
      user: curUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error adding to group. Please try again.",
    });
  }
});

//POST create new group
Router.route("/newGroup")
  .post(async (req, res) => {
    try {
      const name = req.name;
      const users = req.users;
      if (!users)
        return res.status(400).json({
          error: "Users cannot be empty",
        });
      // Replace this with string of usernames
      if (!name) name = "Unnamed group";
      const newGroup = await new Group({
        name,
        users,
      }).save();
  })
  .put((req, res) => {
    const users = req.users;
    users.forEach((curUser) => {
      const user = User.findOne({ username: curUser });
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
Router.route("/newUser").post(async (req, res) => {
  try {
    const username = req.username;
    const password = req.password;
    if (!username || !password) {
      return res.status(400).json({
        error: "Username or password cannot be empty",
      });
    }
    const newUser = await new User({
      username,
      password,
    }).save();
    return res.status(200).json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error signing up user. Please try again.",
    });
  }
});

//GET login for existing user
Router.route("/loginUser/:id").get(async (req, res) => {
  try {
    const username = req.username;
    const user = await User.findOne({ username: username });
    if (!user)
      return res.status(404).json({
        error: "User not found",
      });
    if (user.password == req.password) {
      return res.status(200).json({ user });
    }
    return res.status(401).json({
      error: "Incorrect password. Please try again.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error logging in. Please try again.",
    });
  }
});

module.exports = Router;
