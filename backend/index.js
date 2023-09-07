require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const uri = process.env.mongodbString;

const PORT = process.env.PORT || 4001;

const userSchema = new mongoose.Schema({
  username: String,
  userMobile: String,
  userEmail: String,
});

const userDetail = mongoose.model("UserDetail", userSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/userList", async (req, res) => {
  let allList = await userDetail.find({});
  res.json(allList);
});

app.get("/userList/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userDetail.findById(userId);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/userDetail", async (req, res) => {
  try {
    const { username, userMobile, userEmail } = req.body;
    await userDetail.create({
      username,
      userMobile,
      userEmail,
    });
    res.json({ success: true, message: "User details saved successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to save user details" });
  }
});

app.put("/userList/:id", async (req, res) => {
  const userId = req.params.id;
  const { username, userMobile, userEmail } = req.body;
  try {
    await userDetail.findByIdAndUpdate(userId, {
      username,
      userMobile,
      userEmail,
    });
    res.json({ success: true, message: "User details updated successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to update user details" });
  }
});

app.delete("/userList/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await userDetail.findByIdAndRemove(userId);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to delete user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose.connect(uri);
});
