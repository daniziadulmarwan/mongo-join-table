const Player = require("../models/Player");

class PlayerController {
  async get(req, res) {
    try {
      const players = await Player.find();
      res.status(200).jsonp({
        message: "success",
        data: players,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const player = await Team.findById(id);
      if (player) {
        res.status(301).jsonp({
          message: "failed to get data",
        });
      }
      res.status(200).jsonp({
        message: "success",
        data: player,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async post(req, res) {
    try {
      const { name, age, team_id } = req.body;
      const player = await Player.create({ name, age, team_id });
      res.status(201).jsonp({
        message: "success",
        data: player,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PlayerController();
