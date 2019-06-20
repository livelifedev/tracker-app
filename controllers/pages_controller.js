function home(req, res) {
  res.render("pages/home");
}

function about(req, res) {
  res.render("pages/about");
}

function dashboard(req, res) {
  res.render("pages/dashboard");
}

module.exports = {
  home,
  about,
  dashboard
}