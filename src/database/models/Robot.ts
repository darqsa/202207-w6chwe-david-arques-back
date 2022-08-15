import { model, Schema } from "mongoose";

const statsSchema = new Schema({
  strength: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  speed: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
});

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  creationDate: {
    type: Date,
    required: true,
  },

  stats: statsSchema,
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
