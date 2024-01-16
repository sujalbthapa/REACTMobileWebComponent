const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const User = require('./Models/user.model.js');
const Announcement = require("./Models/announcement.model");

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://sujalbt:sujalbt123@testcluster.oo4jwxq.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

const loginRoute = require("./Routes/login.route");
const signupRoute = require("./Routes/signup.route");
const dbRoute = require("./Routes/dashboard.route");
const emailSortRoute = require("./Routes/emailSort.route");
const updateUserRoute = require("./Routes/updateUser.route");
const viewUserRoute = require("./Routes/viewUser.route");
const postAnnouncementRoute = require("./Routes/postAnnouncement.route");
const updateAnnouncementRoute = require("./Routes/updateAnnouncement.route");
const getAnnouncementRoute = require("./Routes/getAnnouncement.route");

app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/dashboard", dbRoute);
app.use("/emailsort", emailSortRoute);
app.use("/updateuser", updateUserRoute);
app.use("/viewuser", viewUserRoute);
app.use("/postann", postAnnouncementRoute);
app.use("/updateann", updateAnnouncementRoute);
app.use("/getann", getAnnouncementRoute);


app.get("/emailview", async (req, res) => {
    try{
        const user = await User.findOne({username: req.session.username});
        if(!user){
            return res.status(400).json({message: "Not loggerd in yet"});
        }
        res.json(user.email);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

app.delete("/deleteuser/:userId", async (req, res) => {
    try{
        const user = await User.findOne({username: req.session.username});
        if(!user){
            return res.status(400).json({message: "Not logged in yet"});
        }
        const userFound = await User.findOne({userId: req.params.userId});
        if(!userFound){
            return res.status(400).json({message: "User not found"});
        }
        await User.deleteOne({userId: req.params.userId});
        res.status(200).json({message: "User deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

app.delete("/deleteann/:annId", async (req, res) => {
    try{
        const user = await User.findOne({username: req.session.username});
        const ann = await Announcement.findOne({annId: req.params.annId});
        if(!user){
            return res.status(400).json({message: "Not logged in yet"});
        }
        const annFound = await User.findOne({userId: req.params.annId});
        if(!annFound){
            return res.status(400).json({message: "Announcement not found"});
        }
        await Announcement.deleteOne({annId: req.params.annId});
        res.status(200).json({message: "Announcement deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.status(200).send("Logged out");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
