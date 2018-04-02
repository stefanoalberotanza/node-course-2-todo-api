const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require('mongodb');

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todos");
var { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

//GET /todos/123456

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send("not valid");
    };

    Todo.findById(id).then((todoId) => {
        if(!todoId) {
            return res.status(404).send();
        }
        res.send(todoId);
    }).catch((e) => {
        res.status(400).send();
    })
    // Todo.findById(id).then((todoId) => {
//     console.log('Todo by Id', todoId);
// }).catch((e) => console.log(e));
  //Valid id using isValid
  //404 - send back empty send();

  // findById
  // success
  // if todo - send it back
  // if no todo - send back 404 with empty body
  // error
  // 400 - and send empty body back
});

app.listen(3000, () => {
  console.log("Starting on port 3000");
});

module.exports = { app };
