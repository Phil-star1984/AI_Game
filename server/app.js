import express from "express";
import cors from "cors";
import questionsRouter from "./routes/questionsRoute.js";
import "./db/mongodb.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/questions", questionsRouter);

app.listen(PORT, (req, res) => {
  console.log(`Example App listening on http://localhost:${PORT}`);
});
