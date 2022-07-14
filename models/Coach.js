const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  nationality: {
    type: String,
  },
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Coach", coachSchema);
