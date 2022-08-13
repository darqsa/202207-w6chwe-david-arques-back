import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
