require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const botRoutes = require("./routes/botRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/bots", botRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
