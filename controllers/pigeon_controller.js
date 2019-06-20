const PigeonModel = require("./../database/models/pigeon_model");
const UserModel = require("./../database/models/user_model");

async function index(req, res) {
  const userId = req.session.user._id;
  let user = await UserModel.findById(userId);
  let pigeons = await PigeonModel.find();
  res.render("pigeon/index", {pigeons, user});
}

async function create(req, res) {
  const userId = req.session.user._id;
  let {name, description, behaviour, location, activity, region, count} = req.body;
  let pigeon = await PigeonModel.create({name, description, behaviour, location, activity, region, count})
      .catch(err => res.status(500).send(err));

  let user = await UserModel.findById(userId);

  user.encounters.push(pigeon);
  user.documented.push(pigeon);
  await user.save();
    
  res.redirect("/pigeons");
}

async function make(req, res) {
  const userId = req.session.user._id;
  let user = await UserModel.findById(userId);
  res.render("pigeon/new", {user});
}

async function show(req, res) {
  const userId = req.session.user._id;
  let user = await UserModel.findById(userId);

  let { id } = req.params;
  let pigeon = await PigeonModel.findById(id);
  console.log("show page", pigeon);
  res.render("pigeon/show", {pigeon, user});
}

async function destroy(req, res) {
  let { id } = req.params;
  await PigeonModel.findByIdAndRemove(id);
  res.redirect("/pigeons");
}

async function update(req, res) {

}

async function edit(req, res) {

}

// async function activity(req, res) {
//   let {id} = req.params;
//   let {activity} = req.body;
  
//   let pigeon = await PigeonModel.findById(id);
//   pigeon.activity.push(activity);

//   await pigeon.save();

//   res.redirect(`/pigeons/${id}`);
// }

async function logNew(req, res) {
  const userId = req.session.user._id;
  let user = await UserModel.findById(userId);

  let { id } = req.params;
  let pigeon = await PigeonModel.findById(id);
  res.render("pigeon/log", {pigeon, user});
}

async function logAdd(req, res) {
  const userId = req.session.user._id;
  let {id} = req.params;
  let {activity, location} = req.body;
  
  let pigeon = await PigeonModel.findById(id);
  pigeon.count++;
  pigeon.activity.unshift(activity);
  pigeon.location.unshift(location);

  await pigeon.save();

  let user = await UserModel.findById(userId);
  user.encounters.push(pigeon);
  await user.save();

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
  // activity,
  logNew,
  logAdd
}