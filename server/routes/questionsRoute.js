import express from "express";

const questionsRoute = express.Router();

questionsRoute.get("/", (req, res) => {
  res.send("Hello");
});

/* getAllQuestions */

export default questionsRoute;
