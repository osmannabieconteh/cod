
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function (req, res) {
    db.Post.findAll({})
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function (req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/posts", function (req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
  app.put("/api/posts", function (req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
};
