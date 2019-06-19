function home(req, res) {
  res.render("pages/home");
}

function about(req, res) {
  res.render("pages/about");
}

function dashboard(req, res) {
  res.send("Welcome to your dashboard!");
}

module.exports = {
  home,
  about,
  dashboard
}