const express = require("express");
const cors = require("cors");

const wishes = require("./wishes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Wishing Well.");
});

app.get("/wishes", (req, res) => {
  res.send(wishes);
});

app.get("/wishes/:id", (req, res) => {
  const filtered = wishes.filter((w) => w.id == req.params.id);
  res.send(filtered[0]);
});

app.get("/mostwished", (req, res) => {
  const sortedWishes = wishes.sort((a, b) => b.votes - a.votes);
  res.send(sortedWishes);
});

app.post("/wishes", (req, res) => {
  const newWish = req.body;
  newWish["id"] = wishes.length;
  wishes.push(newWish);
  res.status(201).send(newWish);
});

module.exports = app;
