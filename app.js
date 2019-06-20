require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const app = express();
const port = 3000;

app.use(express.static("public"));

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes"));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));