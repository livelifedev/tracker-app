const UserModel = require("./../database/models/user_model");

function registerNew(req, res) {
    res.render("authentication/register");
}

async function registerCreate(req, res) {
    const {username, email, password, rank} = req.body;
    const user = await UserModel.create({username, email, password, rank});
    req.session.user = user;
    res.redirect("/dashboard");
}

function logout(req, res) {
    req.session.destroy(() => {
        res.redirect("/");
    });
}

module.exports = {
    registerNew,
    registerCreate,
    logout
}