const asyncHandler = require("express-async-handler");

const Subscriber = require("../models/subscriberModel");

// @desc Add a new subscriber
// @route /api/subscribers
// @access Public
const addSubscriber = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Validation
  if (!email) {
    res.status(400);
    throw new Error("Please input valid email address");
  }

  // Find if subscriber already exists
  const subscriberExists = await Subscriber.findOne({ email });

  if (subscriberExists) {
    res.status(400);
    throw new Error("Subscriber already exists");
  }

  // Email confirmation
  // In progress

  // Create subscriber
  const subscriber = await Subscriber.create({
    email,
  });

  if (subscriber) {
    res.status(201).json({
      _id: subscriber._id,
      email: subscriber.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email address");
  }
});

module.exports = { addSubscriber };
