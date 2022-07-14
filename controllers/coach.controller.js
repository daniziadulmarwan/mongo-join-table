const Coach = require("../models/Coach");

class CoachController {
  async get(req, res) {
    try {
      const coachs = await Coach.find();
      res.status(200).jsonp({
        message: "success",
        data: coachs,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const coach = await Coach.findById(id);
      if (coach) {
        res.status(301).jsonp({
          message: "failed to get data",
        });
      }
      res.status(200).jsonp({
        message: "success",
        data: coach,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async post(req, res) {
    try {
      const { name, nationality, team_id } = req.body;
      const coach = await Coach.create({ name, nationality, team_id });
      res.status(201).jsonp({
        message: "success",
        data: coach,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CoachController();
