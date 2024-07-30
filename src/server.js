// server.js (Express server)
const express = require("express");
const bodyParser = require("body-parser");
const { runQuery } = require("./db");

const app = express();
app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await runQuery(
      "SELECT * FROM login WHERE email = $1 AND password = $2",
      [email, password]
    );
    if (result.length > 0) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
