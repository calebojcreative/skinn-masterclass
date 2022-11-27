const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to datatbase
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (rep, res) => {
  res.status(200).json({ message: "Welcome to the DHL Masterclass API" });
});

// Routes
app.use("/api/subscribers", require("./routes/subscriberRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
