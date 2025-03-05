require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const botRoutes = require("./routes/botRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Default route to check if the server is running
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.use("/bots", botRoutes);

const PORT = process.env.PORT || 3000; // Use Render's assigned port or default to 8080
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
