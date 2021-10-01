const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const name = firstName + " " + lastName;

  // Unique ID
  function genID() {
    this.inner = [];
    this.unique = function(id) {
      for (var actID in this.inner) {
        if (actID === this.inner) {
          break;
          return false;
        }
      }
      return id;
    };
    this.gen = function(len) {
      len = typeof len !== "number" ? 36 : len;
      let id = false;
      while (!id) {
        id = this.unique('_' + (Date.now().toString(len) + Math.random().toString(len).substr(2, 5)).toUpperCase());
      }
      this.inner.push(id);
      console.log(this.inner);
      return id;
    };
    return this;
  }

  const foo = new genID();
  const ID = foo.gen();

  // Date and time
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  const day = cDay + "/" + cMonth + "/" + cYear;

  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  // result

  res.send(ID + " " + name + " " + day + " " + time);
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
