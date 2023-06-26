const { Schema, model } = require("mongoose");

const GroupSchema = new Schema(
  {
    group_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Group = model("Group", GroupSchema);

module.exports = Group;
