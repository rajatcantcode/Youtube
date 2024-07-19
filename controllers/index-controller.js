module.exports.homeController = (req, res) => {
  res.render("index", { title: "Rajat" });
  // res.send(req.randomNumber.toString());
};
