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

    const newUser = new User({
        name: " Fernando Isart2",
        email: "fernandot@gmail.com",
        age: 38,
    });

    newUser
    .save()
    .then(() => console.log("User saved to the database"))
    .catch((err) => console.error(err));