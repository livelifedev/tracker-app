const UserModel = require("./../database/models/user_model");

function home(req, res) {
  res.render("pages/home");
}

function about(req, res) {
  res.render("pages/about");
}

async function dashboard(req, res) {
  const userId = req.session.user._id;
  let user = await UserModel.findById(userId);
  console.log("testing dashboard",user);
  res.render("pages/dashboard", {user});
}

module.exports = {
  home,
  about,
  dashboard
}