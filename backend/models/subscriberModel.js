const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add a name"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscriber", subscriberSchema);
