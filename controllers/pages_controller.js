function home(req, res) {
  res.render("pages/home");
}

function about(req, res) {
  res.render("pages/about");
}

async function dashboard(req, res) {
  const user = req.session.user;
  console.log("testing dashboard",user);
  res.render("pages/dashboard", {user});
}

module.exports = {
  home,
  about,
  dashboard
}