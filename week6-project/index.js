const express = require("express");

const app = express();

app.post("/add", (req, res) => {
  res.send(req.body.a + req.body.b);
});

app.post("/subtract", (req, res) => {
  res.send(req.body.a - req.body.b);
});

app.post("/multiply", (req, res) => {
  res.send(req.body.a * req.body.b);
});

app.post("/divide", (req, res) => {
  res.send(req.body.a / req.body.b);
});

app.get("/webpagedata", (req, res) => {
  res.send("This is some data that needs to be rendered on a webpage");
})

app.listen(3001);
