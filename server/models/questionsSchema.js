import mongodb from "../db/mongodb.js";

const questionsSchema = new mongoose.Schema({
  /* define a Questions Schema Game Logic*/
});

export default mongoose.model("Questions", questionsSchema);
