const express = require("express");
const mongoose = require("mongoose");

const Blog = require("./models/blog");
const app = express();

const dbURL = " MongoDB cluster link ";  //Connect Your Mongodb cluster ( Add the link of connection here)

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(dbURL).then(() => {
  console.log("mongo connected");
  app.listen(3000);
}).catch((err) => {
  console.log(err);
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "Homepage", blogs: result });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "404 Page" });
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });

  blog.save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.render("create", { title: "New Blog", error: "Error saving the blog." });
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// 🔥 New: Single blog view
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      if (result) {
        res.render("blog-details", { blog: result, title: result.title });
      } else {
        res.render("404", { title: "Blog Not Found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.render("404", { title: "Blog Not Found" });
    });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 handler
app.use((req, res) => {
  res.render("404", { title: "404 Page" });
});

// Graceful shutdown
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  });
});
