const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Subscription Management Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

const planRoutes = require("./routes/planRoutes");
app.use(express.json());
app.use("/api/plans", planRoutes);

const subscriptionRoutes = require("./routes/subscriptionRoutes");
app.use("/api/subscription",subscriptionRoutes);
