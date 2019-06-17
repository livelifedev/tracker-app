const PigeonModel = require("./../database/models/pigeon_model");

async function index(req, res) {
  return res.render("pigeon/index");
}

async function create(req, res) {

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