function home(req, res) {
  res.render("pages/home");
}

function about(req, res) {
  res.render("pages/about");
}

async function dashboard(req, res) {
  // const {username, email, password, rank} = req.body;
  // const user = await UserModel.create({username, email, password, rank});
  const user = req.session.user;
  console.log("testing dashboard",user);
  // req.session.user = user;
  res.render("pages/dashboard", {user});
}

module.exports = {
  home,
  about,
  dashboard
}