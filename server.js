/********************************************************************************

* WEB322 – Assignment 04

* 

* I declare that this assignment is my own work in accordance with Seneca's

* Academic Integrity Policy:

* 

* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html

* 

* Name: Devang Asnadia Student ID: 161894217 Date: 10/11/23

*

* Published URL: 

*

********************************************************************************/
const express = require("express");
const legoData = require("./modules/legoSets");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.render("home", { page: '/' });
});

app.get('/about', (_req, res) => {
  res.render("about", { page: '/about' });
});

app.get("/lego/sets", (_req, res) => {
  legoData
    .getAllSets()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get("/lego/sets/num-demo/:id", (req, res) => {
  legoData
    .getSetByNum(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.get("/lego/sets/theme-demo/:name", (req, res) => {
  legoData
    .getSetsByTheme(req.params.name)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

const startServer = async () => {
  try {
    await legoData.initialize();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(`Failed to listen on port ${PORT}`);
  }
};
startServer();





