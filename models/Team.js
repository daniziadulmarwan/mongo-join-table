const mongoose = require("mongoose");
const Coach = require("./Coach");
const Player = require("./Player");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
});

teamSchema.pre("remove", async function (next) {
  const team = this;
  await Coach.deleteMany({ team_id: team._id });
  await Player.deleteMany({ team_id: team._id });
  next();
});

module.exports = mongoose.model("Team", teamSchema);
