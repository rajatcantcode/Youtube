const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./db/mongoose-connection");

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED ", err);
  });

// Define a route for the homepage
const indexRouter = require("./routes/index-router");
app.use("/", indexRouter);
