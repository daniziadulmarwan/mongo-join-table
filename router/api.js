const Router = require("express").Router();

const CoachController = require("../controllers/coach.controller");
const PlayerController = require("../controllers/player.controller");
const TeamController = require("../controllers/team.controller");

Router.get("/team", TeamController.get);
Router.post("/team", TeamController.post);
Router.delete("/team/:id", TeamController.destroy);

Router.get("/player", PlayerController.get);
Router.post("/player", PlayerController.post);

Router.get("/coach", CoachController.get);
Router.post("/coach", CoachController.post);

module.exports = Router;
