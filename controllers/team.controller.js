const Team = require("../models/Team");
const Player = require("../models/Player");
const Coach = require("../models/Coach");

class TeamController {
  async get(req, res) {
    try {
      const teams = await Team.aggregate([
        {
          $lookup: {
            from: Player.collection.name,
            localField: "_id",
            foreignField: "team_id",
            as: "players",
          },
        },
        {
          $lookup: {
            from: Coach.collection.name,
            localField: "_id",
            foreignField: "team_id",
            as: "coach",
          },
        },
      ]);

      res.status(200).jsonp({
        message: "success",
        data: teams,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const team = await Team.findById(id);
      if (team) {
        res.status(301).jsonp({
          message: "failed to get data",
        });
      }
      res.status(200).jsonp({
        message: "success",
        data: teams,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async post(req, res) {
    try {
      const { name, location } = req.body;
      const team = await Team.create({ name, location });
      res.status(201).jsonp({
        message: "success",
        data: team,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(req, res) {
    try {
      const team = await Team.findById(req.params.id);
      await team.remove();
      res.status(200).jsonp({
        message: "success delete data",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TeamController();
