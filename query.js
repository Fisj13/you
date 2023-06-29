const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/myProjectDB",
    { useNewUrlParser: true })
    .then(() => {
        console.log("connnected successfully to server.");
    })
    .catch((err) => {
        console.log("Conection Error");
        console.log(err);
    });

    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
    });

    const User = mongoose.model("User", userSchema);

    User.find({ age: 38 })
    .then((users) => console.log(users))
    .catch((err) => console.error(err));