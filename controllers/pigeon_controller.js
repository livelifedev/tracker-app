const PigeonModel = require("./../database/models/pigeon_model");

async function index(req, res) {
  let pigeons = await PigeonModel.find();;
  return res.render("pigeon/index", {pigeons});
}

async function create(req, res) {
  let {name, description, behaviour, location, activity} = req.body;
  let pigeon = await PigeonModel.create({ name, description, behaviour, location, activity })
      .catch(err => res.status(500).send(err));

  return res.redirect("/pigeons");
}

async function make(req, res) {
  return res.render("pigeon/new");
}

async function show(req, res) {
  let { id } = req.params;
  let pigeon = await PigeonModel.findById(id).populate("pigeon");
  console.log(pigeon);
  res.render("pigeon/show", { pigeon });
}

async function destroy(req, res) {
  console.log("RUNNNNNNNN");
  let { id } = req.params;
  await PigeonModel.findByIdAndRemove(id);
  res.redirect("/pigeons");
}

async function update(req, res) {

}

async function edit(req, res) {

}

async function activity(req, res) {
  let {id} = req.params;
  let {activity} = req.body;
  
  let pigeon = await PigeonModel.findById(id);
  pigeon.activity.push(activity);

  await pigeon.save();

  res.redirect(`/pigeons/${id}`);
}

module.exports = {
  index,
  create,
  make,
  show,
  destroy,
  update,
  edit,
  activity
}