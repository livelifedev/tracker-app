const PigeonModel = require("./../database/models/pigeon_model");

async function index(req, res) {
  let pigeons = await PigeonModel.find();;
  return res.render("pigeon/index", {pigeons});
}

async function create(req, res) {
  let {name, description, behaviour, location} = req.body;
  let pigeon = await PigeonModel.create({ name, description, behaviour, location })
      .catch(err => res.status(500).send(err));

  return res.redirect("/pigeons");
}

async function make(req, res) {
  return res.render("pigeon/new");
}

async function show(req, res) {

}

async function destroy(req, res) {

}

async function update(req, res) {

}

async function edit(req, res) {

}

module.exports = {
  index,
  create,
  make,
  show,
  destroy,
  update,
  edit
}