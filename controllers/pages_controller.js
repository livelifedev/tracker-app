async function home(req, res) {
  return res.render("pages/home");
}

async function about(req, res) {
  return res.render("pages/about");
}

module.exports = {
  home,
  about
}