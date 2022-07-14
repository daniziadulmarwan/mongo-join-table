const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Player", playerSchema);
