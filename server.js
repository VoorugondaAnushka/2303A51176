// const Log = require("../middleware/logger");

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnVzaGthdm9vcnVnb25kYTA1QGdtYWlsLmNvbSIsImV4cCI6MTc4MTc3MDkwMSwiaWF0IjoxNzgxNzcwMDAxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjZkNjk1MDQtNmVkOS00M2IyLWExNGUtNDAzNzQyNWI1YmE1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidm9vcnVnb25kYSBhbnVzaGthIiwic3ViIjoiMWRiODQyM2QtOTA2Zi00ODU0LThkMzktM2ZiYTY3Njg1MDZkIn0sImVtYWlsIjoiYW51c2hrYXZvb3J1Z29uZGEwNUBnbWFpbC5jb20iLCJuYW1lIjoidm9vcnVnb25kYSBhbnVzaGthIiwicm9sbE5vIjoiMjMwM2E1MTE3NiIsImFjY2Vzc0NvZGUiOiJiRHJlQXEiLCJjbGllbnRJRCI6IjFkYjg0MjNkLTkwNmYtNDg1NC04ZDM5LTNmYmE2NzY4NTA2ZCIsImNsaWVudFNlY3JldCI6ImV2c2NUaGhNS1ZkeFBlZVIifQ.e3b21Gx35lTbYAzzGLGFA1tX731GyYuaazd5YMj3aKI";

require("dotenv").config();

const express = require("express");
const Log = require("./middleware/logger");

const scheduleRoutes = require("./vehicle-scheduler-be/routes/scheduleRoutes");

const app = express();

app.use(express.json());

app.use("/api", scheduleRoutes);

app.get("/test", async (req, res) => {
  await Log(
    "backend",
    "info",
    "service",
    "test log sent successfully"
  );

  res.json({
    message: "Log Sent"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});