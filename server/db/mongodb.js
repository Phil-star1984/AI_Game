import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://Phil:4nYe7bhUpYlNStUJ@AI_Game.nwktpel.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.stack);
  });
