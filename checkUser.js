var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/tv2024")
var User = require("./models/user.js").User
var first_user = new User({
username: "Эдем",
password: "12345"
})
first_user.save();