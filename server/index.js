const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const mongoose = require("mongoose");

const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false, limit : '50mb' }));
app.use(express.json({ limit : '50mb' }));
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/diary', require('./routes/diary'));

app.use('/server/uploads', express.static('uploads/'));

/* app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
}); */

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});