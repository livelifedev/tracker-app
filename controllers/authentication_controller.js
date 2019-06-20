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

function loginNew(req, res) {
    res.render("authentication/login");
}

async function loginCreate(req, res) {
    // res.json(req.body);  //testing

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.render("authentication/login", { error: "Invalid email & password" });
    }

    // const valid = await user.verifyPassword(password);

    // if (!valid) {
    //     return res.render("authentication/login", { error: "Invalid email & password" });
    // }

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
    logout,
    loginNew,
    loginCreate
}